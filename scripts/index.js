let acts = document.getElementsByClassName('bar-act');

for (let i = 0; i < acts.length; i++)
{
	acts[i].addEventListener('click', function(e){
		
		if( e.target.classList.length == 1 ){
		
			if( e.target.nextElementSibling.style.display == "" ){
				e.target.nextElementSibling.style.display = "block";
			}else{
				e.target.nextElementSibling.style.display = "";
			}
			
		}

	});
	
}

let acts1 = document.getElementsByClassName('bar-act-1');

for (let i = 0; i < acts1.length; i++)
{
	acts1[i].addEventListener('click', function(e){
		
		if( e.target.classList.length == 1 ){
		
			if( e.target.nextElementSibling.style.display == "" ){
				e.target.nextElementSibling.style.display = "block";
			}else{
				e.target.nextElementSibling.style.display = "";
			}
			
		}

	});
	
}

let acts2 = document.getElementsByClassName('bar-act-2');

for (let i = 0; i < acts2.length; i++)
{
	acts2[i].addEventListener('click', function(e){
	
		for(let j = 0; j < acts2.length; j++){
			acts2[j].classList.remove("bar2-selected");
		}
		
		e.target.classList.add("bar2-selected");
		
		let mapName = document.getElementById("selected-map").innerHTML = e.target.innerText;
		document.getElementById("dropList").innerHTML = "";
		
		document.getElementById("dropList").innerHTML += '<p id="dropWeapon">Weapon</p>' +
														 '<p id="dropAmulet">Amulet</p>' +
														 '<p id="dropRing">Ring</p>' +
														 '<p id="dropCharm">Charm</p>' +
														 '<p id="dropWard">Ward</p>' +
														 '<p id="dropTome">Tome</p>' +
														 '<p id="dropCraftingMaterial">Crafting Material</p>' +
														 '<p id="dropRecipe">Recipe</p>' +
														 '<p id="dropBlueprint">Blueprint</p>' +
														 '<p id="dropShard">Shard</p>';
		
		
		let items = getLoot(e.target.innerText);
		for(let i=0; i < items.length; i++){
		
			document.getElementById("drop" + items[i].type.replace(/\s/g, "")).innerHTML += '<div class="dropItem" style="color: #' + items[i].color + '">' + items[i].name + '</div>';

		}

	});
	
}
		
function getLoot(name){

	switch(name){
		case "Igman Must Not Fall": return IgmanMustNotFall;
		case "Ognya's Bravery": return OgnyasBravery;
		case "Arcane Craftbox": return ArcaneCraftbox;
		case "Quest for Dabog": return QuestforDabog;
		case "Dukat's Instructions": return DukatsInstructions;
		case "The Prayers": return ThePrayers;
		case "Followers of Dabog": return FollowersofDabog;
		case "Path of Radiant Blood": return PathofRadiantBlood;
		case "The Bridge": return TheBridge;
		case "The Great Hall": return TheGreatHall;
		case "Temple of Corruption": return TempleofCorruption;
		case "The King of Nothing": return TheKingofNothing;
		case "Siege Survival": return SiegeSurvival;
		case "Blot out the moonlight": return Blotoutthemoonlight;
		case "Fallen, not Forgotten": return FallennotForgotten;
		case "Draconic Deal": return DraconicDeal;
		case "Tears in the Snow": return TearsintheSnow;
		case "The Champion of Dabog": return TheChampionofDabog;
		case "The Charnel Path": return TheCharnelPath;
		case "The grave tells no tales": return Thegravetellsnotales;
		case "Road to Ruin": return RoadtoRuin;
		case "Voice of Usud": return VoiceofUsud;
		case "Of Light and Darkness": return OfLightandDarkness;
		case "Nothing grows here": return Nothinggrowshere;
		case "Nature, Deserted": return NatureDeserted;
		case "The Sacrifice": return TheSacrifice;
		case "Seedlings of Veles": return SeedlingsofVeles;
		case "Entrance of the Conflagration": return EntranceoftheConflagration;
		case "Tricks and Trees": return TricksandTrees;
		case "Reign of Kablar": return ReignofKablar;
		case "No More Heroes": return NoMoreHeroes;
		case "Fire versus Ice": return FireversusIce;
		case "A Warrior's Will": return AWarriorsWill;
		case "The Passing of the Torch": return ThePassingoftheTorch;
		case "Dragonslayer": return Dragonslayer;
		case "Seek and you shall find": return Seekandyoushallfind;
		case "The Fruit of our Toil": return TheFruitofourToil;
		case "Drink to the Gods": return DrinktotheGods;
		case "One for the Road": return OnefortheRoad;
		case "A Question Too Many": return AQuestionTooMany;
		case "A Prison of Your Own Making": return APrisonofYourOwnMaking;
		case "Trouble in Paradise": return TroubleinParadise;
		case "The Mad God": return TheMadGod;
		case "End Times": return EndTimes;
		case "Honorable Retreat": return HonorableRetreat;
		case "The Last of their Kind": return TheLastoftheirKind;
		case "Remnants of Igman": return RemnantsofIgman;
		case "A Place to Strife": return APlacetoStrife;
		case "Bogged Down": return BoggedDown;
		case "A Lake's Worth of Water": return ALakesWorthofWater;
		case "An Endless Spring": return AnEndlessSpring;
		case "Restless, Relentless": return RestlessRelentless;
		case "Twilight of The Thunder God": return TwilightofTheThunderGod;
		default: return false;
	}
	
}

