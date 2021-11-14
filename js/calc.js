hideElement = (element) => element.style.display = "none";
showElement = (element) => element.style.display = "block";

const connectBTN = document.getElementById("loginButton");
const discconnectBTN = document.getElementById("logoutButton");
const loggedinAdd = document.getElementById("loggedinwith");


//Mint Contract
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

window.web3 = new Web3(window.ethereum);
var myContract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRES, {
    from: window.userWalletAddress // default from address
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

  //////////////////////////////////////
 ///initialize web3loginWithMetaMask///
//////////////////////////////////////
function toggleButton() {
    if (!window.ethereum) {
        loginButton.innerText = 'MetaMask is not installed'
        loginButton.classList.remove('bg-purple-500', 'text-white')
        loginButton.classList.add('bg-gray-500', 'text-gray-100', 'cursor-not-allowed')
        return false
    }
}

async function loginWithMetaMask() {
    console.log("Login");
    const currentNetworkId = await getNetworkID();
    console.log(currentNetworkId);

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
        console.log(window.userWalletAddress);
        getTotalRefs();
        loggedinAdd.innerText = userWalletAddress;
        hideElement(connectBTN);
        showElement(discconnectBTN);
        showElement(loggedinAdd);
        showElement(yourRewNft);
    } else {
        alert("need to install metamask...");
    } 
}

async function logoutMM() {
    console.log("Logout");
    window.userWalletAddress = null;
    showElement(connectBTN);
    hideElement(discconnectBTN);
    loggedinAdd.innerText = "";
    hideElement(loggedinAdd);
    hideElement(yourRewNft);
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

async function getNetworkID() {
    const fetchedNetworkId = await web3.eth.getChainId();
    window.id = fetchedNetworkId;

    return fetchedNetworkId;
}

  //////////
 ///CALC///
//////////
async function calculateDivs() {
    console.log("Calculation");
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

    console.log(totalDivs + " AVAX");

    res.innerText = totalDivs + " AVAX";
}

  ////////////////////
 ///REFLECTION NFT///
////////////////////
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
    yourRewNft.innerText = totalReflections;

    return totalReflections
}

async function claimRewNFT() {
    if (
        userWalletAddress == null ||
        userWalletAddress == undefined ||
        userWalletAddress == ""
    ) {
        alert("Please connect to MetaMask");
    } else {
    console.log("Claim Reward NFT");
    const claimRew = await myContract.methods.claimRewards().send({ from: userWalletAddress });
    }
}
   
init();