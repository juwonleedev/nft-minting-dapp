// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

abstract contract IERC20 {

    /*

    IERC20 Metadata 

    */
    function name() external view virtual returns (string memory);

    function symbol() external view virtual returns (string memory);

    function decimals() external view virtual returns (uint8);

    function totalSupply() external view virtual returns (uint256);

    function balanceOf(address account) external virtual view returns (uint256);

    function transfer(address to, uint256 amount) external virtual returns (bool);

    function allowance(address owner, address spender) external virtual view returns (uint256);

    function approve(address spender, uint256 amount) external virtual returns (bool);

    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external virtual returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);

    event Approval(address indexed owner, address indexed spender, uint256 value);
}