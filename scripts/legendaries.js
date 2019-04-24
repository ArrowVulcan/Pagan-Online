let legendaryItemList = [ 

	Stoneskin = {
		"might": "689",
		"name": "Stoneskin",
		"type": "Ward",
		"quality": "Common",
		"level": "7",
		"dots": "1",
		bonus: {
			"Armor Rating": "248",
			"Evasion Rating": "101",
		},
		bonus2: {
			"Fortitude": "35",
			"Armor Rating": "76",
			"Physical DMG": "15-18",
			"Bonus Health": "24%",
			"Poison DMG Bonus": "30.0%",
		},
		rank: {
			"Required Legacy Rank": "2",
		},
		"description": "A skin of stoneand a heart of steel, the hurt you give and the hurt you feel.",
		"special": "11% chance to stun enemies for 1 second when receiving a hit.",
	},
	
	WillofSvarog = {
		"might": "2.3K",
		"name": "Will of Svarog",
		"type": "One-Handed Staff",
		"quality": "Common",
		"level": "22",
		"dots": "3",
		bonus: {
			"Damage": "120-154",
			"Critical Chance": "5%",
		},
		bonus2: {
			"Fortitude": "110",
			"Spell Damage Bonus": "123.0%",
			"Fire DMG": "55-67",
			"Fire DMG Bonus": "147.5%",
			"Fire Resistance": "24%",
			"Health": "725",
		},
		rank: {
			"Used by:": "Arcane Priest",
			"Required Legacy Rank": "3",
		},
		"description": "Heed the Will of Svarog, Creator of All, Father of the Gods and Lord Beyond the Mists. Kneel before His glory or have your knees shattered in punishment.",
		"special": "0.2% health regen while the resource bar is full, 3% resource regen while at max health.",
	},
	
	Heartbreaker = {
		"might": "947",
		"name": "Heartbreaker",
		"type": "One-Handed Whip",
		"quality": "Common",
		"level": "22",
		"dots": "3",
		bonus: {
			"Damage": "168-206",
			"Critical Chance": "5%",
		},
		bonus2: {
			"Physical DMG": "55-67",
			"Movement Speed Bonus": "15%",
			"Fire DMG": "55-67",
			"Fire Resistance": "24%",
		},
		rank: {
			"Used by:": "Blood Ritualist",
			"Required Legacy Rank": "3",
		},
		"description": "For always remember when you sing your songs and kiss your wives goodbye - the heart, it beats for blood.",
		"special": "",
	},
	
	MountainSplitter = {
		"might": "1.4K",
		"name": "Mountain Splitter",
		"type": "One-Handed Blunt",
		"quality": "Common",
		"level": "11",
		"dots": "2",
		bonus: {
			"Damage": "100-172",
			"Critical Chance": "5%",
		},
		bonus2: {
			"Strenght": "73",
			"Attack Damage Bonus": "82.0%",
			"Cold DMG": "37-45",
			"Cold Resistance": "16%",
			"Health": "483",
		},
		rank: {
			"Used by:": "Protector",
			"Required Legacy Rank": "2",
		},
		"description": "He struck with power. He struck with conviction. Most of all, he struck with the knowledge that nothing will remain after his assault.",
		"special": "When Shield of the Righteous receives damage, heal yourself and all allies in an 8m radius for 15% of the damage received.",
	},
	
	MoranasLonging = {
		"might": "416",
		"name": "Morana's Longing",
		"type": "One-Handed Whip",
		"quality": "Common",
		"level": "5",
		"dots": "1",
		bonus: {
			"Damage": "40-49",
			"Critical Chance": "5%",
		},
		bonus2: {
			"Critical Chance Bonus": "16.3%",
			"Critical Ability DMG": "16.3%",
			"Lightning DMG": "18-22",
		},
		rank: {
			"Used by:": "Blood Ritualist",
			"Required Legacy Rank": "2",
		},
		"description": "Everyone's fate is preordained, the end of their life and their journey to Morana's embrace written by something older than Gods or demons. Those that escape the Goddess of Death are forever haunted by this dissonance. There are weapons built for the exact purpose of hunting these survivors down.",
		"special": "",
	},
	
	Aftershock = {
		"might": "366",
		"name": "Aftershock",
		"type": "Charm",
		"quality": "Common",
		"level": "3",
		"dots": "1",
		bonus: {
			"Armor Rating": "91",
			"Evasion Rating": "41",
		},
		bonus2: {
			"Strength": "24",
			"Physical DMG": "11-14",
			"Cold Resistance": "15%",
			"Lightning Resistance": "15%",
			"Fire DMG": "11-14",
		},
		rank: {
			"Required Legacy Rank": "1",
		},
		"description": "Perun never allowed any item to match his own axxe, but gave blessings to warriors and their gear should they prove their mettle in battle. Sometimes, this was enough.",
		"special": "",
	},
	
	NetherVeil = {
		"might": "1.3K",
		"name": "Nether Veil",
		"type": "Ward",
		"quality": "Common",
		"level": "18",
		"dots": "2",
		bonus: {
			"Armor Rating": "213",
			"Evasion Rating": "492",
		},
		bonus2: {
			"Dexterity": "57",
			"Evasion Rating": "303",
			"Bonus Health": "47%",
			"Critical Chance Bonus": "31.0%",
			"Physical DMG": "0-1",
		},
		rank: {
			"Required Legacy Rank": "3",
		},
		"description": "The Underworld is not a place to be taken lightly, and reaching it without dying requires evading supernatural gatekeeepers. There are tools for this.",
		"special": "Health potions replenish 100% of your resource pool.",
	},
	
	Leviathan = {
		"might": "501",
		"name": "Leviathan",
		"type": "Tome",
		"quality": "Common",
		"level": "17",
		"dots": "2",
		bonus: {
			"Armor Rating": "182",
			"Evasion Rating": "84",
		},
		bonus2: {
			"Armor Rating Bonus": "16.0%",
			"Cold Resistance": "20%",
			"Attack Damage Bonus": "28.0%",
			"Physical DMG Bonus": "30.0%",
			"Poison DMG Bonus": "30.0%",
		},
		rank: {
			"Required Legacy Rank": "3",
		},
		"description": "Here is Leviathan, lawmaker and lawbreaker, talisman of the fortunate and toppler of kingdoms. Dabog claims it as his own... I could be persuaded to sell it.",
		"special": "",
	},
	
	/* ####################
	Artifacts
	#################### */
	
	WitchdoctorsFeather = {
		"name": "Witchdoctor's Feather",
		"type": "Artifact",
		"dots": "1",
		"descriptionArtifact": "A cold? Eat onion. Next! Axe wound? Try this ointment. Next! Bogged down by Shroudspawn? Here. It is the Feather of the Witchdoctor. Don't mention it.",
		"effect": "Movement Speed increased by 50% for 5 seconds after a critical hit.",
	},
	
	PerunsShieldStrap = {
		"name": "Perun's Shield Strap",
		"type": "Artifact",
		"dots": "1",
		"descriptionArtifact": "Glory to the God of Thunder and Storm! Sacred is the earth he walks on, the mug he chugs ale from, his belt, his wineskin, his shield-strap...",
		"effect": "11% chance to stun enemies for 1 second when receiving a hit.",
	},
	
	SvarogsRing = {
		"name": "Svarog's Ring",
		"type": "Artifact",
		"dots": "2",
		"descriptionArtifact": "Craftsmen, artisans, wisemen, sages, druids, shamans and carpenters - all covet the rin that Svarog made, a gift to the poet and warrior that impressed him in a age long ago. It is said that wearing it gives but a small insight into the burden Svarog carries, and that it can drive men and beasts mad.",
		"effect": "After using the primary attack for 6 consecutive hits, gain double damage on the next primary attack or ability.",
	},
	
	PerunsMask = {
		"name": "Perun's Mask",
		"type": "Artifact",
		"dots": "2",
		"descriptionArtifact": "The hammering required to forge this artefact is said to have awakened a long-drowned dragon from thebottom of the ocean. The waves it made as it thrashed about are said to have leveled kingdoms.",
		"effect": "When 2 or more enemies are hit, there is a 50% chance to summoning 8 random lightning strikes in a 6m radius. Each lightning strike deals 100% lightning damage and has an AoE of 2m.",
	},
	
	HornofVeles = {
		"name": "Horn of Veles",
		"type": "Artifact",
		"dots": "2",
		"descriptionArtifact": "When the forest grows over the ruins and abandoned campfires of men. When the wolves sing songs of the hunt. When the trickster moon shines on the carcasses of vanquished foes. This is when you will hear the Horn of Veles, and howl in awe.",
		"effect": "When Shield of the Righteous receives damage, heal yourself and all allies in an 8m radius for 15% of the damage received.",
	},
	
	EvergrowingVine = {
		"name": "Evergrowing Vine",
		"type": "Artifact",
		"dots": "3",
		"descriptionArtifact": "They say this is a cutting of a tree planted at the dawn of time in the pit of the growing world, and that it will never stop sprouting and branching. An unknown disaster is said to befall anyone who prunes it incorrectly.",
		"effect": "When Call of the Ravens is recast, the ravens root all enemies in their path for 3 seconds.",
	},
	
	PerunsGauntlet = {
		"name": "Perun's Gauntlet",
		"type": "Artifact",
		"dots": "2",
		"descriptionArtifact": "The stories say Perun used his gauntlet so that he could fling lightning at his foes, but the power of the gauntlet is far superior to that. They say wearing it is to feel the intensity of the heavens in your thoughts, the rage ofthe storm in your attack, and the shielding might of divine right as you creed.",
		"effect": "20% chance to explode with a frontal wave of divine energy for 150% lightning damage in a 6m line when attacking with the primary attack.",
	},
	
	AstralShieldofVeles = {
		"name": "Astral Shield of Veles",
		"type": "Artifact",
		"dots": "2",
		"descriptionArtifact": "Legend has it that Veles himself wove a net to cast over all the nameless stars, which he then pulled down from the dome of the heavens and reforged into an unbreakable shield. This is not that shield. This is such a clever fake, not even Veles could tell the difference.",
		"effect": "Spawning Shadow-Twin causes a mesmerizing blast, shocking all enemies in a 5 m radius. Shocked enemies take 300% lightning damage and are blinded for 3 seconds.",
	},
	
	CrownoftheMammothKing = {
		"name": "Crown of the Mammoth King",
		"type": "Artifact",
		"dots": "2",
		"descriptionArtifact": "The head that first bore a crown just like this one was said to have never been shorn. Countless scissors and knives where broken in the attempt. The wearer's eyes give off a purplish glint, but this is unrelated.",
		"effect": "After stunning enemies with Orange Tarot of Destiny, the next attack is always a critical strike.",
	},
	
	GobletofStrength = {
		"name": "Goblet of Strength",
		"type": "Artifact",
		"dots": "3",
		"descriptionArtifact": "Amongst the many tales lost to time and ruin was one of a Steel Champion. The story goes that it took three sips of water for this Steel Champion to regain his strength and break free from his bonds. If he were a man of honor or a villain - it is no longer known. The Goblet infused with his strength, however, is no myth.",
		"effect": "Shield of the Righteous has a 50% longer cooldown and 50% more damage absorption.",
	},
	
	MoranasTome = {
		"name": "Morana's Tome",
		"type": "Artifact",
		"dots": "3",
		"descriptionArtifact": "There is wisdom in death, insight in the cold and knowledge in the white death. So speak followers of Morana, and so they write. It takes courage and great mental fortitude to fully decipher Morana's Tome, but to those who do come great rewards. Those who fail are said to be found dead, their minds and faces frozen in horror.",
		"effect": "Attack speed increased by 50% for 4 seconds after a critical hit.",
	},
	
	MoranasHourglass = {
		"name": "Morana's Hourglass",
		"type": "Artifact",
		"dots": "2",
		"descriptionArtifact": "Everyone has their time, and their time is limited. There comes a time when every mortal being has to pay respects to Morana and leave the realm of the living. If stories are to be believed, Morana herself possesed several magic-infused hourglasses to help her decide how much time certain powerful individuals have left. Some say these items are still around - if so, they are exteremely powerful and dangerous.",
		"effect": "Using Shadowstep heals you for 10% of your maximum health.",
	},
	
	StribogsTalisman = {
		"name": "Stribog's Talisman",
		"type": "Artifact",
		"dots": "2",
		"descriptionArtifact": "Some Gods are best forgotten, their shrines demolished, their champions slain. Their talismans... hidden.",
		"effect": "Health potions replenish 100% of your resource pool.",
	},
	
]