function itemSearch(event){

	if( event.key != "Enter" ){ return false; }

	let search = document.getElementById("searchbar");
	let filter = search.value.toUpperCase();
	
	if( filter == "" || filter == " " ){ return false; }
	
	let act2 = document.getElementsByClassName("bar-act-2");
	
	document.getElementById("dropList").innerHTML = "";
	
	for(let j = 0; j < acts2.length; j++){
		acts2[j].classList.remove("bar2-selected");
	}
	
	let mapName = document.getElementById("selected-map").innerHTML = "Search: " + search.value;
	
	for(let i = 0; i < act2.length; i++){
		
		let loot = getLoot(act2[i].firstElementChild.innerHTML);
	
		for(let j = 0; j < loot.length; j++){
		
			if( loot[j].name.toUpperCase().indexOf(filter) > -1 ){
				let map = act2[i].firstElementChild.innerHTML;
				let actName = act2[i].parentElement.parentElement.parentElement.previousSibling.previousSibling.innerText;
				
				document.getElementById("dropList").innerHTML += '<p id="dropSearch" style="color: #' + loot[j].color + '">' + loot[j].name + ' - <i>' + map + ' (' + actName + ')</i></p>';
			}
		
		
		}
		
	}
	
}

document.getElementById("legendary-button").addEventListener('click', function(e){
	
	let menu = document.getElementById("legendary-menu");
	
	if( menu.style.display == "" ){
		menu.style.display = "block";
	}else{
		menu.style.display = "";
	}

});

let legendaryList = document.getElementsByClassName('item-slot');

for (let i = 0; i < legendaryList.length; i++)
{
	legendaryList[i].addEventListener('mouseenter', function(e){

		if( e.target.dataset.name ){
			
			let info = document.getElementById("item-info");
			
			info.style.top = 0 + "px";
			info.style.left = 0 + "px";

			info.style.opacity = "1";
			
		}

	});
	
	legendaryList[i].addEventListener('mousemove', function(e){

		if( e.target.dataset.name ){
			
			getLegendaries(e.target.dataset.name);
			
			// Get window dimensions
			let windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
			
			let info = document.getElementById("item-info");
			let offset = info.offsetHeight;
			let infoWidth = 280;
			
			if( e.pageY - 70 + offset >= windowHeight ){
				
				info.style.top = (windowHeight - offset - 10) + "px";
				info.style.left = e.pageX - infoWidth - 20 + "px";
				
			}else{
				
				info.style.top = e.pageY - 80 + "px";
				info.style.left = e.pageX - infoWidth - 20 + "px";
			
			}
			
		}

	});
	
	legendaryList[i].addEventListener('mouseleave', function(e){

		let info = document.getElementById("item-info");
		info.style.opacity = "0";

	});
	
}

function getLegendaries(item){
	
	let list;
	
	for(let i = 0; i < Object.values(legendaryItemList).length; i++){
		
		if(Object.values(legendaryItemList)[i].name == item){
			list = legendaryItemList[i];
			break;
		}
		
	}
	
	if(!list){ return false };
	
	// Clear old info
	document.getElementById("item-info-bonus").innerHTML = "";
	document.getElementById("item-info-stats-box").innerHTML = "";
	document.getElementById("item-info-rank").innerHTML = "";
	document.getElementById("item-info-dots").innerHTML = "";
	
	document.getElementById("item-info-might-value").firstElementChild.innerText = list.might;
	document.getElementById("item-info-name").firstElementChild.innerText = list.name;
	document.getElementById("item-info-type").firstElementChild.innerText = "Legendary " + list.type;
	document.getElementById("item-info-quality").firstElementChild.innerText = list.quality + " Quality";
	document.getElementById("item-info-level").firstElementChild.innerText = "Item Power Level " + list.level;
	
	document.getElementById("item-info-dots").innerHTML += '<img class="info-line" src="images/info_line.png"><div id="info-line-dot-box"></div>';
	for(let i = 0; i < list.dots; i++){
		document.getElementById("info-line-dot-box").innerHTML += '<img class="info-dots" src="images/dot.png">';
	}
	
	for(let i = 0; i < Object.keys(list.bonus).length; i++){
		document.getElementById("item-info-bonus").innerHTML += '<div class="info-center text-normal"><p>' + Object.keys(list.bonus)[i] + '<span class="text-large"> ' + Object.values(list.bonus)[i] + '</span></p></div>';
	}
	
	for(let i = 0; i < Object.keys(list.bonus2).length; i++){
		document.getElementById("item-info-stats-box").innerHTML += '<div class="item-info-stats"><p class="stats-left">' + Object.keys(list.bonus2)[i] + '</p><span class="stats-right"> +' + Object.values(list.bonus2)[i] + '</span></div>';
	}
	
	for(let i = 0; i < Object.keys(list.rank).length; i++){
		document.getElementById("item-info-rank").innerHTML += '<div class="item-info-stats text-small"><p class="stats-left">' + Object.keys(list.rank)[i] + '</p><span class="stats-right">' + Object.values(list.rank)[i] + '</span></div>';
	}
	
	document.getElementById("item-info-description").firstElementChild.innerText = list.description;
	
	if(list.special){
		document.getElementById("item-info-box2").style.display = "";
		document.getElementById("item-info-description-2").firstElementChild.innerText = list.special;
	}else{
		document.getElementById("item-info-box2").style.display = "none";
	}
	
}


