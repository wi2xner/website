
hideElement = (element) => element.style.display = "none";
showElement = (element) => element.style.display = "block";

const connectBTN = document.getElementById("loginButton");
const discconnectBTN = document.getElementById("logoutButton");
const loggedinAdd = document.getElementById("loggedinwith");
const divTracker = document.getElementById("divTracker");
const divTrack = document.getElementById("divTrack");
const claimRewardsBtn = document.getElementById("claimRewardsBtn");

//main mint contract
const CONTRACT_ABI = [
	{
	  type: "constructor",
	  stateMutability: "nonpayable",
	  inputs: [
		{ type: "uint256", name: "_maxSupply", internalType: "uint256" },
		{
		  type: "uint256",
		  name: "_reservedMaxSupply",
		  internalType: "uint256",
		},
		{
		  type: "uint256",
		  name: "_presaleMaxSupply",
		  internalType: "uint256",
		},
		{ type: "uint256", name: "_price", internalType: "uint256" },
		{
		  type: "uint256",
		  name: "_maxMintRequest",
		  internalType: "uint256",
		},
		{ type: "string", name: "_baseTokenURI", internalType: "string" },
		{ type: "string", name: "_baseExtension", internalType: "string" },
		{
		  type: "address",
		  name: "_presalePartnersAddress",
		  internalType: "address",
		},
	  ],
	},
	{
	  type: "event",
	  name: "Approval",
	  inputs: [
		{
		  type: "address",
		  name: "owner",
		  internalType: "address",
		  indexed: true,
		},
		{
		  type: "address",
		  name: "approved",
		  internalType: "address",
		  indexed: true,
		},
		{
		  type: "uint256",
		  name: "tokenId",
		  internalType: "uint256",
		  indexed: true,
		},
	  ],
	  anonymous: false,
	},
	{
	  type: "event",
	  name: "ApprovalForAll",
	  inputs: [
		{
		  type: "address",
		  name: "owner",
		  internalType: "address",
		  indexed: true,
		},
		{
		  type: "address",
		  name: "operator",
		  internalType: "address",
		  indexed: true,
		},
		{
		  type: "bool",
		  name: "approved",
		  internalType: "bool",
		  indexed: false,
		},
	  ],
	  anonymous: false,
	},
	{
	  type: "event",
	  name: "Mint",
	  inputs: [
		{
		  type: "uint256",
		  name: "tokenId",
		  internalType: "uint256",
		  indexed: false,
		},
		{
		  type: "address",
		  name: "to",
		  internalType: "address",
		  indexed: false,
		},
	  ],
	  anonymous: false,
	},
	{
	  type: "event",
	  name: "OwnershipTransferred",
	  inputs: [
		{
		  type: "address",
		  name: "previousOwner",
		  internalType: "address",
		  indexed: true,
		},
		{
		  type: "address",
		  name: "newOwner",
		  internalType: "address",
		  indexed: true,
		},
	  ],
	  anonymous: false,
	},
	{
	  type: "event",
	  name: "Transfer",
	  inputs: [
		{
		  type: "address",
		  name: "from",
		  internalType: "address",
		  indexed: true,
		},
		{
		  type: "address",
		  name: "to",
		  internalType: "address",
		  indexed: true,
		},
		{
		  type: "uint256",
		  name: "tokenId",
		  internalType: "uint256",
		  indexed: true,
		},
	  ],
	  anonymous: false,
	},
	{
	  type: "function",
	  stateMutability: "nonpayable",
	  outputs: [],
	  name: "approve",
	  inputs: [
		{ type: "address", name: "to", internalType: "address" },
		{ type: "uint256", name: "tokenId", internalType: "uint256" },
	  ],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
	  name: "availableFunds",
	  inputs: [],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
	  name: "balanceOf",
	  inputs: [{ type: "address", name: "owner", internalType: "address" }],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "string", name: "", internalType: "string" }],
	  name: "baseExtension",
	  inputs: [],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "string", name: "", internalType: "string" }],
	  name: "baseTokenURI",
	  inputs: [],
	},
	{
	  type: "function",
	  stateMutability: "nonpayable",
	  outputs: [],
	  name: "claimRewards",
	  inputs: [],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "bool", name: "", internalType: "bool" }],
	  name: "eligibleForPresale",
	  inputs: [{ type: "address", name: "_minter", internalType: "address" }],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
	  name: "fees",
	  inputs: [],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "address", name: "", internalType: "address" }],
	  name: "getApproved",
	  inputs: [{ type: "uint256", name: "tokenId", internalType: "uint256" }],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
	  name: "getReflectionBalance",
	  inputs: [{ type: "uint256", name: "_tokenId", internalType: "uint256" }],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [
		{
		  type: "tuple",
		  name: "",
		  internalType: "struct NFTMarketplace.TinyBones",
		  components: [
			{ type: "uint256", name: "id", internalType: "uint256" },
			{ type: "uint256", name: "birth", internalType: "uint256" },
			{ type: "address", name: "minter", internalType: "address" },
			{ type: "string", name: "uri", internalType: "string" },
		  ],
		},
	  ],
	  name: "getTinyBones",
	  inputs: [{ type: "uint256", name: "_tokenId", internalType: "uint256" }],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "bool", name: "", internalType: "bool" }],
	  name: "isApprovedForAll",
	  inputs: [
		{ type: "address", name: "owner", internalType: "address" },
		{ type: "address", name: "operator", internalType: "address" },
	  ],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
	  name: "lastDividendAt",
	  inputs: [{ type: "uint256", name: "", internalType: "uint256" }],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
	  name: "maxMintRequest",
	  inputs: [],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
	  name: "maxSupply",
	  inputs: [],
	},
	{
	  type: "function",
	  stateMutability: "payable",
	  outputs: [],
	  name: "mint",
	  inputs: [{ type: "uint256", name: "_amount", internalType: "uint256" }],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "string", name: "", internalType: "string" }],
	  name: "name",
	  inputs: [],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "address", name: "", internalType: "address" }],
	  name: "owner",
	  inputs: [],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "address", name: "", internalType: "address" }],
	  name: "ownerOf",
	  inputs: [{ type: "uint256", name: "tokenId", internalType: "uint256" }],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
	  name: "presaleMaxSupply",
	  inputs: [],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "address", name: "", internalType: "address" }],
	  name: "presalePartnersAddress",
	  inputs: [],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
	  name: "presaleSupply",
	  inputs: [],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
	  name: "price",
	  inputs: [],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
	  name: "reflectionBalance",
	  inputs: [],
	},
	{
	  type: "function",
	  stateMutability: "nonpayable",
	  outputs: [],
	  name: "renounceOwnership",
	  inputs: [],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
	  name: "reservedMaxSupply",
	  inputs: [],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
	  name: "reservedSupply",
	  inputs: [],
	},
	{
	  type: "function",
	  stateMutability: "nonpayable",
	  outputs: [],
	  name: "safeTransferFrom",
	  inputs: [
		{ type: "address", name: "from", internalType: "address" },
		{ type: "address", name: "to", internalType: "address" },
		{ type: "uint256", name: "tokenId", internalType: "uint256" },
	  ],
	},
	{
	  type: "function",
	  stateMutability: "nonpayable",
	  outputs: [],
	  name: "safeTransferFrom",
	  inputs: [
		{ type: "address", name: "from", internalType: "address" },
		{ type: "address", name: "to", internalType: "address" },
		{ type: "uint256", name: "tokenId", internalType: "uint256" },
		{ type: "bytes", name: "_data", internalType: "bytes" },
	  ],
	},
	{
	  type: "function",
	  stateMutability: "nonpayable",
	  outputs: [],
	  name: "setApprovalForAll",
	  inputs: [
		{ type: "address", name: "operator", internalType: "address" },
		{ type: "bool", name: "approved", internalType: "bool" },
	  ],
	},
	{
	  type: "function",
	  stateMutability: "nonpayable",
	  outputs: [],
	  name: "setBaseTokenURI",
	  inputs: [{ type: "string", name: "_baseURI", internalType: "string" }],
	},
	{
	  type: "function",
	  stateMutability: "nonpayable",
	  outputs: [],
	  name: "setPresaleOpen",
	  inputs: [{ type: "bool", name: "_status", internalType: "bool" }],
	},
	{
	  type: "function",
	  stateMutability: "nonpayable",
	  outputs: [],
	  name: "setPresalePartnersAddress",
	  inputs: [
		{
		  type: "address",
		  name: "_partnersAddress",
		  internalType: "address",
		},
	  ],
	},
	{
	  type: "function",
	  stateMutability: "nonpayable",
	  outputs: [],
	  name: "setSaleOpen",
	  inputs: [{ type: "bool", name: "_status", internalType: "bool" }],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "bool", name: "", internalType: "bool" }],
	  name: "supportsInterface",
	  inputs: [{ type: "bytes4", name: "interfaceId", internalType: "bytes4" }],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "string", name: "", internalType: "string" }],
	  name: "symbol",
	  inputs: [],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [
		{ type: "uint256", name: "id", internalType: "uint256" },
		{ type: "uint256", name: "birth", internalType: "uint256" },
		{ type: "address", name: "minter", internalType: "address" },
		{ type: "string", name: "uri", internalType: "string" },
	  ],
	  name: "tinyBones",
	  inputs: [{ type: "uint256", name: "", internalType: "uint256" }],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
	  name: "tokenByIndex",
	  inputs: [{ type: "uint256", name: "index", internalType: "uint256" }],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
	  name: "tokenOfOwnerByIndex",
	  inputs: [
		{ type: "address", name: "owner", internalType: "address" },
		{ type: "uint256", name: "index", internalType: "uint256" },
	  ],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "string", name: "", internalType: "string" }],
	  name: "tokenURI",
	  inputs: [{ type: "uint256", name: "tokenId", internalType: "uint256" }],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
	  name: "totalDividend",
	  inputs: [],
	},
	{
	  type: "function",
	  stateMutability: "view",
	  outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
	  name: "totalSupply",
	  inputs: [],
	},
	{
	  type: "function",
	  stateMutability: "nonpayable",
	  outputs: [],
	  name: "transferFrom",
	  inputs: [
		{ type: "address", name: "from", internalType: "address" },
		{ type: "address", name: "to", internalType: "address" },
		{ type: "uint256", name: "tokenId", internalType: "uint256" },
	  ],
	},
	{
	  type: "function",
	  stateMutability: "nonpayable",
	  outputs: [],
	  name: "transferOwnership",
	  inputs: [{ type: "address", name: "newOwner", internalType: "address" }],
	},
	{
	  type: "function",
	  stateMutability: "nonpayable",
	  outputs: [],
	  name: "withdrawFunds",
	  inputs: [{ type: "bool", name: "_allFunds", internalType: "bool" }],
	},
];
const CONTRACT_ADDRES = "0x78A804e1C8d46dc194124d5BDC348234fcB0D782";

