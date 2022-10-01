// (1) ethers.js install - https://docs.ethers.io/v5/getting-started/#installing 
import { ethers } from "ethers";
import abi from "./abi.json"

function Minting () {
    
    // (1) connecting to metamask
    // https://docs.ethers.io/v5/getting-started/#getting-started--connecting 
    async function connectWallet () {
       console.log("clicked the conncet wallet button")
       const provider = new ethers.providers.Web3Provider(window.ethereum)
       await provider.send("eth_requestAccounts", []);
       const signer = provider.getSigner()
       console.log(signer)
    }

     // (2) blockchain info 얻어오기 (read)
     // https://docs.ethers.io/v5/getting-started/#getting-started--querying 
     async function getBlockchainInfo () {
        console.log("clicked get blockchain info button")
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner()
        console.log(signer)
        
        // Look up the current block number
        const blocknumber = await provider.getBlockNumber()
        console.log("block number", blocknumber)
     }

    // (3) info 얻어오기 (read)
    async function getAddressInfo () {
       console.log("clicked get address info button")
       const provider = new ethers.providers.Web3Provider(window.ethereum)
       await provider.send("eth_requestAccounts", []);
       const signer = provider.getSigner()
       console.log(signer)

       // // Get the balance of an account (by address or ENS name, if supported by network)
       const rawbalance = await provider.getBalance("0xb2a2075E176bF3f052Bab091d18475d996c6Cb77")
       console.log("raw balance", rawbalance)

       // Often you need to format the output to something more user-friendly,
       // such as in ether (instead of wei)
       const balance = ethers.utils.formatEther(rawbalance)
       console.log("balance", balance)
    }

    // (4) contract info 얻어오기 (read)
    // https://docs.ethers.io/v5/getting-started/#getting-started--contracts

    async function getContractInfo () {
       console.log("clicked the conncet wallet button")
       const provider = new ethers.providers.Web3Provider(window.ethereum)
       await provider.send("eth_requestAccounts", []);
       const signer = provider.getSigner()
       console.log(signer)

       // 내가 배포한 컨트렉트 Address
       const contractAddress = "0x6F6fDe1F229c40939a9037BD3aF5A35fB94AE9c6"
       const Contract = new ethers.Contract(contractAddress, abi, provider);
       console.log(Contract)

       // Address info read
       const name = await Contract.name();
       console.log("name",name)

       const symbol = await Contract.symbol();
       console.log("symbol",symbol)

       const ownerof = await Contract.ownerOf(1);
       console.log("owner of tokenId 1", ownerof)
    }

    // (5) ETH 보내보기 (write)
    async function SendETH () {
        console.log("clicked the mint button")
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner()
        console.log(signer)

        // https://docs.ethers.io/v5/getting-started/#getting-started--sending 

        const tx = signer.sendTransaction({
            to: "0xD2598507b88b6514d27Cc10e80F8e58848C4245d",
            value: ethers.utils.parseEther("0.0001")
        });

        await provider.sendTransaction(tx);
     }

    // (6) Mint 하기 (write)
    // https://docs.ethers.io/v5/getting-started/#getting-started--contracts 
    async function Mint () {
       console.log("clicked the mint button")
       const provider = new ethers.providers.Web3Provider(window.ethereum)
       await provider.send("eth_requestAccounts", []);
       const signer = provider.getSigner()
       console.log(signer)

       // 내가 배포한 컨트렉트 Address
       const contractAddress = "0x6F6fDe1F229c40939a9037BD3aF5A35fB94AE9c6"
       // tx을 생성하는 컨트렉트를 만드니까, 마지막 arument에 signer가 들어갑니다
       const ContractwithSigner = new ethers.Contract(contractAddress, abi, signer);
       console.log(ContractwithSigner)

       // Mint Function
       // https://docs.ethers.io/v5/getting-started/#getting-started--writing  
       // Contract Interaction: https://docs.ethers.io/v5/api/contract/contract/#Contract  
       const mintTx = await ContractwithSigner.mint("https://gateway.pinata.cloud/ipfs/QmXs6VnQ3PK4fnpmZuzfHTXo7yDz6TNMmZuxpMkjgDdEdn")
       console.log("Tx info", mintTx)

       // minting이 된 걸 확인하고 싶다면 https://goerli.etherscan.io/address/자기지갑주소 에서 확인
       // 저 같은 경우 https://goerli.etherscan.io/address/0xb2a2075E176bF3f052Bab091d18475d996c6Cb77  
       // 보유한 NFT들의 경우 ERC721 Token txns 에서 확인 가능합니다
    }

    // 프론트엔드에서 refresh, rendering을 하고 싶다면 이벤트를 이용하시면 됩니다
    // https://docs.ethers.io/v5/getting-started/#getting-started--events 

    return (
        <div>
            <h4>Connect Wallet</h4>
            <button onClick={connectWallet} type="button">connect wallet</button>
            <h4>Get Blockchain Info</h4>
            <button onClick={getBlockchainInfo} type="button">get blockchain info</button>
            <h4>Get Address Info</h4>
            <button onClick={getAddressInfo} type="button">get address info</button>
            <h4>Get Contract Info</h4>
            <button onClick={getContractInfo} type="button">get contract info</button>
            <h4>Send ETH</h4>
            <button onClick={SendETH} type="button">SendETH</button>
            <h4>Mint</h4>
            <button onClick={Mint} type="button">Mint</button>
        </div>
    );
}

export default Minting;