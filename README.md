# 2022 Autumn EWHA-CHAIN Blockchain Bootcamp - Ethereum NFT Minting DApp

## What is this?

이화여자대학교 블록체인학회 이화체인 2022 가을 부트캠프 이더리움 스마트 컨트렉트 실습을 위한 코드입니다.
해당 코드를 다운받은 후 각각의 디렉토리의 README.md를 따라가며 스마트 컨트렉트와 DApp 실습이 가능합니다.

### Goal

- Hardhat을 사용하여 Solidity 스마트 컨트렉트를 이더리움 테스트넷 Goerli에 배포 및 검증해봅시다.
- React 프레임워크와 web3.js 라이브러리를 사용하여 배포된 스마트 컨트렉트 주소와 json 형식의 abi 파일을 사용하여 NFT Minting DApp을 만들어 봅시다.

## Guide

### 1. ERC20

Remix, Ganache 사용 로컬 네트워크 테스트 및 배포

### 2. ERC721

Hardhat 사용 테스트넷 Deploy, Verify

### 3. NFTFrontend

React, web3.js 기반 프론트엔드를 구축하고 NFT 스마트 컨트렉트 주소와 json 형식의 abi를 활용하여 컨트렉트의 정보를 가져오고 (Read) Minting tx을 만들어봅시다 (Write)

# 세 번째 실습 - NFT Minting DApp

## Goal

React, web3.js 기반 프론트엔드를 구축하고 NFT 스마트 컨트렉트 주소와 json 형식의 abi를 활용하여 컨트렉트의 정보를 가져오고 (Read) Minting tx을 만들어봅시다 (Write)

## What we use

React, web3.js

## Tutorial

1. cd nftfrontend 통해 nftfrontend 디렉토리로 이동
2. 터미널을 열고 NFTFrontend 디렉토리에서 npm install을 실행
3. npm start를 통해 리액트 프론트엔드를 확인할 수 있는 로컬 서버 띄우기
4. App.js의 내용 없애기
5. https://github.com/juwonleedev/ethereumNFT-Minting-DApp 의 test branch의 NFT.json를 src에 복사해서 붙여넣기
6. https://github.com/juwonleedev/ethereumNFT-Minting-DApp 의 test branch의 App.js를 복사해서 붙여넣고, 해당 파일의 주석을 통해 기능 확인
