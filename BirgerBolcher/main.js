let protukterArray;

fetch('http://localhost:3333/getProducts')
	.then((response)=>{return response.json()})
	.then((data)=>{
		console.log('', data);
		produkterArray = data;
		udskrivProdukter();
	});

let produktTemplate = document.querySelector('.produkt')

let produkterContainerElem = document.querySelector('.produkter')

let searchBolcheElem = document.querySelector('.searchBolche')

let bolcherElem;

searchBolcheElem.addEventListener('keyup', ()=>{
	bolcherElem = document.querySelectorAll('.produkt')
	// console.log('', bolcherElem);
	udskrivSearchResult();
})


function udskrivSearchResult(){
	bolcherElem.forEach(bolche => {

		console.log('', bolche.children);

		let bolcheNavn = bolche.children[0].children[0].innerHTML;
		let bolcheFarve = bolche.children[1].children[0].innerHTML;
		let bolcheSmags_styrke = bolche.children[2].children[0].innerHTML;
		let bolcheSmags_type = bolche.children[3].children[0].innerHTML;
		let bolcheSmags_surhed = bolche.children[4].children[0].innerHTML;
		let bolche_pris = bolche.children[5].children[0].innerHTML;
		let bolche_vægt = bolche.children[6].children[0].innerHTML;

		if(searchConditions(bolcheNavn)|| searchConditions(bolcheFarve) || searchConditions(bolcheFarve) || searchConditions(bolcheSmags_styrke) || searchConditions(bolcheSmags_type) || searchConditions(bolcheSmags_surhed)|| searchConditions(bolche_pris) || searchConditions(bolche_vægt)){
			bolche.style.display = ""
		}else{
			bolche.style.display = "none"
		}
		// console.log('Bolche Navn:', bolcheNavn);
		// console.log('input.value', searchBolcheElem.value);
		// if(bolcheNavn.toUpperCase().indexOf(searchBolcheElem.value.toUpperCase()) != -1 || bolcheFarve.toUpperCase().indexOf(searchBolcheElem.value.toUpperCase()) != -1 ){
		// 	bolche.style.display = ""
		// }else{
		// 	bolche.style.display = "none"
		// }
	});
}

function searchConditions(param){
	if(param.toUpperCase().indexOf(searchBolcheElem.value.toUpperCase()) != -1){
		console.log('', param);
		return true;
	}else{
		return false;
	}
	
}


function udskrivProdukter (){
	produkterArray.forEach(produkt => {
		let produktClone = produktTemplate.cloneNode(true);

		let produktNameElement = produktClone.querySelector('.produkt_navn')
		let produktfarveElem = produktClone.querySelector('.produkt_farve')
		let produktsmagsstyrkeElem = produktClone.querySelector('.produkt_smags_styrke')
		let produktsmagstypeElem = produktClone.querySelector('.smags_type')
		let produktsmagssurhedElem = produktClone.querySelector('.smags_surhed')
		let produktpris = produktClone.querySelector('.produkt_pris')
		let produktvægt = produktClone.querySelector('.produkt_vægt')

		produktNameElement.textContent = `${produkt.navn}`;
		produktfarveElem.textContent = `${produkt.farve}`;
		produktsmagsstyrkeElem.textContent = `${produkt.smags_styrke}`;
		produktsmagstypeElem.textContent = `${produkt.smags_type}`;
		produktsmagssurhedElem.textContent = `${produkt.smags_surhed}`;
		produktpris.textContent = `${produkt.pris}`;
		produktvægt.textContent = `${produkt.vægt}`
		

		produkterContainerElem.appendChild(produktClone)
	});
}