hideElement = (element) => element.style.display = "none";
showElement = (element) => element.style.display = "block";

const connectBTN = document.getElementById("loginButton");
const discconnectBTN = document.getElementById("logoutButton");
const loggedinAdd = document.getElementById("loggedinwith");

//$BJOE contract
const CONTRACT_ABI = [{
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
const CONTRACT_ADDRES = "0xe703214808C3603a9dA2609d52bDcF920E0a0edf";

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

    if (currentNetworkId !== 0xA86A) {
        alert("Please Switch to Avalanche Network or add do it manually from your wallet menu");
        window.ethereum.on("chainChanged", function (networkId) {
            const newNetwork = parseInt(networkId);
            if (newNetwork === 0xA86A) {
                loginWithMetaMask();
            }
        });

        const AVALANCHE_NETWORK = {
            chainId: "0xA86A",
            chainName: "Avalanche Network",
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
            params: [AVALANCHE_NETWORK],
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
        console.log(userWalletAddress);

        loggedinAdd.innerText = userWalletAddress;
        hideElement(connectBTN);
        showElement(discconnectBTN);
        showElement(loggedinAdd);
        showElement(totalTrack);
        showElement(nowTrack);
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
    hideElement(totalTrack);
    hideElement(nowTrack);
}

function checks() {
    if (chainId == 0xA86A) {
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

  //////////////////////////////////////
 ///Claim current reward $BJOE Token///
//////////////////////////////////////

window.userRewards = '';
async function getRewardsEx() {
    const totalRew = await myContract.methods.getAccountDividendsInfo(userWalletAddress).call({ from: userWalletAddress });
    const getTotalRew = (totalRew[4]) / (1000000000000000000);
    getRewardsEx1();
    totalTrack.innerText = "Total rewards of all times" + getTotalRew + " $JOE";
}

async function getRewardsEx1() {
    const nowRew = await myContract.methods.getAccountDividendsInfo(userWalletAddress).call({ from: userWalletAddress });
    const getNowRew = (nowRew[3]) / (1000000000000000000);
    nowTrack.innerText = "Now claim rewards " + getNowRew + " $JOE";
}

async function claimRewardsEx() {
    console.log("Claim rewards $BJOE");
    if (
        userWalletAddress == null ||
        userWalletAddress == undefined ||
        userWalletAddress == ""
    ) {
        alert("Please connect to MetaMask");
    } else {
        const claimIT = await myContract.methods.claim().send({ from: userWalletAddress });
    }
}

init();