# 2022 Autumn EWHA-CHAIN Blockchain Bootcamp - Ethereum NFT Minting DApp

## What is this?

이화여자대학교 블록체인학회 이화체인 2022 가을 부트캠프 이더리움 스마트 컨트렉트 실습을 위한 코드입니다.
해당 코드를 다운받은 후 각각의 디렉토리의 README.md를 따라가며 스마트 컨트렉트와 DApp 실습이 가능합니다.

### Goal

- Hardhat을 사용하여 Solidity 스마트 컨트렉트를 이더리움 테스트넷 Goerli에 배포 및 검증해봅시다.
- React 프레임워크와 web3.js 라이브러리를 사용하여 배포된 스마트 컨트렉트 주소와 json 형식의 abi 파일을 사용하여 NFT Minting DApp을 만들어 봅시다.

## Guide
Main branch는 실습을 위한 튜토리얼을 따라할 수 있는 템플릿이며, test branch는 일부 비공개 정보 (프라이빗 키 등)를 제외한 완성 코드들이 존재합니다.

### 1. ERC20

Remix, Ganache 사용 로컬 네트워크 테스트 및 배포

### 2. ERC721

Hardhat 사용 테스트넷 Deploy, Verify

### 3. NFTFrontend

React, web3.js 기반 프론트엔드를 구축하고 NFT 스마트 컨트렉트 주소와 json 형식의 abi를 활용하여 컨트렉트의 정보를 가져오고 (Read) Minting tx을 만들어봅시다 (Write)
