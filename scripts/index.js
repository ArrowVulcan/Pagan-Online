/* ####################
	Variables
#################### */

var canSearch = false;
var hasSearched = false;
var timeoutList = [];

/* ####################
	Functions
#################### */
function dropdown(arg, id){

	if( arg == 'show' ){
		$("#drop-list-" + id).css("top", "0px");
	}else{
		$("#drop-list-" + id).css("top", "-250px");
	}

}

function getColor(e){

	if( e == "Base" ){ return "#a99776"; }
	if( e == "Rare" ){ return "#009fd6"; }
	if( e == "Epic" ){ return "#ff00ff"; }
	if( e == "Legendary" ){ return "#e45010"; }
	if( e == "Magic" ){ return "#5fbc5f"; }

	return "#000";

}

function getMap(id){

	let list = {
		"1": ["Igman Must Not Fall", "1"],
		"2": ["Ognya's Bravery", "1"],
		"3": ["Arcane Craftbox", "1"],
		"4": ["Quest for Dabog", "1"],
		"5": ["Dukat's Instructions", "1"],
		"6": ["The Prayers", "1"],
		"7": ["Followers of Dabog", "1"],
		"8": ["Path of Radiant Blood", "1"],
		"9": ["The Bridge", "1"],
		"10": ["The Great Hall", "1"],
		"11": ["Temple of Corruption", "1"],
		"12": ["The King of Nothing", "1"],
		"13": ["Siege Survival", "2"],
		"14": ["Blot out the moonlight", "2"],
		"15": ["Fallen, not Forgotten", "2"],
		"16": ["Draconic Deal", "2"],
		"17": ["Tears in the Snow", "2"],
		"18": ["The Champion of Dabog", "2"],
		"19": ["The Charnel Path", "2"],
		"20": ["The grave tells no tales", "2"],
		"21": ["Road to Ruin", "2"],
		"22": ["Voice of Usud", "2"],
		"23": ["Of Light and Darkness", "2"],
		"24": ["Nothing grows here", "3"],
		"25": ["Nature, Deserted", "3"],
		"26": ["The Sacrifice", "3"],
		"27": ["Seedlings of Veles", "3"],
		"28": ["Entrance of the Conflagration", "3"],
		"29": ["Tricks and Trees", "3"],
		"30": ["Reign of Kablar", "3"],
		"31": ["No More Heroes", "3"],
		"32": ["Fire versus Ice", "3"],
		"33": ["A Warrior's Will", "3"],
		"34": ["The Passing of the Torch", "3"],
		"35": ["Dragonslayer", "3"],
		"36": ["Seek and you shall find", "4"],
		"37": ["The Fruit of our Toil", "4"],
		"38": ["Drink to the Gods", "4"],
		"39": ["One for the Road", "4"],
		"40": ["A Question Too Many", "4"],
		"41": ["A Prison of Your Own Making", "4"],
		"42": ["Trouble in Paradise", "4"],
		"43": ["The Mad God", "4"],
		"44": ["End Times", "5"],
		"45": ["Honorable Retreat", "5"],
		"46": ["The Last of their Kind", "5"],
		"47": ["Remnants of Igman", "5"],
		"48": ["A Place to Strife", "5"],
		"49": ["Bogged Down", "5"],
		"50": ["A Lake's Worth of Water", "5"],
		"51": ["An Endless Spring", "5"],
		"52": ["Restless, Relentless", "5"],
		"53": ["Twiligt of The Thunder God", "5"],
	};
	
	let obj = new Object();
	obj.name = list[id][0];
	obj.act = list[id][1];

	return obj;
	
}

function getSpreadsheet(){
	
	const prefix = "https://spreadsheets.google.com/feeds/list/";
	const sheetId = "1K96Um2uKOu03ILVPHs_DkTzZ-41XSVabbULXDVQciRE";
	const postfix = "/od6/public/values?alt=json";
	const spreadsheetURL = prefix + sheetId + postfix;
	
	$.ajax({
		type: "GET",
		dataType: 'jsonp',
		url: spreadsheetURL,
		success: function(data){
			
			var contentList = document.getElementById("contentList");
			let itemList = data.feed.entry;
			
			contentList.innerHTML += '<div id="notfound" class="item"><p>No results found.</p></div>';
			
			for(let i = 0; i < itemList.length; i++){
				contentList.innerHTML += '<div class="item" onmouseover="showTooltip()" onmouseout="hideTooltip()" onmousemove="moveTooltip(this, event)" data-name="' + itemList[i].gsx$name.$t + '" data-type="' + itemList[i].gsx$type.$t + '" data-level="' + itemList[i].gsx$itempowerlevel.$t + '" data-rarity="' + itemList[i].gsx$rarity.$t + '" data-quality="' + itemList[i].gsx$quality.$t + '" data-might="' + itemList[i].gsx$might.$t + '" data-tier="' + itemList[i].gsx$tier.$t + '" data-hero="' + itemList[i].gsx$hero.$t + '" data-rank="' + itemList[i].gsx$rank.$t + '" data-stats="' + itemList[i].gsx$stats.$t + '" data-bonus="' + itemList[i].gsx$bonus.$t + '" data-description="' + itemList[i].gsx$description.$t + '" data-craftingtype="' + itemList[i].gsx$craftingtype.$t + '" data-affect="' + itemList[i].gsx$affect.$t + '" data-effect="' + itemList[i].gsx$effect.$t + '" data-location="' + itemList[i].gsx$location.$t + '"><p style="color: ' + getColor(itemList[i].gsx$rarity.$t) + '">' + itemList[i].gsx$name.$t + '</p></div>';
			}
			
			canSearch = true;
			$("#search").css("opacity", "1");
			$("#loader").css("opacity", "0");
			
			$("#dropdowns").css("opacity", "1");
			
			setTimeout(function(){
				$("#loader").css("display", "none");
			}, 500);
			
		},
		error: function(){
			
			$("#text").text("Error Getting Database...");
			
		}
	});
	
}

