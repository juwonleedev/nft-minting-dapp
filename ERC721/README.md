# 두 번째 실습 - ERC721 컨트렉트

## Goal 
Hardhat 사용 테스트넷 Deploy, Verify 

## What we use 
Hardhat

## Tutorial 
1. cd ERC721을 통해 ERC721 디렉토리로 이동 
2. 터미널을 열고 npm을 실행해 설치 여부 확인 
3. ERC721 디렉토리에 npm i --save hardhat 
4. 터미널 ERC721 디렉토리에 npx hardhat → √ What do you want to do? · Create an empty hardhat.config.js
5. 터미널 ERC721 디렉토리에 mkdir scripts
6. 터미널 ERC721 디렉토리에 mkdir test 
7. 터미널 ERC721 디렉토리에 npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-etherscan
7. hardhat.config.js 내용 지우고 https://github.com/juwonleedev/ethereumNFT-Minting-DApp 의 test branch의 hardhat.config.js 파일 복사해서 붙여넣기 
8. 터미널 ERC721 디렉토리에 npx hardhat compile 
- Error HH12: Trying to use a non-local installation of Hardhat, which is not supported.
Please install Hardhat locally using npm or Yarn, and try again. -> npm install hardhat으로 해결 
9. scripts 디렉토리에 deploy.js 생성 ( https://github.com/juwonleedev/ethereumNFT-Minting-DApp 의 test branch의 deploy.js 파일 복사해서 붙여넣기)
10. hardhat deploy : 터미널 ERC721 디렉토리에 npx hardhat run --network goerli scripts/deploy.js
- 성공한다면 Address가 Contract address
: 0xFB58136421ce2af9c5255d98ddc349E885277fA0 이렇게 출력되고 이 주소를 기록
11. hardhat verify: 터미널 ERC721 디렉토리에 npx hardhat verify 컨트렉트주소 “myNFT” “NFT”
: 링크가 뜨면 etherscan 테스트넷 explorer로 이동가능