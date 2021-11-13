async function calculateDivs () {
	const arrayOfIDs = document.getElementById("num1").value.split(',');
    const minted = Number(document.getElementById("num2").value);
	const lottery = document.getElementById("lottery1").value == 2 ? 1:0;
  
	const topholder = document.getElementById("topholder1").value == 2 ? 1:0;


	const nftCost = 2;
	let totalDivs = 0;
	arrayOfIDs.forEach((ID) => {
	  let totalMinted = minted-ID;
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
  