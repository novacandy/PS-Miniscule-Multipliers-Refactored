let modInfo = {
	name: "Prestigious Saplings: Miniscule Multipliers Rescripted!",
	author: "pixelium_",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js", "dialogueStuff.js"],

	discordName: "Pixel's Cool Server",
	discordLink: "https://discord.gg/5K4DXpGeU2",
	initialStartPoints: new Decimal(0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1.0",
	name: "The Game",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v1.0</h3><br>
		- Added`

let winText = `Yay! You made it to the end! It's been so fun, I hope to see you again soon!`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	gain = gain.mul(tmp.p.effect)
	gain = gain.mul(buyableEffect("p", 11))
	if (hasUpgrade('p', 11)) gain = gain.mul(1.5)
	if (hasUpgrade('p', 13)) gain = gain.mul(upgradeEffect('p', 13))
	if (hasUpgrade('s', 11)) gain = gain.mul(3)
	if (hasUpgrade('m', 11)) gain = gain.mul(buyableEffect('m', 11))
	if (hasUpgrade('m', 21)) gain = gain.mul(upgradeEffect('m', 21))
	if (hasUpgrade('p', 21)) gain = gain.mul(upgradeEffect('p', 21))
	if (hasUpgrade('p', 22)) gain = gain.mul(upgradeEffect('p', 22))
	if (hasUpgrade('m', 41)) gain = gain.mul(buyableEffect('m', 21))
	gain = gain.mul(tmp.s.trueEnergyEffect)
	if (hasMilestone('s', 10)) gain = gain.mul(2)
	gain = gain.mul(buyableEffect('b', 11))
	if (player.b.activeCharge.includes("points")) gain = gain.mul(clickableEffect('b', 11))
	if (player.points.gte(new Decimal(10))) gain = gain.div(getPointNerf())
	return gain
}

// Calculate point nerf 
function getPointNerf() {
	let nerf = player.points.div(10).pow(1.5)
	return nerf
}

// Calculate global multiplier limit
function getMultiLimit() {
	let limit = new Decimal(5)
	if (hasUpgrade('p', 25)) limit = limit.mul(1.2)
	if (player.b.activeCharge.includes("global")) limit = limit.mul(clickableEffect('b', 21))
	limit = limit.mul(buyableEffect('b', 41))
	limit = limit.mul(buyableEffect('t', 42))
	limit = limit.mul(buyableEffect('t', 22))
	return limit
}


// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
	name: "",
	inDialogue: false,
	dialogueInput: "",
	dialogueStep: 0,
	dialogueStatus: "introduction1",
	currentImage: "resources/mimiHappy.png",
}}

// Display extra things at the top of the page
var displayThings = [
	() => {if (player.points.gte(10)) return "Points are dividing their own gain by " + format(getPointNerf())},
	() => {if (player.points.gte(new Decimal(9e11).mul(buyableEffect('s', 31)))) return "Points are hardcapped at " + format(new Decimal(9e11).mul(buyableEffect('s', 31)))},
	() => {return "All dynamic multipliers are limited to a multiplier of x" + format(getMultiLimit())},
	"Reach 1e12 points to beat the game!"
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("1e12"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}