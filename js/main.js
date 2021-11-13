hideElement = (element) => element.style.display = "none";
showElement = (element) => element.style.display = "block";



const connectBTN = document.getElementById("loginButton");
const discconnectBTN = document.getElementById("logoutButton");
const loggedinAdd = document.getElementById("loggedinwith");
const divTracker = document.getElementById("divTracker");
const divTrack = document.getElementById("divTrack");
const claimRewardsBtn = document.getElementById("claimRewardsBtn");
const yourRewNft = document.getElementById("yourRewNft");
const yournft = document.getElementById("yournft");

//main mint contract
const CONTRACT_ABI = [{
    "inputs": [{
        "internalType": "uint256",
        "name": "_maxSupply",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_reservedMaxSupply",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_price",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_maxMintRequest",
        "type": "uint256"
    }, {
        "internalType": "string",
        "name": "_baseTokenURI",
        "type": "string"
    }, {
        "internalType": "string",
        "name": "_baseExtension",
        "type": "string"
    }, {
        "internalType": "address[]",
        "name": "_funds",
        "type": "address[]"
    }, {
        "internalType": "uint256",
        "name": "_withdrawValueTopHolder",
        "type": "uint256"
    }],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }],
    "name": "Approval",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
    }],
    "name": "ApprovalForAll",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
    }],
    "name": "Mint",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }],
    "name": "Transfer",
    "type": "event"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "availableFunds",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "baseExtension",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "baseTokenURI",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "bjoes",
    "outputs": [{
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "birth",
        "type": "uint256"
    }, {
        "internalType": "address",
        "name": "minter",
        "type": "address"
    }, {
        "internalType": "string",
        "name": "uri",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "claimRewards",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "fees",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "funds",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }],
    "name": "getApproved",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
    }],
    "name": "getBjoes",
    "outputs": [{
        "components": [{
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "birth",
            "type": "uint256"
        }, {
            "internalType": "address",
            "name": "minter",
            "type": "address"
        }, {
            "internalType": "string",
            "name": "uri",
            "type": "string"
        }],
        "internalType": "struct BjoeMint.Bjoes",
        "name": "",
        "type": "tuple"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
    }],
    "name": "getReflectionBalance",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "operator",
        "type": "address"
    }],
    "name": "isApprovedForAll",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "lastDividendAt",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "maxMintRequest",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "maxSupply",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
    }],
    "name": "mint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "name",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }],
    "name": "ownerOf",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "price",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "reflectionBalance",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "reservedMaxSupply",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "reservedSupply",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }, {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
    }],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "operator",
        "type": "address"
    }, {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
    }],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "string",
        "name": "_baseURI",
        "type": "string"
    }],
    "name": "setBaseTokenURI",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
    }],
    "name": "supportsInterface",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "symbol",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
    }],
    "name": "tokenByIndex",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
    }],
    "name": "tokenOfOwnerByIndex",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }],
    "name": "tokenURI",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "topHolder",
    "outputs": [{
        "internalType": "address",
        "name": "holder",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "withdrawAmount",
        "type": "uint256"
    }, {
        "internalType": "bool",
        "name": "equalBalance",
        "type": "bool"
    }, {
        "internalType": "bool",
        "name": "paidOut",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalDividend",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "withdrawFunds",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "withdrawTopHolder",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "stateMutability": "payable",
    "type": "receive"
}];
const CONTRACT_ADDRES = "0x666B92C08BfA82f245aC16F78A45D1C403F9506F";

