//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCount;

    event Transfer(
        address from,
        address reciever,
        uint256 amount,
        uint256 timestamp,
        string img_link
    );

    struct TransferStruct {
        address sender;
        address reciever;
        uint256 amount;
        uint256 timestamp;
        string img_link;
    }

    TransferStruct[] transactions;

    function addToBlockChain(address payable reciever, uint amount, string memory ,string memory img_link) public {
        transactionCount+=1;
        transactions.push(TransferStruct(msg.sender, reciever,amount,block.timestamp,img_link));    
        emit Transfer(msg.sender, reciever,amount,block.timestamp,img_link);
    }


}


    function getAllTransactions() public view returns(TransferStruct[] memory){

        return transactions;
    }

    
}


    function addToBlockChain() public view returns(uint256){

return transactionCount;
    }

    
}