//rewards contract
const CONTRACT_ADDRES2 = "0xe703214808C3603a9dA2609d52bDcF920E0a0edf";
const CONTRACT_ABI2 = [{"type":"constructor","stateMutability":"nonpayable","inputs":[]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"spender","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"ExcludeFromFees","inputs":[{"type":"address","name":"account","internalType":"address","indexed":true},{"type":"bool","name":"isExcluded","internalType":"bool","indexed":false}],"anonymous":false},{"type":"event","name":"ExcludeMultipleAccountsFromFees","inputs":[{"type":"address[]","name":"accounts","internalType":"address[]","indexed":false},{"type":"bool","name":"isExcluded","internalType":"bool","indexed":false}],"anonymous":false},{"type":"event","name":"GasForProcessingUpdated","inputs":[{"type":"uint256","name":"newValue","internalType":"uint256","indexed":true},{"type":"uint256","name":"oldValue","internalType":"uint256","indexed":true}],"anonymous":false},{"type":"event","name":"LiquidityWalletUpdated","inputs":[{"type":"address","name":"newLiquidityWallet","internalType":"address","indexed":true},{"type":"address","name":"oldLiquidityWallet","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"ProcessedDividendTracker","inputs":[{"type":"uint256","name":"iterations","internalType":"uint256","indexed":false},{"type":"uint256","name":"claims","internalType":"uint256","indexed":false},{"type":"uint256","name":"lastProcessedIndex","internalType":"uint256","indexed":false},{"type":"bool","name":"automatic","internalType":"bool","indexed":true},{"type":"uint256","name":"gas","internalType":"uint256","indexed":false},{"type":"address","name":"processor","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"SendDividends","inputs":[{"type":"uint256","name":"tokensSwapped","internalType":"uint256","indexed":false},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"SetAutomatedMarketMakerPair","inputs":[{"type":"address","name":"pair","internalType":"address","indexed":true},{"type":"bool","name":"value","internalType":"bool","indexed":true}],"anonymous":false},{"type":"event","name":"SwapAndLiquify","inputs":[{"type":"uint256","name":"tokensSwapped","internalType":"uint256","indexed":false},{"type":"uint256","name":"ethReceived","internalType":"uint256","indexed":false},{"type":"uint256","name":"tokensIntoLiqudity","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"UpdateDividendTracker","inputs":[{"type":"address","name":"newAddress","internalType":"address","indexed":true},{"type":"address","name":"oldAddress","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"UpdateUniswapV2Router","inputs":[{"type":"address","name":"newAddress","internalType":"address","indexed":true},{"type":"address","name":"oldAddress","internalType":"address","indexed":true}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"_isBlacklisted","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"_marketingWalletAddress","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allowance","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"spender","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"approve","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"automatedMarketMakerPairs","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"blacklistAddress","inputs":[{"type":"address","name":"account","internalType":"address"},{"type":"bool","name":"value","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"claim","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint8","name":"","internalType":"uint8"}],"name":"decimals","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"decreaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"subtractedValue","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"dividendTokenBalanceOf","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract BABYTOKENDividendTracker"}],"name":"dividendTracker","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"excludeFromDividends","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"excludeFromFees","inputs":[{"type":"address","name":"account","internalType":"address"},{"type":"bool","name":"excluded","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"excludeMultipleAccountsFromFees","inputs":[{"type":"address[]","name":"accounts","internalType":"address[]"},{"type":"bool","name":"excluded","internalType":"bool"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"gasForProcessing","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"},{"type":"int256","name":"","internalType":"int256"},{"type":"int256","name":"","internalType":"int256"},{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"}],"name":"getAccountDividendsInfo","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"},{"type":"int256","name":"","internalType":"int256"},{"type":"int256","name":"","internalType":"int256"},{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"}],"name":"getAccountDividendsInfoAtIndex","inputs":[{"type":"uint256","name":"index","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getClaimWait","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getLastProcessedIndex","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getNumberOfDividendTokenHolders","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getTotalDividendsDistributed","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"implementation","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"increaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"addedValue","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"initialize","inputs":[{"type":"address[4]","name":"addrs","internalType":"address[4]"},{"type":"string","name":"name_","internalType":"string"},{"type":"string","name":"symbol_","internalType":"string"},{"type":"uint256","name":"totalSupply_","internalType":"uint256"},{"type":"uint256","name":"tokenRewardsFee_","internalType":"uint256"},{"type":"uint256","name":"liquidityFee_","internalType":"uint256"},{"type":"uint256","name":"marketingFee_","internalType":"uint256"},{"type":"uint256","name":"minimumTokenBalanceForDividends_","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isExcludedFromFees","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"liquidityFee","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"marketingFee","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"processDividendTracker","inputs":[{"type":"uint256","name":"gas","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"rewardToken","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setAutomatedMarketMakerPair","inputs":[{"type":"address","name":"pair","internalType":"address"},{"type":"bool","name":"value","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setLiquiditFee","inputs":[{"type":"uint256","name":"value","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setMarketingFee","inputs":[{"type":"uint256","name":"value","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setMarketingWallet","inputs":[{"type":"address","name":"wallet","internalType":"address payable"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setSwapTokensAtAmount","inputs":[{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setTokenRewardsFee","inputs":[{"type":"uint256","name":"value","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"swapTokensAtAmount","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenRewardsFee","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalFees","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transfer","inputs":[{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transferFrom","inputs":[{"type":"address","name":"sender","internalType":"address"},{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"uniswapV2Pair","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IUniswapV2Router02"}],"name":"uniswapV2Router","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateClaimWait","inputs":[{"type":"uint256","name":"claimWait","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateDividendTracker","inputs":[{"type":"address","name":"newAddress","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateGasForProcessing","inputs":[{"type":"uint256","name":"newValue","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateUniswapV2Router","inputs":[{"type":"address","name":"newAddress","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"withdrawableDividendOf","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"receive","stateMutability":"payable"}];



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
  hideElement(divTracker);
  hideElement(divTrack);
  hideElement(claimRewardsBtn);
  hideElement(discconnectBTN);
  hideElement(loggedinAdd);
  window.userWalletAddress = null;
  
 /* if (window.ethereum) {
    window.ethereum.on("chainChanged", function (networkID) {
      const newNetwork = parseInt(networkID);
      console.log("Network has changed!!!!", newNetwork);
      if (newNetwork !== 0xA86A) {
        alert("Please Switch to Avalanche Network!");
        ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: Web3.utils.toHex(0xA86A) }],
        });
      }
    });
  }*/
};


//initialize we3
function toggleButton() {
	if (!window.ethereum) {
		loginButton.innerText = 'MetaMask is not installed'
		loginButton.classList.remove('bg-purple-500', 'text-white')
		loginButton.classList.add('bg-gray-500', 'text-gray-100', 'cursor-not-allowed')
	  return false
	}

	
	loginButton.addEventListener('click', loginWithMetaMask)
}

async function loginWithMetaMask() {
  console.log("func:::::: loginWithMetaMask()...");
  await web3.eth.getChainId();

  if (await web3.eth.getChainId() !== 0xA86A) {alert("Please Switch to Avalanche Network or add do it manually from your wallet menu");
    console.log("suggesing now...");
	window.ethereum.on("chainChanged", function () {
	  if (chainId === 0xA86A) {
	    loginWithMetaMask();
	  };
    },
	);
	
	const AVALANCHE_NETWORK = {
			chainId: "0xA86A",
			chainName: "Avalanche Network",
			nativeCurrency: {
				name: "Avalanche",
				symbol: "AVAX",
				decimals: 18
			},
			rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
			blockExplorerUrls: ["https://cchain.explorer.avax.network/"]
	};
	ethereum.request({
	  method: 'wallet_addEthereumChain',
	  params: [AVALANCHE_NETWORK],
	});
	window.location.reload();

} if (window.ethereum) {
    window.accounts = await window.ethereum
      .request({ method: "eth_requestAccounts" })
	  .catch((e) => {
	    console.log("Error 1");
	    console.error(e.message);
        return;
      });
    if (!accounts) {
      console.log("accounts");
      console.log(accounts);
  
      return;
    }

    window.userWalletAddress = accounts[0];
  
    loginButton.removeEventListener("click", loginWithMetaMask);
  
    console.log(userWalletAddress);
	
  
    loggedinAdd.innerText = userWalletAddress;
    showElement(discconnectBTN);
    showElement(loggedinAdd);
	showElement(divTracker);
	
	showElement(claimRewardsBtn);
	showElement(divTrack);
    hideElement(connectBTN);
} else {
    console.log("window");
    console.log(window);
    alert("need to install metamask...");
}
getRewards();
  //   console.log(window.useracc);
}

async function logoutMM() {
  window.userWalletAddress = null;
  showElement(connectBTN);
  hideElement(discconnectBTN);
  loggedinAdd.innerText = "";
  hideElement(loggedinAdd);
}

function checks() {
  if (chainId === 0xA86A) {
    callback();
    chainId = "";
  } else {
    localStorage.clear();
	chainId = "";
	web3.eth.getChainId();
  }
}

function both(callback) {
  web3.eth.getChainId().then(checks());
  callback();
}

async function mintNFTexecution() {
  var mintAMT = document.getElementById("dropdownMintAmt");
  var mintSoMuch = mintAMT.options[mintAMT.selectedIndex].value;
  var payforMInt = mintSoMuch * 2 * 1000000000000000000;
  console.log("Minting NFT");
  console.log(myContract);
  console.log(mintSoMuch);
  console.log(payforMInt);
  
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
  console.log("func::::::: mintNFT()");
  
  if (
	userWalletAddress == null ||
	userWalletAddress == undefined ||
	userWalletAddress == ""
  ) {
	alert("Please connect to MetaMask.");
} if (await web3.eth.getChainId() !== 0xA86A) {
      alert("Please Switch to Avalanche Network or add do it manually from your wallet menu");
    console.log("suggesing now...");
  
    window.ethereum.on("chainChanged", function () {
	  if (chainId === 0xA86A) {
	    mintNFTexecution();
      }
    });

	ethereum.request({
	  method: "wallet_switchEthereumChain",
	  params: [{ chainId: Web3.utils.toHex(0xA86A) }],
	});
	chainId = "";
  } else {
    mintNFTexecution();
}
  chainId = "";
}

async function getNetworkID() {
	const fetchedNetworkId = await web3.eth.getChainId();
	window.id = fetchedNetworkId;
	console.log("reading network id: ", fetchedNetworkId);
	return fetchedNetworkId;
  }
//find user claimable rewards
async function getRewards(){
	// console.log("func::::::: getRewards()");
  
	const currentNetworkId = await getNetworkID();
	if (currentNetworkId !== 43114) {
	  //   alert("STOP - Please connect to Avalanche FUJI TESTNET FIRST");
	  console.log("suggesing now...");
  
	  window.ethereum.on("chainChanged", function (networkId) {
		const newNetwork = parseInt(networkId);
		if (newNetwork === 43114) {
		  getRewardsEx();
		  //   alert("this is not the correct network!!");
		  //   ethereum.request({
		  //     method: "wallet_switchEthereumChain",
		  //     params: [{ chainId: Web3.utils.toHex(43114) }],
		  //   });
		}
	  });
  
	  ethereum.request({
		method: "wallet_switchEthereumChain",
		params: [{ chainId: Web3.utils.toHex(43114) }],
	  });
	  
	} else {
	  getRewardsEx();
	}
  
   
  }
  
  
  window.userRewards = '';
  async function getRewardsEx(){
	console.log("Getting Rewards");
  
	if (
	  userWalletAddress == null ||
	  userWalletAddress == undefined ||
	  userWalletAddress == ""
	) {
	  alert("Please Connect Wallet first");
	} else {
	  
	  const xx = await myContract2.methods.getAccountDividendsInfo(userWalletAddress).call({from: userWalletAddress});
	  const xxInEth = (xx[4])/(1000000000000000000);
	  console.log(xxInEth);
  
	  
   divTracker.innerText = xxInEth + " $JOE";
  
	}
  
  }


  async function claimRewardsEx(){
	console.log("Claiming Rewards");
	if (
		userWalletAddress == null ||
		userWalletAddress == undefined ||
		userWalletAddress == ""
	  ) {
		alert("Please Connect Wallet first");
	  } else {
		
		const claimIT = await myContract2.methods.claim().send({from: userWalletAddress});
		console.log(claimIT);
	
	
	  }
  
  }
  

init();