function itemSearch(event){

	if( canSearch == false ){ return false; }
	
	if( event.key != "Enter" && event.type != "mousedown" ){ return false; }

	let search = document.getElementById("searchbar");
	let filter = search.value.toUpperCase();
	
	if( event.type == "mousedown" ){ filter = event.target.dataset.weapon.toUpperCase(); }
	
	if( filter == "" || filter == " " ){ return false; }
	
	for(let i = 0; i < timeoutList.length; i++){
		clearTimeout(timeoutList[i]);
	}
	
	$(".item").css("display", "none");
	
	let items = document.getElementsByClassName("item");

	let time = 1000;
	
	let itemsFound = 0;
	
	if( hasSearched ){ time = 0; };

	for(let i = 1; i < items.length; i++){
		
		if( event.type == "mousedown" ? (items[i].dataset.type.toUpperCase() == filter) : (items[i].firstElementChild.innerText.toUpperCase().indexOf(filter) > -1 ) ){
			
			itemsFound++;
			
			timeoutList[timeoutList.length] = setTimeout(function(){
				items[i].style.display = "table";
				items[i].style.opacity = "1";
			}, time + ( itemsFound * 40 ) );
		
		}
		
	}
	
	if( itemsFound > 0 ){
		$("#notfound p").text(itemsFound + " items found.");
	}else{
		$("#notfound p").text("No results found.");
	}
	
	$("#notfound").css("display", "block");
	
	$("#search").css("marginTop", "1%");
	
	setTimeout(function(){
		
		$("#contentList").css("display", "block");
		$("#contentList").css("opacity", "1");
		
	}, 1000);
	
	hasSearched = true;

}

function hideTooltip(){
	
	$("#tooltip").css("display", "none");
	$("#tooltip").css("opacity", "0");

}

function showTooltip(){
	
	$("#tooltip").css("display", "block");
	$("#tooltip").css("opacity", "1");

}

