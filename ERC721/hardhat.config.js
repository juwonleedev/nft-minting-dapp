/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-waffle");
 require('@nomiclabs/hardhat-etherscan');
 
 
 task("accoun ts", "Prints the list of accounts", async () => {
   const accounts = await ethers.getSigners();
 
   for (const account of accounts) {
     console.log(account.address);
   }
 }); 
 
 module.exports = {
   solidity: {
     version: "0.8.17",
   }, 
   defaultNetwork: "goerli",
   networks: {
   goerli: {
     url: '//Alchemy or Quicknode API HTTPS Key//', // Alchemy > Apps > View >  Https 
     // Alchemy가 안되면 https://www.quicknode.com/ 가입해주세요 
     chainId: 5, 
     accounts: ['//Your Metamask Goerli Key //'] // metamask Goerli Private Key
   },
 },
 etherscan:{
  apiKey: "//Your Etherscan API Key" // etherscan API 키 
}
};
// npm i hardhat을 먼저 설치 npm i hardhat -> compile 정상적으로 됨 