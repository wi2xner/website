



hideElement = (element) => element.style.display = "none";
showElement = (element) => element.style.display = "block";


const connectBTN = document.getElementById('loginButton');
const discconnectBTN = document.getElementById('logoutButton');
const loggedinAdd = document.getElementById('loggedinwith');


const CONTRACT_ABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"uint256","name":"_maxSupply","internalType":"uint256"},{"type":"uint256","name":"_reservedMaxSupply","internalType":"uint256"},{"type":"uint256","name":"_presaleMaxSupply","internalType":"uint256"},{"type":"uint256","name":"_price","internalType":"uint256"},{"type":"uint256","name":"_maxMintRequest","internalType":"uint256"},{"type":"string","name":"_baseTokenURI","internalType":"string"},{"type":"string","name":"_baseExtension","internalType":"string"},{"type":"address","name":"_presalePartnersAddress","internalType":"address"}]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"approved","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":true}],"anonymous":false},{"type":"event","name":"ApprovalForAll","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"operator","internalType":"address","indexed":true},{"type":"bool","name":"approved","internalType":"bool","indexed":false}],"anonymous":false},{"type":"event","name":"Mint","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":false},{"type":"address","name":"to","internalType":"address","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":true}],"anonymous":false},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"approve","inputs":[{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"availableFunds","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"owner","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"baseExtension","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"baseTokenURI","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"claimRewards","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"eligibleForPresale","inputs":[{"type":"address","name":"_minter","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"fees","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"getApproved","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getReflectionBalance","inputs":[{"type":"uint256","name":"_tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"tuple","name":"","internalType":"struct NFTMarketplace.TinyBones","components":[{"type":"uint256","name":"id","internalType":"uint256"},{"type":"uint256","name":"birth","internalType":"uint256"},{"type":"address","name":"minter","internalType":"address"},{"type":"string","name":"uri","internalType":"string"}]}],"name":"getTinyBones","inputs":[{"type":"uint256","name":"_tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isApprovedForAll","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"operator","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"lastDividendAt","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"maxMintRequest","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"maxSupply","inputs":[]},{"type":"function","stateMutability":"payable","outputs":[],"name":"mint","inputs":[{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"ownerOf","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"presaleMaxSupply","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"presalePartnersAddress","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"presaleSupply","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"price","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"reflectionBalance","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"reservedMaxSupply","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"reservedSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"safeTransferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"safeTransferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"},{"type":"bytes","name":"_data","internalType":"bytes"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setApprovalForAll","inputs":[{"type":"address","name":"operator","internalType":"address"},{"type":"bool","name":"approved","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setBaseTokenURI","inputs":[{"type":"string","name":"_baseURI","internalType":"string"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setPresaleOpen","inputs":[{"type":"bool","name":"_status","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setPresalePartnersAddress","inputs":[{"type":"address","name":"_partnersAddress","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setSaleOpen","inputs":[{"type":"bool","name":"_status","internalType":"bool"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"supportsInterface","inputs":[{"type":"bytes4","name":"interfaceId","internalType":"bytes4"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"id","internalType":"uint256"},{"type":"uint256","name":"birth","internalType":"uint256"},{"type":"address","name":"minter","internalType":"address"},{"type":"string","name":"uri","internalType":"string"}],"name":"tinyBones","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenByIndex","inputs":[{"type":"uint256","name":"index","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenOfOwnerByIndex","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"uint256","name":"index","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"tokenURI","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalDividend","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdrawFunds","inputs":[{"type":"bool","name":"_allFunds","internalType":"bool"}]}];
const CONTRACT_ADDRES = "0x78A804e1C8d46dc194124d5BDC348234fcB0D782";


// const data = [{
//	chainId: '43113',
//	chainName: 'Avalanche Testnet C-Chain',
//	nativeCurrency:
//		{
//			name: 'Avalanche',
//			symbol: 'BAVAX',
//			decimals: 18
//		},
//	rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
//	blockExplorerUrls: ['https://cchain.explorer.avax-test.network/'],
//}]

var web3 = new Web3("https://api.avax-test.network/ext/bc/C/rpc");
var web3 = new Web3(Web3.givenProvider || ('ws://api.avax-test.network/ext/bc/C/rpc'));

const ethEnabled = () => {
	if (window.web3) {
	  window.web3 = new Web3(window.web3.currentProvider);
	  window.ethereum.enable();
	  return true;
	}
	return false;
  };
	if (!ethEnabled()) {
	  alert("Please install MetaMask to use this dApp!");
	};
	

	
var myContract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRES, {
    from: window.userWalletAddress // default from address
    // gasPrice: '30000000000' // default gas price in wei, 20 gwei in this case
});

init = async () => {
showElement(connectBTN);
hideElement(discconnectBTN);
hideElement(loggedinAdd);

	}
	



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
	window.accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
	   .catch((e) => {
		 console.error(e.message)
		 return
	   })
	 if (!accounts) { return }

	 window.userWalletAddress = accounts[0]
	 

	 loginButton.removeEventListener('click', loginWithMetaMask)
	
	console.log(userWalletAddress);
	
	loggedinAdd.innerText = userWalletAddress;
	showElement(discconnectBTN);
	showElement(loggedinAdd);
	hideElement(connectBTN);

   //   console.log(window.useracc);
   }


   async function logoutMM() {

	window.userWalletAddress =null;
	showElement(connectBTN);
	hideElement(discconnectBTN);
	loggedinAdd.innerText = '';
   }


async function mintNFT(){
	var mintAMT = document.getElementById('dropdownMintAmt');
	var mintSoMuch = mintAMT.options[mintAMT.selectedIndex].value;
var payforMInt = mintSoMuch*2*1000000000000000000;
console.log("Minting NFT");
console.log(myContract);
console.log(mintSoMuch);
console.log(payforMInt);
if(userWalletAddress == null || userWalletAddress == undefined || userWalletAddress == ""){
	alert("Please Connect Wallet first");
}else{

	myContract.methods.mint(mintSoMuch).send({from:userWalletAddress,  value: payforMInt});

}

}





   init();