function moveTooltip(obj, event){
	
	let tooltip = document.getElementById("tooltip");
	
	// Clean tooltip
	tooltip.innerHTML = "";

	// Get all the data
	let name = obj.dataset.name;
	let type = obj.dataset.type;
	let level = obj.dataset.level;
	let rarity = obj.dataset.rarity;
	let quality = obj.dataset.quality;
	let might = obj.dataset.might;
	let tier = obj.dataset.tier;
	let hero = obj.dataset.hero;
	let rank = obj.dataset.rank;
	let stats = obj.dataset.stats;
	let bonus = obj.dataset.bonus;
	let description = obj.dataset.description;
	let craftingtype = obj.dataset.craftingtype;
	let affect = obj.dataset.affect;
	let effect = obj.dataset.effect;
	let location = obj.dataset.location;
	
	// Fill tooltip
	if( might ){
		tooltip.innerHTML += '<div id="might-box"><img src="images/might_box.png"><span id="might-value">' + might + '</span></div>';
	}
	
	if( name ){
		tooltip.innerHTML += '<div id="name" style="color: ' + getColor(rarity) + '">' + name + '</div>';
	}
	
	if( rarity ){
		tooltip.innerHTML += '<div id="rarity-type">' + rarity + ' ' + type + '</div>';
	}
	
	if( quality ){
		tooltip.innerHTML += '<div id="quality">' + quality + ' Quality</div>';
	}
	
	if( level ){
		tooltip.innerHTML += '<div id="item-power-level">Item Power Level <span>' + level + '</span></div>';
	}
	
	// Line breaker
	tooltip.innerHTML += '<div class="line-breaker"></div>';
	
	if( tier ){
		
		let tierText = '<div id="tier-box">';
		
		for(let i = 0; i < tier; i++){
			tierText += '<div class="tier"></div>';
		}
		
		tierText += '</div>';
		
		tooltip.innerHTML += tierText;
		
		$(".tier").addClass("c_" + rarity);

	}
	
	if( stats ){
		
		let statsText = '<div id="stats">';
		
		let split = stats.split(",");

		for(let i = 0; i < split.length; i++){
			statsText += '<div class="stats-row">' + split[i] + '</div>';
		}
		
		statsText += '</div>';
		
		tooltip.innerHTML += statsText;
		
	}
	
	// Line breaker
	if( level && bonus ){
		tooltip.innerHTML += '<div class="line-breaker"></div>';
	}
	
	if( bonus ){
		
		let statsText = '<div id="bonus">';
		
		let split = bonus.split(",");

		for(let i = 0; i < split.length; i++){
			
			let newSplit = split[i];
			newSplit = newSplit.split(" ");

			let last = newSplit[newSplit.length-1];
			newSplit = split[i].split(" " + last).slice(0, -1);
			
			statsText += '<div class="bonus-row">' + newSplit + '<span>+' + last + '</span></div>';
			
		}
		
		statsText += '</div>';
		
		tooltip.innerHTML += statsText;
		
	}
	
	// Line breaker
	if( level ){
		tooltip.innerHTML += '<div class="line-breaker"></div>';
	}
	
	if( hero ){
		tooltip.innerHTML += '<div id="hero">Used by:<span>' + hero + '</span></div>';
	}
	
	if( rank ){
		tooltip.innerHTML += '<div id="rank">Required Legacy Rank<span>' + rank + '</span></div>';
	}
	
	// Line breaker
	if( description && rank ){
		tooltip.innerHTML += '<div class="line-breaker"></div>';
	}
	
	if( description ){
		tooltip.innerHTML += '<div id="description">' + description + '</div>';
	}
	
	// Line breaker
	if( !level ){
		tooltip.innerHTML += '<div class="line-breaker"></div>';
	}
	
	if( affect ){
		
		tooltip.innerHTML += '<div id="affect-text">' + craftingtype + '-based Crafting Card. Used for crafting weapons.<br>Can affect:</div>';
		
		let affectText = '<div id="affect">';
		
		let split = affect.split(",");

		for(let i = 0; i < split.length; i++){
			affectText += '<div class="affect-item">' + split[i] + '</div>' 
		}
		
		affectText += '</div>';
		
		tooltip.innerHTML += affectText;
	}
	
	if( effect ){
		tooltip.innerHTML += '<div id="effect">' + effect + '</div>';	
	}
	
	if( location ){

		let locationText = '<div id="location">';
		
		let split = location.split(",");

		locationText += '<div class="map-act"><p>Act I</p><div class="line-breaker"></div></div><div id="map-act-1"></div>';
		locationText += '<div class="map-act"><p>Act II</p><div class="line-breaker"></div></div><div id="map-act-2"></div>';
		locationText += '<div class="map-act"><p>Act III</p><div class="line-breaker"></div></div><div id="map-act-3"></div>';
		locationText += '<div class="map-act"><p>Act IV</p><div class="line-breaker"></div></div><div id="map-act-4"></div>';
		locationText += '<div class="map-act"><p>Act V</p><div class="line-breaker"></div></div><div id="map-act-5"></div>';
		
		locationText += '</div>';
		tooltip.innerHTML += locationText;

		for(let i = 0; i < split.length; i++){
			
			if( split[i] == "" ){ continue; }
			
			let map = getMap(split[i]);
			let act = document.getElementById("map-act-" + map.act);
			
			act.innerHTML += '<div class="map">' + map.name + '</div>';
			
		}
		
		// Remove empty acts and scale location tooltip size for content.
		let maxMaps = 0;
		for(let i = 1; i <= 5; i++){
			
			if( document.getElementById("map-act-" + i).childElementCount == 0 ){ document.getElementById("map-act-" + i).previousSibling.remove() }
			if( document.getElementById("map-act-" + i).childElementCount > maxMaps ){ maxMaps = document.getElementById("map-act-" + i).childElementCount; }
			
		}
		
		if( maxMaps == 1 ){ $("#location").css("width", "220px"); }
		if( maxMaps == 2 ){ $("#location").css("width", "420px"); }
		if( maxMaps >= 3 ){ $("#location").css("width", "630px"); }
		
	}
	
	// Make tooltip follow cursor
	let windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	
	let scrollTop = document.body.scrollTop;
	
	let info = document.getElementById("tooltip");
	let offset = info.offsetHeight;
	let offset2 = info.offsetWidth;
	let infoWidth = 280;
	
	if( event.pageY - 70 + offset >= windowHeight ){
		
		info.style.top = (windowHeight - offset - 10) + "px";
		
	}else if( event.pageY + 60 - offset/2 <= 0 ){
		
		info.style.top = 60 + "px";
		
	}else{
		
		info.style.top = event.pageY - 80 + "px";
		
	}
	
	if( event.pageX - offset2 - 30 <= 0 ){
		
		info.style.left = 10 + "px";
		
	}else{
	
		info.style.left = event.pageX - infoWidth - 20 + "px";
	
	}
	
}

/* ####################
	Run once at start
#################### */

getSpreadsheet();