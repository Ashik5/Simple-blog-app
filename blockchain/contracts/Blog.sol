// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract BlogModel {
    struct Blog {
        string blogId;
        string authorName;
        bool isApproved;
        bool isDeleted;
    }

    mapping(string => Blog) public blogs; 
    uint public nextBlogId; 

    address public admin;

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "You are not the admin");
        _;
    }


    function approveBlog(string memory _blogId) public onlyAdmin {
        
        blogs[_blogId].isApproved = true;
    }

    function deleteBlog(string memory _blogId) public onlyAdmin {
        
        blogs[_blogId].isDeleted = true;
    }

    
}
