# 세 번째 실습 - NFT Minting DApp

## Goal

React, ethers.js 기반 프론트엔드를 구축하고 NFT 스마트 컨트렉트 주소와 json 형식의 abi를 활용하여 컨트렉트의 정보를 가져오고 (Read) Minting tx을 만들어봅시다 (Write)

## What we use

React, ethers.js, 이 repository를 통해 배포된 ERC721 스마트 컨트렉트의 abi와 배포된 컨트렉트 주소

## Tutorial

1. cd NFTFrontend 통해 NFTFrontend 디렉토리로 이동
2. 터미널을 열고 NFTFrontend 디렉토리에서 npm install을 실행
3. 터미널을 열고 NFTFrontend 디렉토리에서 npm install --save ethers
- https://docs.ethers.io/v5/getting-started/#installing  
4. npm start를 통해 리액트 프론트엔드를 확인할 수 있는 로컬 서버 띄우기
5. App.js의 내용 없애기
6. https://github.com/juwonleedev/ethereumNFT-Minting-DApp 의 test branch의 abi.json를 src에 복사해서 붙여넣기
7. https://github.com/juwonleedev/ethereumNFT-Minting-DApp 의 test branch의 App.js를 복사해서 붙여넣기
8. Minting.js를 src 폴더 내에 생성 후 https://github.com/juwonleedev/ethereumNFT-Minting-DApp 의 test branch의 Minting.js 내용을 복사해서 붙여넣기
9. Minting.js에서 contractAddress 등 주소값을 넣어야 하는 부분은 자신의 보유 계정 혹은 자신이 배포한 스마트 컨트렉트 등을 넣으셔서 실습하시길 바랍니다.
10. 메타마스크 연결부터 query, execute를 순차적으로 실습할 수 있는 버튼들에 대한 로직을 주석을 참고해 순차적으로 학습하고 눌러서 실행해보시길 바랍니다. 
** 단순한 버튼만 만들어 화면상에서는 어떠한 것도 확인할 수 없기 때문에, chrome browser의 f12 > console에서 각 버튼들을 누르며 실행 결과를 확인하십시오 