//rewards contract
const CONTRACT_ADDRES2 = "0xe703214808C3603a9dA2609d52bDcF920E0a0edf";
const CONTRACT_ABI2 = [{
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
}, {
    "type": "event",
    "name": "Approval",
    "inputs": [{
        "type": "address",
        "name": "owner",
        "internalType": "address",
        "indexed": true
    }, {
        "type": "address",
        "name": "spender",
        "internalType": "address",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "value",
        "internalType": "uint256",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "ExcludeFromFees",
    "inputs": [{
        "type": "address",
        "name": "account",
        "internalType": "address",
        "indexed": true
    }, {
        "type": "bool",
        "name": "isExcluded",
        "internalType": "bool",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "ExcludeMultipleAccountsFromFees",
    "inputs": [{
        "type": "address[]",
        "name": "accounts",
        "internalType": "address[]",
        "indexed": false
    }, {
        "type": "bool",
        "name": "isExcluded",
        "internalType": "bool",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "GasForProcessingUpdated",
    "inputs": [{
        "type": "uint256",
        "name": "newValue",
        "internalType": "uint256",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "oldValue",
        "internalType": "uint256",
        "indexed": true
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "LiquidityWalletUpdated",
    "inputs": [{
        "type": "address",
        "name": "newLiquidityWallet",
        "internalType": "address",
        "indexed": true
    }, {
        "type": "address",
        "name": "oldLiquidityWallet",
        "internalType": "address",
        "indexed": true
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [{
        "type": "address",
        "name": "previousOwner",
        "internalType": "address",
        "indexed": true
    }, {
        "type": "address",
        "name": "newOwner",
        "internalType": "address",
        "indexed": true
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "ProcessedDividendTracker",
    "inputs": [{
        "type": "uint256",
        "name": "iterations",
        "internalType": "uint256",
        "indexed": false
    }, {
        "type": "uint256",
        "name": "claims",
        "internalType": "uint256",
        "indexed": false
    }, {
        "type": "uint256",
        "name": "lastProcessedIndex",
        "internalType": "uint256",
        "indexed": false
    }, {
        "type": "bool",
        "name": "automatic",
        "internalType": "bool",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "gas",
        "internalType": "uint256",
        "indexed": false
    }, {
        "type": "address",
        "name": "processor",
        "internalType": "address",
        "indexed": true
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "SendDividends",
    "inputs": [{
        "type": "uint256",
        "name": "tokensSwapped",
        "internalType": "uint256",
        "indexed": false
    }, {
        "type": "uint256",
        "name": "amount",
        "internalType": "uint256",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "SetAutomatedMarketMakerPair",
    "inputs": [{
        "type": "address",
        "name": "pair",
        "internalType": "address",
        "indexed": true
    }, {
        "type": "bool",
        "name": "value",
        "internalType": "bool",
        "indexed": true
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "SwapAndLiquify",
    "inputs": [{
        "type": "uint256",
        "name": "tokensSwapped",
        "internalType": "uint256",
        "indexed": false
    }, {
        "type": "uint256",
        "name": "ethReceived",
        "internalType": "uint256",
        "indexed": false
    }, {
        "type": "uint256",
        "name": "tokensIntoLiqudity",
        "internalType": "uint256",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "Transfer",
    "inputs": [{
        "type": "address",
        "name": "from",
        "internalType": "address",
        "indexed": true
    }, {
        "type": "address",
        "name": "to",
        "internalType": "address",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "value",
        "internalType": "uint256",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "UpdateDividendTracker",
    "inputs": [{
        "type": "address",
        "name": "newAddress",
        "internalType": "address",
        "indexed": true
    }, {
        "type": "address",
        "name": "oldAddress",
        "internalType": "address",
        "indexed": true
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "UpdateUniswapV2Router",
    "inputs": [{
        "type": "address",
        "name": "newAddress",
        "internalType": "address",
        "indexed": true
    }, {
        "type": "address",
        "name": "oldAddress",
        "internalType": "address",
        "indexed": true
    }],
    "anonymous": false
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "_isBlacklisted",
    "inputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }],
    "name": "_marketingWalletAddress",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "allowance",
    "inputs": [{
        "type": "address",
        "name": "owner",
        "internalType": "address"
    }, {
        "type": "address",
        "name": "spender",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "approve",
    "inputs": [{
        "type": "address",
        "name": "spender",
        "internalType": "address"
    }, {
        "type": "uint256",
        "name": "amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "automatedMarketMakerPairs",
    "inputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "balanceOf",
    "inputs": [{
        "type": "address",
        "name": "account",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "blacklistAddress",
    "inputs": [{
        "type": "address",
        "name": "account",
        "internalType": "address"
    }, {
        "type": "bool",
        "name": "value",
        "internalType": "bool"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "claim",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint8",
        "name": "",
        "internalType": "uint8"
    }],
    "name": "decimals",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "decreaseAllowance",
    "inputs": [{
        "type": "address",
        "name": "spender",
        "internalType": "address"
    }, {
        "type": "uint256",
        "name": "subtractedValue",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "dividendTokenBalanceOf",
    "inputs": [{
        "type": "address",
        "name": "account",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "address",
        "name": "",
        "internalType": "contract BABYTOKENDividendTracker"
    }],
    "name": "dividendTracker",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "excludeFromDividends",
    "inputs": [{
        "type": "address",
        "name": "account",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "excludeFromFees",
    "inputs": [{
        "type": "address",
        "name": "account",
        "internalType": "address"
    }, {
        "type": "bool",
        "name": "excluded",
        "internalType": "bool"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "excludeMultipleAccountsFromFees",
    "inputs": [{
        "type": "address[]",
        "name": "accounts",
        "internalType": "address[]"
    }, {
        "type": "bool",
        "name": "excluded",
        "internalType": "bool"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "gasForProcessing",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }, {
        "type": "int256",
        "name": "",
        "internalType": "int256"
    }, {
        "type": "int256",
        "name": "",
        "internalType": "int256"
    }, {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "getAccountDividendsInfo",
    "inputs": [{
        "type": "address",
        "name": "account",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }, {
        "type": "int256",
        "name": "",
        "internalType": "int256"
    }, {
        "type": "int256",
        "name": "",
        "internalType": "int256"
    }, {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "getAccountDividendsInfoAtIndex",
    "inputs": [{
        "type": "uint256",
        "name": "index",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "getClaimWait",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "getLastProcessedIndex",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "getNumberOfDividendTokenHolders",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "getTotalDividendsDistributed",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }],
    "name": "implementation",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "increaseAllowance",
    "inputs": [{
        "type": "address",
        "name": "spender",
        "internalType": "address"
    }, {
        "type": "uint256",
        "name": "addedValue",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "initialize",
    "inputs": [{
        "type": "address[4]",
        "name": "addrs",
        "internalType": "address[4]"
    }, {
        "type": "string",
        "name": "name_",
        "internalType": "string"
    }, {
        "type": "string",
        "name": "symbol_",
        "internalType": "string"
    }, {
        "type": "uint256",
        "name": "totalSupply_",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "tokenRewardsFee_",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "liquidityFee_",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "marketingFee_",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "minimumTokenBalanceForDividends_",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "isExcludedFromFees",
    "inputs": [{
        "type": "address",
        "name": "account",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "liquidityFee",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "marketingFee",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "string",
        "name": "",
        "internalType": "string"
    }],
    "name": "name",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }],
    "name": "owner",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "processDividendTracker",
    "inputs": [{
        "type": "uint256",
        "name": "gas",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "renounceOwnership",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }],
    "name": "rewardToken",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setAutomatedMarketMakerPair",
    "inputs": [{
        "type": "address",
        "name": "pair",
        "internalType": "address"
    }, {
        "type": "bool",
        "name": "value",
        "internalType": "bool"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setLiquiditFee",
    "inputs": [{
        "type": "uint256",
        "name": "value",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setMarketingFee",
    "inputs": [{
        "type": "uint256",
        "name": "value",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setMarketingWallet",
    "inputs": [{
        "type": "address",
        "name": "wallet",
        "internalType": "address payable"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setSwapTokensAtAmount",
    "inputs": [{
        "type": "uint256",
        "name": "amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setTokenRewardsFee",
    "inputs": [{
        "type": "uint256",
        "name": "value",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "swapTokensAtAmount",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "string",
        "name": "",
        "internalType": "string"
    }],
    "name": "symbol",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "tokenRewardsFee",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "totalFees",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "totalSupply",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "transfer",
    "inputs": [{
        "type": "address",
        "name": "recipient",
        "internalType": "address"
    }, {
        "type": "uint256",
        "name": "amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "transferFrom",
    "inputs": [{
        "type": "address",
        "name": "sender",
        "internalType": "address"
    }, {
        "type": "address",
        "name": "recipient",
        "internalType": "address"
    }, {
        "type": "uint256",
        "name": "amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "transferOwnership",
    "inputs": [{
        "type": "address",
        "name": "newOwner",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }],
    "name": "uniswapV2Pair",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "address",
        "name": "",
        "internalType": "contract IUniswapV2Router02"
    }],
    "name": "uniswapV2Router",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "updateClaimWait",
    "inputs": [{
        "type": "uint256",
        "name": "claimWait",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "updateDividendTracker",
    "inputs": [{
        "type": "address",
        "name": "newAddress",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "updateGasForProcessing",
    "inputs": [{
        "type": "uint256",
        "name": "newValue",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "updateUniswapV2Router",
    "inputs": [{
        "type": "address",
        "name": "newAddress",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "withdrawableDividendOf",
    "inputs": [{
        "type": "address",
        "name": "account",
        "internalType": "address"
    }]
}, {
    "type": "receive",
    "stateMutability": "payable"
}];


window.web3 = new Web3(window.ethereum);
var myContract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRES, {
    from: window.userWalletAddress // default from address
    // gasPrice: '30000000000' // default gas price in wei, 20 gwei in this case
});

var myContract2 = new web3.eth.Contract(CONTRACT_ABI2, CONTRACT_ADDRES2, {
    from: window.userWalletAddress, // default from address
    // gasPrice: '30000000000' // default gas price in wei, 20 gwei in this case
});

init = () => {
    showElement(connectBTN);
    hideElement(discconnectBTN);
    hideElement(loggedinAdd);
    window.userWalletAddress = null;
    toggleButton();
    loginWithMetaMask();

};

//initialize web3loginWithMetaMask
function toggleButton() {
    if (!window.ethereum) {
        loginButton.innerText = 'MetaMask is not installed'
        loginButton.classList.remove('bg-purple-500', 'text-white')
        loginButton.classList.add('bg-gray-500', 'text-gray-100', 'cursor-not-allowed')
        return false
    }
    // loginButton.addEventListener('click', loginWithMetaMask)
}

async function loginWithMetaMask() {


    const currentNetworkId = await getNetworkID();

    if (currentNetworkId !== 0xA869) {
        alert("Please Switch to Avalanche Fuji Testnet or add do it manually from your wallet menu");


        window.ethereum.on("chainChanged", function (networkId) {
            const newNetwork = parseInt(networkId);
            if (newNetwork === 0xA869) {
                loginWithMetaMask();
            }
        });

        const AVALANCHE_FUJI = {
            chainId: "0xA869",
            chainName: "Avalanche Fuji Testnet",
            nativeCurrency: {
                name: "Avalanche",
                symbol: "AVAX",
                decimals: 18
            },
            rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
            blockExplorerUrls: ["https://cchain.explorer.avax-test.network/"]
        };
        ethereum.request({
            method: "wallet_addEthereumChain",
            params: [AVALANCHE_FUJI],
        });
        window.location.reload();
    } if (window.ethereum) {
        window.accounts = await window.ethereum
            .request({ method: "eth_requestAccounts" })
            .catch((e) => {

                console.error(e.message);
                return;
            });
        if (!accounts) {



            return;
        }

        window.userWalletAddress = accounts[0];

        // loginButton.removeEventListener("click", loginWithMetaMask);

        getRewards();
        getTopHold();
        getTotalRefs();

        loggedinAdd.innerText = userWalletAddress;
        hideElement(connectBTN);
        showElement(discconnectBTN);
        showElement(loggedinAdd);
        showElement(yourRewNft);
        showElement(divTracker);
        showElement(Tracker);
        showElement(claimRewardsBtn);
        showElement(divTrack);


    } else {


        alert("need to install metamask...");
    }


    // logoutButton.addEventListener("click", logoutMM);
    //   
}

async function logoutMM() {

    // logoutButton.removeEventListener("click", logoutMM);
    window.userWalletAddress = null;
    showElement(connectBTN);
    hideElement(discconnectBTN);
    loggedinAdd.innerText = "";
    hideElement(loggedinAdd);
    hideElement(yourRewNft);
    hideElement(divTracker);
    hideElement(Tracker);
    // hideElement(claimRewardsBtn);
    // hideElement(divTrack);
    // loginButton.addEventListener("click", loginWithMetaMask);
}

function checks() {
    if (chainId == 0xA869) {
        callback();
        chainId = 0;
    } else {
        localStorage.clear();
        chainId = 0;
        getNetworkID();
    }
}

function both(callback) {
    getNetworkID().then(checks());
    callback();
}

async function mintNFTexecution() {
    var mintAMT = document.getElementById("dropdownMintAmt");
    var mintSoMuch = mintAMT.options[mintAMT.selectedIndex].value;
    var payforMInt = mintSoMuch * 2 * 1000000000000000000;





    if (
        userWalletAddress == null ||
        userWalletAddress == undefined ||
        userWalletAddress == ""
    ) {
        // alert("Please connect to MetaMask.");
    } else {
        chainId = "";
        myContract.methods
            .mint(mintSoMuch)
            .send({ from: userWalletAddress, value: payforMInt });
    }
    chainId = "";
}

async function mintNFT() {

    const currentNetworkId = await getNetworkID();

    if (
        userWalletAddress == null ||
        userWalletAddress == undefined ||
        userWalletAddress == ""
    ) {
        alert("Please connect to MetaMask.");
    } if (currentNetworkId !== 0xA869) {
        alert("Please Switch to Avalanche Fuji Testnet");


        window.ethereum.on("chainChanged", function (networkId) {
            const newNetwork = parseInt(networkId);
            if (newNetwork === 0xA869) {
                mintNFTexecution();
            }
        });

        ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: Web3.utils.toHex(0xA869) }],
        });
    } else {
        mintNFTexecution();
    }
}

async function getNetworkID() {
    const fetchedNetworkId = await web3.eth.getChainId();
    window.id = fetchedNetworkId;

    return fetchedNetworkId;
}

//find user claimable rewards joe
async function getRewards() {


    const currentNetworkId = await getNetworkID();
    if (currentNetworkId !== 0xA869) {
        //   alert("STOP - Please connect to Avalanche Fuji Testnet");


        window.ethereum.on("chainChanged", function (networkId) {
            const newNetwork = parseInt(networkId);
            if (newNetwork === 0xA869) {
                getRewardsEx();
            }
        });

        ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: Web3.utils.toHex(0xA869) }],
        });

    } else {
        getRewardsEx();
    }


}

window.userRewards = '';
async function getRewardsEx() {
const xx = await myContract2.methods.getAccountDividendsInfo(userWalletAddress).call({ from: userWalletAddress });
const xxInEth = (xx[4]) / (1000000000000000000);
divTracker.innerText = "Total rewards of all times" + xxInEth + " $JOE";
}


async function getRewardsEx1() {
const xx1 = await myContract2.methods.getAccountDividendsInfoAtIndex(userWalletAddress).call({ from: userWalletAddress });
const xxInEth1 = (xx1[4]) / (1000000000000000000);
Tracker.innerText = "Now claim rewards " + xxInEth1 + " $JOE";
}


async function claimRewardsEx() {

    if (
        userWalletAddress == null ||
        userWalletAddress == undefined ||
        userWalletAddress == ""
    ) {
        alert("Please connect to MetaMask");
    } else {
        const claimIT = await myContract2.methods.claim().send({ from: userWalletAddress });

    }
}

async function calculateDivs() {
    const arrayOfIDs = document.getElementById("num1").value.split(',');
    const minted = Number(document.getElementById("num2").value);
    const lottery = document.getElementById("lottery1").value == 2 ? 1 : 0;

    const topholder = document.getElementById("topholder1").value == 2 ? 1 : 0;


    const nftCost = 2;
    let totalDivs = 0;
    arrayOfIDs.forEach((ID) => {
        let totalMinted = minted - ID;
        let holders = ID;
        for (let x = totalMinted; x > 0; x--) {
            totalDivs += ((nftCost * 0.2)) / holders;
            holders++;
        }
    });
    lottery ? totalDivs += 100 : totalDivs += 0
    topholder ? totalDivs += 200 : totalDivs += 0

    res.innerText = totalDivs + " AVAX";
}

//Top holder
async function getTopHold() {


    const currentNetworkId = await getNetworkID();
    if (currentNetworkId !== 0xA869) {
        //   alert("STOP - Please connect to Avalanche Network");


        window.ethereum.on("chainChanged", function (networkId) {
            const newNetwork = parseInt(networkId);
            if (newNetwork === 0xA869) {
                getTopHoldbalance();
                getTopHoldadress();
            }
        });

        ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: Web3.utils.toHex(0xA86A) }],
        });

    } else {
        getTopHoldbalance();
        getTopHoldadress();
    }


}

window.userRewards = '';
async function getTopHoldbalance() {
const top = await myContract.methods.topHolder().call({ from: userWalletAddress });
const xxInEth2 = (top[1]);
TopHold.innerText = "Top Holder $BJOE NFT: " + xxInEth2;
}

async function getTopHoldadress() {
const topadress = await myContract.methods.topHolder().call({ from: userWalletAddress });
const xxInEth3 = (topadress[0]);
adresstop.innerText = "Adress Top Holder: " + xxInEth3;

}

async function claimRewTopHold() {
const claimRew = await myContract.methods.withdrawTopHolder().send({ from: userWalletAddress });

}


//calc
async function claimRewNFT() {
 const claimRew = await myContract.methods.claimRewards().send({ from: userWalletAddress });
}


// inventory


async function getBalanceID() {
    const balid = await myContract.methods.balanceOf(userWalletAddress).call({ from: userWalletAddress });
    return balid
}

async function tokenOfOwnerByInd(id) {
    const tokenind = await myContract.methods.tokenOfOwnerByIndex(userWalletAddress, id).call({ from: userWalletAddress });
    return tokenind
};

async function getReflectionBal(id) {
    const refbal = await myContract.methods.getReflectionBalance(id).call({ from: userWalletAddress });
    return refbal
}

async function getTotalRefs() {
    const NFTCount = await getBalanceID();
    let NFTIDS = []
    for (let i = 0; i < NFTCount; i++) {
        let a = await tokenOfOwnerByInd(i)
        NFTIDS.push(+a)
    };

    const arrayOfRefs = await Promise.all(NFTIDS.map(async a => await getReflectionBal(a)))
    const totalReflections = arrayOfRefs.reduce((prev, cur) => +prev + +cur) / 1000000000000000000
    getvalueNFT();
    yourRewNft.innerText = totalReflections;

    // return totalReflections

}


async function getvalueNFT() {

    const balanceid = await myContract.methods.balanceOf(userWalletAddress).call({ from: userWalletAddress });
    yournft.innerText = balanceid;

}

async function getInventory() {
    const NFTCount = await getBalanceID();
    let NFTIDS = []
    for (let i = 0; i < NFTCount; i++) {
        let a = await tokenOfOwnerByInd(i)
        NFTIDS.push(+a)
    }

    const arrayOfURL = await Promise.all(NFTIDS.map(async a => await myContract.methods.tokenURI(a).call({ from: userWalletAddress })));
    const jsonURLS = arrayOfURL.map(a => 'https://gateway.pinata.cloud/ipfs/' + a.slice(7))
    const nftObj = await Promise.all(jsonURLS.map(a => fetch(a).then(res => res.json())))
    const imageURLS = nftObj.map(a => a.image)
    console.log(imageURLS);
    // returns an array of image urls

}











init();