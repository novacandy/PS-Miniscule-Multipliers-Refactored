addLayer("achievements", {
    name: "achievements",
    symbol: "A",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ffff00",
    resource: "achievements",
    type: "none",
    row: "side",
    effectDescription() {
        return "which are multiplying nothing :)"
    },
    achievements: {
        11: {
            name: "This Is Indeed Miniscule",
            tooltip: "Earn a Prestige Point.",
            done() {return player.p.points.gte(1)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        12: {
            name: "Progression",
            tooltip: "Purchase the <b>Miniscule Boost</b> upgrade.",
            done() {return player.p.upgrades.includes(11)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        13: {
            name: "Order of Magnitude",
            tooltip: "Have 10 prestige points at once.",
            done() {return player.p.points.gte(10)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        14: {
            name: "Into The Fold",
            tooltip: "Have 50 points at once.",
            done() {return player.points.gte(50)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        15: {
            name: "Generic-ish Reset",
            tooltip: "Earn a Sacrifice Point.",
            done() {return player.s.points.gte(1)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        21: {
            name: "Attracted",
            tooltip: "Begin generating magnets.",
            done() {return hasMilestone('s', 0)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        22: {
            name: "Maximized",
            tooltip: "Have a x5 multiplier from <b>Basic Multiplier</b>.",
            done() {return buyableEffect('p', 11).gte(5)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        23: {
            name: "Useless Currency?",
            tooltip: "Have 100 sacrificial energy at once.",
            done() {return player.s.energy.gte(100)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        24: {
            name: "Maximized, Again",
            tooltip: "Have a x5 multiplier from <b>Attract</b>.",
            done() {return buyableEffect('m', 11).gte(5)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        25: {
            name: "Super Attracted",
            tooltip: "Begin generating Super Magnets.",
            done() {return player.m.superMagnets.gte(1)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        31: {
            name: "Or Is It?",
            tooltip: "Perform a True Sacrifice.",
            done() {return getBuyableAmount('s', 21).gte(1)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        32: {
            name: "Next Level",
            tooltip: "Reach True Sacrifice Level 2",
            done() {return getBuyableAmount('s', 21).gte(2)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        33: {
            name: "This Currency Sucks",
            tooltip: "Have a x2 multiplier from True sacrificial energy.",
            done() {return tmp.s.trueEnergyEffect.gte(2)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        34: {
            name: "Where Is That Last Upgrade...",
            tooltip: "Have 500,000 prestige points at once.",
            done() {return player.p.points.gte(500000)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        35: {
            name: "Say Hello!",
            tooltip: "Meet Mimi!",
            done() {return getBuyableAmount('s', 21).gte(3)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        41: {
            name: "Brick By Brick",
            tooltip: "Earn Brick Energy.",
            done() {return player.b.points.gte(1)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        42: {
            name: "Of Course There's A Limit",
            tooltip: "Reach the brick limit.",
            done() {return player.b.bricks.eq(tmp.b.brickLimit)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        43: {
            name: "Charging Brick?",
            tooltip: "Activate Brick Charge.",
            done() {return player.b.activeCharge.length > 0},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        44: {
            name: "Super Limited",
            tooltip: "Unlock Super Bricks.",
            done() {return hasMilestone('b', 2)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        45: {
            name: "In What Way Does This Relate To Multiplying",
            tooltip: "Earn Tire Energy.",
            done() {return player.t.points.gte(1)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        51: {
            name: "Super This, Super That",
            tooltip: "Earn Super Tire Energy.",
            done() {return player.t.superTireEnergy.gte(1)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        52: {
            name: "The Scaling Is Insane",
            tooltip: "Reach 1e1000 tires.",
            done() {return player.t.tires.gte("1e1000")},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        53: {
            name: "Was There Ever A Point?",
            tooltip: "Reach 1 million True Sacrifice energy.",
            done() {return player.s.trueEnergy.gte(1e6)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        54: {
            name: "This Is Very Miniscule, In Fact",
            tooltip: "Unlock the Miniscule Multiplier.",
            done() {return hasMilestone('s', 19) && hasMilestone('s', 20) && hasMilestone('t', 3)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
        55: {
            name: "Meet You Again, Multipliers!",
            tooltip: "Beat the game.",
            done() {return player.points.gte(1e12)},
            onComplete() {player.achievements.points = player.achievements.points.add(1)},
            unlocked() {return true}
        },
    },
    layerShown(){return true},
    tabFormat: [
        "main-display",
        "blank",
        "achievements"
    ]
})

addLayer("p", { 
    name: "prestige",
    symbol: "P",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        resetTime: 0,

        lastUpgradeUnlocked: false

    }},
    color: "#13bab5",
    requires: new Decimal(10),
    exponent: 0.5,
    resource: "prestige points",
    baseResource: "points",
    baseAmount() {return player.points},
    type: "normal",
    gainMult() {
        mult = new Decimal(1)
        if (hasUpgrade('p', 12)) mult = mult.mul(1.5)
        mult = mult.mul(buyableEffect('p', 12))
        if (hasUpgrade('s', 12)) mult = mult.mul(2)
        mult = mult.mul(buyableEffect('s', 12))
        if (hasUpgrade('m', 22)) mult = mult.mul(upgradeEffect('m', 22))
        mult = mult.mul(tmp.s.trueEnergyEffect)
    	if (hasMilestone('s', 10)) mult = mult.mul(2)
        mult = mult.mul(buyableEffect('b', 11))
        if (hasUpgrade('m', 42)) mult = mult.mul(buyableEffect('m', 21))
        mult = mult.mul(buyableEffect('t', 41))
        if (player.b.activeCharge.includes("prestige")) mult = mult.mul(clickableEffect('b', 12))
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    softcap() {
        if (!hasMilestone('s', 17)) {
            return new Decimal(200).mul(getMultiLimit())
        } else {
            return new Decimal(1000).div(new Decimal(5).pow(1.5)).mul(getMultiLimit().pow(1.5))
        }},
    softcapPower: new Decimal(1/3),
    passiveGeneration() {if (hasMilestone('s', 5)) {return new Decimal(1).div(new Decimal(Math.max(1, Math.max(player.p.resetTime - 60, 0) ** 0.75))).max(0)} else {return new Decimal(0)}},
    row: 0,
    upgrades: {
        11: {
            title: "Miniscule Boost",
            description() {return "Multiply point gain by x1.5."},
            cost: new Decimal(5),
            unlocked() {return true}
        },
        12: {
            title: "Decent Upgrades",
            description() {return "Multiply prestige point gain by x1.5, unlock a new buyable."},
            cost: new Decimal(10),
            unlocked() {return hasUpgrade('p', 11)}
        },
        13: {
            title: "Sacrificial Development",
            description() {return "Unlock a new layer. Points multiply themselves at a reduced rate.\nEffect: x" + format(this.effect())},
            cost: new Decimal(25),
            effect() {
                let effect = player.points.add(1).log10().div(2).add(1)
                return effect.min(getMultiLimit())
            },
            unlocked() {return hasUpgrade('p', 12)}
        },
        14: {
            title: "Faster Magnets",
            description() {return "Prestige points multiply magnets.\nEffect: x" + format(this.effect())},
            cost: new Decimal(1000),
            effect() {
                let effect = player.p.points.add(1).log10().div(1.5).add(1)
                return effect.min(getMultiLimit())
            },
            unlocked() {return hasMilestone('s', 2) && hasUpgrade('p', 13)}
        },
        15: {
            title: "Truly Energized",
            description() {return "Sacrificial energy multiplies points.\nEffect: x" + format(this.effect())},
            cost: new Decimal(1500),
            effect() {
                let effect = player.s.energy.add(1).log10().add(1)
                return effect.min(getMultiLimit())
            },
            unlocked() {return hasMilestone('s', 2) && hasUpgrade('p', 14)}
        },
        21: {
            title: "Limit Breaker",
            description() {return "Prestige points past 10,000 multiply points.\nEffect: x" + format(this.effect())},
            cost: new Decimal(100000),
            effect() {
                let effect = player.p.points.div(10000).max(1).log10().add(1)
                return effect.min(getMultiLimit())
            },
            unlocked() {return hasMilestone('s', 5)}
        },
        22: {
            title: "Further Into The Depths",
            description() {return "Sacrifice points multiply points.\nEffect: x" + format(this.effect())},
            cost: new Decimal(125000),
            effect() {
                let effect = player.s.points.add(1).log(9).add(1)
                return effect.min(getMultiLimit())
            },
            unlocked() {return hasMilestone('s', 5) && hasUpgrade('p', 21)}
        },
        23: {
            title: "Super Attraction",
            description() {return "Super magnets multiply points. \nEffect: x" + format(this.effect())},
            cost: new Decimal(150000),
            effect() {
                let effect = player.m.superMagnets.add(1).log(5).div(2).add(1)
                return effect.min(getMultiLimit())
            },
            unlocked() {return hasMilestone('s', 5) && hasUpgrade('p', 22)}
        },
        24: {
            title: "Energy Synergy Matrix",
            description() {return "Magnets multiply super magnet generation. \nEffect: x" + format(this.effect())},
            cost: new Decimal(200000),
            effect() {
                let effect = player.m.points.add(1).log(10).div(2).add(1)
                return effect.min(getMultiLimit())
            },
            unlocked() {return hasMilestone('s', 5) && hasUpgrade('p', 23)}
        },
        25: {
            title: "Millionaire's Fortune",
            description() {return "Unlock a new layer. Multiply global multiplier limit by 1.2. This upgrade is kept permanently."},
            cost: new Decimal(1000000),
            unlocked() {return player.p.lastUpgradeUnlocked || hasUpgrade('p', 25)}
        }
    },
    effect() {
        let effect = player.p.points.add(1).log(10).add(1)
        return effect.min(getMultiLimit())
    },
    effectDescription() {
        return "which are multiplying points by " + format(tmp.p.effect)
    },
    buyables: {
        11: {
            title: "Basic Multiplier",
            display() { return "Multiplying points by x" + format(buyableEffect('p', this.id)) + "\nCost: " + format(this.cost()) + " prestige points"},
            canAfford() { return player[this.layer].points.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('p', this.id).mul(0.5).pow(0.5).plus(1).min(getMultiLimit())
            },
            cost() {
                return getBuyableAmount('p', this.id).plus(1).pow(1.25).floor()
            }
        },
        12: {
            title: "Prestige Multiplier",
            display() { return "Multiplying prestige points by x" + format(buyableEffect('p', this.id)) + "\nCost: " + format(this.cost()) + " prestige points"},
            canAfford() { return player[this.layer].points.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('p', this.id).mul(0.2).pow(0.3).plus(1).min(getMultiLimit())
            },
            cost() {
                return getBuyableAmount('p', this.id).plus(1).pow(1.1).mul(5).floor()
            },
            unlocked() {return hasUpgrade('p', 12)}
        },
    },
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    doReset(resettingLayer) {
        if (layers[resettingLayer].row <= this.row) return;

        let keep = [];
        if (hasMilestone('s', 4) && !(layers[resettingLayer].row == 2)) keep.push("upgrades")
        if (hasMilestone('s', 13)) keep.push("upgrades")
        if (hasMilestone('s', 10) && !(layers[resettingLayer].row == 2)) keep.push("buyables")
        if (hasMilestone('s', 13)) keep.push("buyables")
        let keepLastUpg = false
        if (hasUpgrade('p', 25)) keepLastUpg = true

        layerDataReset(this.layer, keep);
      
        if (keepLastUpg && !player.p.upgrades.includes(25)) player.p.upgrades.push(25)
    },
    layerShown(){return true},
    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",
        ["display-text", () => {if (getResetGain('p').gte(new Decimal(200).mul(getMultiLimit()))) {return "Prestige point gain past <h2 style='color:#13bab5;text-shadow:#13bab5 0px 0px 10px;'>" + format(tmp.p.softcap) + "</h2> (increased by global multiplier limit) is cube rooted"} else {return ""}}],
        ["display-text", () => {if (hasMilestone('s', 5)) {return "Passive prestige point generation diminishes heavily after one minute passes since your last Prestige"}}],
        "blank",
        "buyables",
        "blank",
        "upgrades"
    ],
    update(diff) {
        if (player.points.gte(new Decimal(9e11).mul(buyableEffect('s', 31)))) player.points = new Decimal(9e11).mul(buyableEffect('s', 31))
    }
})

addLayer("s", {
    name: "sacrifice",
    symbol: "S",
    position: 0,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        energy: new Decimal(0),
        trueEnergy: new Decimal(0),
        trueResetTime: 0,
        best: new Decimal(0),

        // dialogue stuff
        dialogueInput: "",
        dialogueStep: 0,
        dialogueStatus: "introduction1",
        currentImage: "resources/mimiHappy.png",
        hasReadDialogue: true

    }},
    color: "#8513baff",
    requires: new Decimal(100),
    exponent: 0.5,
    resource: "sacrifice points",
    baseResource: "points",
    baseAmount() {return player.points},
    type: "normal",
    branches: ['p'],
    gainMult() {
        mult = new Decimal(1)
        if (hasUpgrade('s', 13)) mult = mult.mul(3)
        if (hasUpgrade('s', 21)) mult = mult.mul(upgradeEffect('s', 21))
        if (hasUpgrade('m', 14)) mult = mult.mul(buyableEffect('m', 11))
        mult = mult.mul(buyableEffect('s', 13))
        mult = mult.mul(tmp.s.trueEnergyEffect)
        if (hasMilestone('s', 10)) mult = mult.mul(2)
        if (hasUpgrade('m', 24)) mult = mult.mul(upgradeEffect('m', 24))
        if (hasUpgrade('m', 44)) mult = mult.mul(buyableEffect('m', 21))
        if (player.b.activeCharge.includes("sacrifice")) mult = mult.mul(clickableEffect('b', 14))
        mult = mult.mul(buyableEffect('b', 33))
        mult = mult.mul(buyableEffect('t', 43))
        if (hasMilestone('s', 18)) mult = mult.mul(tmp.s.milestones[18].effect[0])
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    softcap() {
        if (!hasMilestone('s', 17)) {
            return new Decimal(200).mul(getMultiLimit())
        } else {
            return new Decimal(1000).div(new Decimal(5).pow(1.5)).mul(getMultiLimit().pow(1.5))
        }
    },
    softcapPower: new Decimal(1/3),
    passiveGeneration() {if (hasMilestone('s', 10)) {return new Decimal(1).div(new Decimal(Math.max(1, Math.max(player.s.trueResetTime - 300, 0) ** 0.75))).max(0)} else {return new Decimal(0)}},
    energyGain() {
        let gain = player.p.points.pow(0.5)
        if (hasUpgrade('s', 14)) gain = gain.mul(2)
        if (hasUpgrade('m', 15)) gain = gain.mul(buyableEffect('m', 11))
        if (hasUpgrade('m', 43)) gain = gain.mul(buyableEffect('m', 21))
        gain = gain.mul(tmp.s.trueEnergyEffect)
        gain = gain.mul(buyableEffect('b', 11))
        if (gain.gte(10000)) gain = new Decimal(10000).mul(gain.max(10000).sub(10000).pow(0.1))
        if (player.b.activeCharge.includes("energy")) gain = gain.mul(clickableEffect('b', 15))
        gain = gain.mul(buyableEffect('b', 33))
        if (hasMilestone('s', 14)) gain = gain.mul(tmp.s.milestones[14].effect)
        gain = gain.mul(buyableEffect('t', 12))
        if (hasMilestone('s', 18)) gain = gain.mul(tmp.s.milestones[18].effect[1])
        return gain.floor() 
    },
    trueEnergyEffect() {
        let effect = player.s.trueEnergy.add(1).log(2).div(4).add(1)
        return effect.min(getMultiLimit())
    },
    prestigeButtonText() {
        let text = "<b>+" + format(tmp.s.resetGain, 0) + "</b> sacrifice points and <b>+" + format(tmp.s.energyGain, 0) + "</b> sacrificial energy"
        if (!(getResetGain('s').gte(100) || player.s.points.gte(1000))) {
            text = "Reset for " + text
            text += "<br><br>Next sacrifice point at " + format(tmp.s.nextAtDisp) + " points"
        }
        return text 
    },
    onPrestige() {
        player.s.energy = player.s.energy.add(tmp.s.energyGain)
    },
    row: 1,
    infoboxes: {
        mimi: {
            title: "Mimi",
            body() {return " \
                    <br>\
                    <br><img src=" + player.s.currentImage + " width='240px' height='240px'><br>\
                    <br>\
                    <br><p>" + renderDialogue(player.s.dialogueStatus, Math.floor(player.s.dialogueStep / 1.2)) + "</p><br>\
                    <p>" + trueDialogue[player.s.dialogueStatus].command + "</p><br>\
            "},
        },
    },
    upgrades: {
        11: {
            title: "Pointy",
            description() {return "Multiply point gain by x3."},
            cost: new Decimal(1),
        },
        12: {
            title: "Prestigious",
            description() {return "Multiply prestige point gain by x2."},
            cost: new Decimal(1),
        },
        13: {
            title: "Sacrificial",
            description() {return "Multiply sacrifice point gain by x3."},
            cost: new Decimal(1),
        },
        14: {
            title: "Energized",
            description() {return "Multiply sacrificial energy gain by x2."},
            cost: new Decimal(1),
        },
        21: {
            title: "Further Development",
            description() {return "Sacrificial energy multiplies sacrifice points.\nEffect: x" + format(this.effect())},
            cost: new Decimal(25),
            effect() {
                let effect = player.s.energy.add(1).log10().div(2).add(1)
                return effect.min(getMultiLimit())
            },
            unlocked() {return hasMilestone('s', 3)}
        },
        22: {
            title: "Stronger Attraction",
            description() {return "Double <b>Attract</b>'s amount in its effect."},
            cost: new Decimal(50),
            unlocked() {return hasUpgrade('s', 21)}
        },
        23: {
            title: "Stronger Attraction",
            description() {return "Magnets multiply points. Effect:\nx" + format(this.effect())},
            cost: new Decimal(100),
            effect() {
                let effect = player.m.points.add(1).log10().div(1.5).add(1)
                return effect.min(getMultiLimit())
            },
            unlocked() {return hasUpgrade('s', 22)}
        },
        24: {
            title: "Self Pride",
            description() {return "Prestige points multiply themselves at a reduced rate.\nEffect: x" + format(this.effect())},
            cost: new Decimal(200),
            effect() {
                let effect = player.p.points.add(1).log10().div(4).add(1)
                return effect.min(getMultiLimit())
            },
            unlocked() {return hasUpgrade('s', 23)}
        }
    },
    effect() {
        let effect = player.s.points.add(1).log(10).add(1)
        return effect.min(getMultiLimit())
    },
    effectDescription() {
        return "which are multiplying prestige points by " + format(tmp.s.effect)
    },
    buyables: {
        11: {
            title: "Sacrificial Magnet Multiplier",
            display() { return "Multiplying magnet generation by x" + format(buyableEffect('s', this.id)) + "\nCost: " + format(this.cost()) + " sacrifice points"},
            canAfford() { return player[this.layer].points.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('s', this.id).mul(1.5).pow(0.5).plus(1).min(getMultiLimit())
            },
            cost() {
                return getBuyableAmount('s', this.id).plus(1).pow(1.1).mul(10).floor()
            },
            unlocked() {return hasMilestone('s', 1)}
        },
        12: {
            title: "Sacrificial Prestige Multiplier",
            display() { return "Multiplying prestige points by x" + format(buyableEffect('s', this.id)) + "\nCost: " + format(this.cost()) + " sacrifice points"},
            canAfford() { return player[this.layer].points.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('s', this.id).mul(1.5).pow(0.75).plus(1).min(getMultiLimit())
            },
            cost() {
                return getBuyableAmount('s', this.id).div(2).plus(1).pow(1.15).mul(10).floor()
            },
            unlocked() {return hasMilestone('s', 2)}
        },
        13: {
            title: "Sacrificial Multiplier",
            display() { return "Multiplying sacrifice points by x" + format(buyableEffect('s', this.id)) + "\nCost: " + format(this.cost()) + " sacrifice points"},
            canAfford() { return player[this.layer].points.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('s', this.id).mul(1.5).pow(0.9).plus(1).min(getMultiLimit())
            },
            cost() {
                return getBuyableAmount('s', this.id).div(2).plus(1).pow(1.1).mul(50).floor()
            },
            unlocked() {return hasMilestone('s', 4)}
        },
        21: {
            title: "Perform True Sacrifice", // Buyable amount for this is current TSAL level
            display() { 
                if (player.s.points.gte(10000)) {
                    return "Force a Sacrifice reset and lose all prestige, magnet, super magnet, and sacrifice upgrades, sacrifice points, sacrificial energy, and sacrifice buyable levels for <h3>" + format(this.effect()) + "</h3> true sacrificial energy\nReach <h3>" + format(this.cost()) + "</h3> sacrifice points to reach the next True Sacrifice Level"
                } else {
                    return "You need at least 10,000 sacrifice points to perform a True Sacrifice"
                }
            },
            canAfford() { return player.s.points.gte(10000) },
            buy() {
                if (player.s.points.gte(this.cost())) setBuyableAmount('s', 21, getBuyableAmount('s', 21).add(1))
                player.s.trueEnergy = player.s.trueEnergy.add(this.effect())
                doReset('s')   
                player.s.points = new Decimal(0)
                player.s.energy = new Decimal(0)
                let keepLastUpg = false
                if (hasUpgrade('p', 25)) keepLastUpg = true
                if (!hasMilestone('s', 13)) player.p.upgrades = []
                if (!hasMilestone('s', 13)) player.m.upgrades = []
                if (!hasMilestone('t', 0)) player.s.upgrades = []
                if (keepLastUpg) player.p.upgrades.push(25)
                player.b.resetTime = 0
                player.s.trueResetTime = 0
                if (!hasMilestone('s', 13)) setBuyableAmount('p', 11, new Decimal(0))
                if (!hasMilestone('s', 13)) setBuyableAmount('p', 12, new Decimal(0))
                if (!hasMilestone('s', 13)) setBuyableAmount('m', 11, new Decimal(0))
                if (!hasMilestone('t', 0)) setBuyableAmount('m', 12, new Decimal(0))
                if (!hasMilestone('t', 0)) setBuyableAmount('m', 21, new Decimal(0))
                if (!hasMilestone('t', 0)) setBuyableAmount('m', 22, new Decimal(0))
                if (!hasMilestone('s', 16)) setBuyableAmount('s', 11, new Decimal(0))
                if (!hasMilestone('s', 16)) setBuyableAmount('s', 12, new Decimal(0))
                if (!hasMilestone('s', 16)) setBuyableAmount('s', 13, new Decimal(0))
            },
            effect() { // TSE gain
                let gain = player.s.points.div(10000).pow(0.5).pow(getBuyableAmount('s', 21).log10().add(1))
                gain = gain.mul(buyableEffect('b', 31))
                return gain
            },
            cost() { // TSAL level req
                return new Decimal(10000).mul(new Decimal(10).pow(getBuyableAmount('s', 21)))
            },
            style: () => {
                if (player.s.points.gte(10000)) {return {
                    "width": "250px",
                    "height": "250px",
                    "background": "#590944",
                }} else {return {
                    "width": "250px",
                    "height": "250px",
                    "background": "#bf8f8f"
                }}
            },
        },
        31: {
            title: "The Miniscule Multiplier",
            display() { return "Multiplying point hardcap by x" + format(buyableEffect('s', this.id)) + "\nCost: " + format(this.cost()) + " true sacrifice energy"},
            canAfford() { return player[this.layer].trueEnergy.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].trueEnergy = player[this.layer].trueEnergy.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('s', this.id).mul(0.01).add(1)
            },
            cost() {
                return new Decimal(1000000).mul(getBuyableAmount('s', this.id).mul(0.5).add(1)).mul(new Decimal(1.1).pow(getBuyableAmount('s', this.id))).floor()
            },
            unlocked() {return hasMilestone('s', 1)},
            style: () => {
                if (tmp.s.buyables[31].canAfford) {return {
                    "width": "250px",
                    "height": "250px",
                    "background": "#590944",
                }} else {return {
                    "width": "250px",
                    "height": "250px",
                    "background": "#bf8f8f"
                }}
            },
        },
    },
    milestones: {
        0: {
            requirementDescription: "25 sacrificial energy",
            effectDescription: "Unlock a new layer.",
            done() { return player.s.energy.gte(25) }
        },
        1: {
            requirementDescription: "50 sacrificial energy",
            effectDescription: "Unlock the first sacrifice buyable.",
            done() { return player.s.energy.gte(50) }
        },
        2: {
            requirementDescription: "200 sacrificial energy",
            effectDescription: "Unlock the second sacrifice buyable and more row 1 upgrades.",
            done() { return player.s.energy.gte(200) },
            unlocked() {return hasMilestone('s', 1)}
        },
        3: {
            requirementDescription: "500 sacrificial energy",
            effectDescription: "Unlock more sacrifice upgrades. Keep magnet upgrades on sacrifice.",
            done() { return player.s.energy.gte(500) },
            unlocked() {return hasMilestone('s', 1)}
        },
        4: {
            requirementDescription: "1,000 sacrificial energy",
            effectDescription: "Unlock the final sacrifice buyable, keep prestige upgrades on sacrifice, and unlock more magnet upgrades.",
            done() { return player.s.energy.gte(1000) },
            unlocked() {return hasMilestone('s', 1)}
        },
        5: {
            requirementDescription: "2,500 sacrificial energy",
            effectDescription: "Unlock more prestige upgrades. Passively generate prestige points per second.",
            done() { return player.s.energy.gte(2500) },
            unlocked() {return hasMilestone('s', 4)}
        },
        6: {
            requirementDescription: "10,000 sacrificial energy",
            effectDescription: "Unlock Super Magnets (in the Magnet layer) and more magnet upgrades.",
            done() { return player.s.energy.gte(10000) },
            unlocked() {return hasMilestone('s', 4)}
        },
        7: {
            requirementDescription: "100,000 sacrificial energy",
            effectDescription: "Unlock True Sacrifice.",
            done() { return player.s.energy.gte(100000) },
            unlocked() {return hasMilestone('s', 4)}
        },
        8: {
            requirementDescription: "1,000,000 sacrificial energy",
            effectDescription() {return "Earn a multiplier to brick generation based on point generation. Currently: x" + format(this.effect())},
            done() { return player.s.energy.gte(10000000) },
            unlocked() {return hasMilestone('s', 7)},
            effect() {
                return getPointGen().add(1).log(5).add(1).min(getMultiLimit())
            }
        },
        9: {
            requirementDescription: "10,000,000 sacrificial energy",
            effectDescription: "Attract+ applies to bricks.",
            done() { return player.s.energy.gte(10000000) },
            unlocked() {return hasMilestone('s', 7)}
        },
        10: {
            requirementDescription: "True Sacrifice Level 1",
            effectDescription: "Double point, prestige point, and sacrifice point gain, passively generate sacrifice points per second, and keep prestige buyable levels on Sacrifice (will still be reset on True Sacrifice).",
            done() { return getBuyableAmount('s', 21).gte(1)},
        },
        11: {
            requirementDescription: "True Sacrifice Level 2",
            effectDescription: "Unlock two more magnet and super magnet upgrades. Keep magnet buyable levels on Sacrifice (will still be reset on True Sacrifice).",
            done() { return getBuyableAmount('s', 21).gte(2)},
        },
        12: {
            requirementDescription: "True Sacrifice Level 3",
            effectDescription: "Meet Mimi!",
            done() { return getBuyableAmount('s', 21).gte(3)},
        },
        13: {
            requirementDescription: "True Sacrifice Level 4",
            effectDescription: "Row 3 resets and True Sacrifice no longer reset Row 1 upgrades. Greatly strengthen brick generation from brick energy, and brick generation is affected by Attract.",
            done() { return getBuyableAmount('s', 21).gte(4)},
            unlocked() {return hasMilestone('s', 12)}
        },
        14: {
            requirementDescription: "True Sacrifice Level 5",
            effectDescription() {return "Unlock the final layer and greatly increase sacrificial energy gain based on True Sacrifice Level. Currently: x" + format(this.effect())},
            done() { return getBuyableAmount('s', 21).gte(5)},
            unlocked() {return hasMilestone('s', 12)},
            effect() {
                return getBuyableAmount('s', 21).pow(1.25).min(getMultiLimit())
            }
        },
        15: {
            requirementDescription: "1e9 sacrificial energy",
            effectDescription: "You can activate two additional Brick Charges.",
            done() { return player.s.energy.gte(1e9)},
            unlocked() {return hasMilestone('s', 14)}
        },
        16: {
            requirementDescription: "1e10 sacrificial energy and 1e10 tires",
            effectDescription: "Unlock Super Tires. Row 3 resets and True Sacrifice no longer reset Sacrifice buyables.",
            done() { return player.s.energy.gte(1e10) && player.t.tires.gte(1e10)},
            unlocked() {return hasMilestone('s', 14)}
        },
        17: {
            requirementDescription: "True Sacrifice Level 6",
            effectDescription() {return "Improve the prestige/sacrifice softcap beginning formula, and True Sacrificial Energy affects brick energy, bricks, and tire energy at half the rate. Currently: x" + format(this.effect())},
            done() { return getBuyableAmount('s', 21).gte(6)},
            effect() {
                return tmp.s.trueEnergyEffect.div(2)
            },
            unlocked() {return hasMilestone('s', 16)}
        },
        18: {
            requirementDescription: "1e11 sacrificial energy and 1e1000 tires",
            effectDescription() {return "Multipliers to sacrificial energy apply to sacrifice points at a heavily reduced rate, and vice versa. Currently: x" + format(this.effect()[0]) + " SP, x" + format(this.effect()[1]) + " SE"},
            done() { return player.s.energy.gte(1e11) && player.t.tires.gte("1e1000")},
            effect() {
                let effect1 = tmp.s.energyGain.div(player.p.points.pow(0.5).add(1)).add(1).log(2).add(1)
                let effect2 = tmp.s.gainMult.add(1).log(2).add(1)
                return [effect1.min(getMultiLimit()), effect2.min(getMultiLimit())]
            },
            unlocked() {return hasMilestone('s', 14)}
        }, 
        19: {
            requirementDescription: "1e12 sacrificial energy",
            effectDescription() {return "Keep levels of <b>Tired</b> on Super Tire Energy reset. This is one of the requirements for unlocking the Miniscule Multiplier."},
            done() { return player.s.energy.gte(1e12)},
            unlocked() {return hasMilestone('s', 17)}
        },
        20: {
            requirementDescription: "True Sacrifice Level 7",
            effectDescription() {return "Multiply super tire base by 1.13636... (increase by 0.15). This is one of the requirements for unlocking the Miniscule Multiplier."},
            done() { return getBuyableAmount('s', 21).gte(7)},
            unlocked() {return hasMilestone('s', 16)}
        }
    },
    hotkeys: [
        {key: "s", description: "S: Reset for sacrifice points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade('p', 13) || player.s.unlocked},
    clickables: {
        11: {
            title: ">",
            onClick() {
                trueDialogue[player.s.dialogueStatus].onSend()
            },
            canClick() {return trueDialogue[player.s.dialogueStatus].canSend()},
        }
    },
    microtabs: {
        sacrifice: {
            "Main": {
                content: [
                    "blank",
                    ["buyables", [1]],
                    "blank",
                    "upgrades"
                ],
            },
            "Sacrificial Milestones": {
                content: [
                    "blank",
                    ["display-text", () => {return `You have <h2 style='color:#8513ba;text-shadow:#8513ba 0px 0px 10px;'>${format(player.s.energy, 0)}</h2> sacrificial energy, earned from converting prestige points on sacrifice`}],
                    "blank",
                    ["display-text", () => {return "Base energy gain is sqrt(prestige points)"}],
                    "blank",
                    ["milestones", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 18, 19]]
                ],
            },
            "True Sacrifice": {
                unlocked() {return hasMilestone('s', 7)},
                content: [
                    "blank",
                    ["display-text", "All new sacrifice content past this point and sacrifice milestones are kept on row 3 resets"],
                    "blank",
                    ["buyables", [2]],
                    "blank",
                    ["display-text", () => {return "You have <h2 style='color:#590944;text-shadow:#590944 0px 0px 10px;'>" + format(player.s.trueEnergy) + "</h2> true sacrificial energy, multiplying all row 1 and 2 currencies (except itself) by " + format(tmp.s.trueEnergyEffect)}],
                    "blank",
                    ["display-text", () => {return "Your current True Sacrifice Level is <h2 style='color:#590944;text-shadow:#590944 0px 0px 10px;'>" + format(getBuyableAmount('s', 21), 0) + "</h2>"}],
                    "blank",
                    ["milestones", [10, 11, 12, 13, 14, 17, 20]]                
                ],
                buttonStyle() {return {
                    "border-color": "#590944"
                }}
            },
            "Mimi": {
                unlocked() {return hasMilestone('s', 12)},
                content: [
                    "blank",
                    ["infobox", "mimi"],
                    ['text-input', 'dialogueInput', { 
                        color: "var(--color)", 
                        width: "400px",
                        "font-family": "Inconsolata, monospace",
                        "font-size": "16px",
                        border: "2px solid #ffffff17", 
                        background: "var(--background)", 
                    }],
                    "clickables",
                    "blank",
                ],
                buttonStyle() {return {
                    "border-color": "#590944"
                }}
            },
            "The Miniscule Multiplier": {
                unlocked() {return hasMilestone('s', 19) && hasMilestone('s', 20) && hasMilestone('t', 3)},
                content: [
                    "blank",
                    ["buyables", [3]],
                    "blank",
                ],
                buttonStyle() {return {
                    "border-color": "#590944"
                }}
            }
        },
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",
        ["display-text", () => {if (getResetGain('s').gte(new Decimal(200).mul(getMultiLimit()))) {return "Sacrifice point gain past <h2 style='color:#8513baff;text-shadow:#8513baff 0px 0px 10px;'>" + format(tmp.s.softcap) + "</h2> (increased by global multiplier limit) is cube rooted"} else {return ""}}],
        ["display-text", () => {if (tmp.s.energyGain.gte(new Decimal(10000))) {return "Sacrificial energy gain past <h2 style='color:#8513baff;text-shadow:#8513baff 0px 0px 10px;'>10,000</h2> is tenth rooted"} else {return ""}}],
        ["display-text", () => {if (hasMilestone('s', 11)) {return "Passive sacrifice point generation diminishes heavily after five minutes pass since your last True Sacrifice or row 3 reset"}}],
        "blank",
        ["microtabs", "sacrifice"]
    ],
    doReset(resettingLayer) {
        if (layers[resettingLayer].row <= this.row) return;

        let keep = ["milestones"];
        let keepTrueEnergy = player.s.trueEnergy
        let keepTrueLevel = getBuyableAmount('s', 21)

        if (hasMilestone('t', 0)) keep.push("upgrades")
        if (hasMilestone('s', 16)) keep.push("buyables")

        layerDataReset(this.layer, keep);

        player.s.trueEnergy = keepTrueEnergy
        setBuyableAmount('s', 21, keepTrueLevel)
    },
    update(diff) {
        if (player.s.dialogueStep < trueDialogue[player.s.dialogueStatus].mimiText().length * 1.2) {
            player.s.dialogueStep++
        }
        player.s.trueResetTime += diff
        triggerDialogues()
    }
})

addLayer("m", {
    name: "magnets",
    symbol: "M",
    position: 1,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        superMagnets: new Decimal(0),
    }},
    color: "#ba1313ff",
    exponent: 0,
    resource: "magnets",
    type: "none",
    branches: ['s'],
    requires: new Decimal(1),
    baseAmount() {return player.points},
    directMult() {
        mult = new Decimal(1)
        mult = mult.mul(buyableEffect('m', 12))
        mult = mult.mul(buyableEffect('s', 11))
        if (hasUpgrade('p', 14)) mult = mult.mul(upgradeEffect('p', 14))
        if (hasUpgrade('m', 13)) mult = mult.mul(buyableEffect('m', 11))
        if (hasUpgrade('m', 23)) mult = mult.mul(buyableEffect('m', 11))
        mult = mult.mul(tmp.s.trueEnergyEffect)
        if (hasUpgrade('m', 45)) mult = mult.mul(buyableEffect('m', 21))
        if (player.b.activeCharge.includes("magnets")) mult = mult.mul(clickableEffect('b', 13))
        return mult
    },
    superMagnetGain() {
        gain = tmp.m.directMult.div(60)
        if (hasUpgrade('p', 24)) gain = gain.mul(upgradeEffect('p', 24))
        gain = gain.mul(tmp.s.trueEnergyEffect)
        gain = gain.mul(buyableEffect('b', 11))
        return gain
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    upgrades: {
        11: {
            title: "Magnetic Points",
            description: "<b>Attract</b> multiplies points.",
            cost: new Decimal(50)
        },
        12: {
            title: "Magnetic Prestige",
            description: "<b>Attract</b> multiplies prestige points.",
            cost: new Decimal(250),
            unlocked() {return hasMilestone('s', 2) && hasUpgrade('m', 11)}
        },
        13: {
            title: "Magnetic",
            description: "<b>Attract</b> multiplies magnets.",
            cost: new Decimal(1000),
            unlocked() {return hasMilestone('s', 4) && hasUpgrade('m', 12)}
        },
        14: {
            title: "Magnetic Sacrifice",
            description: "<b>Attract</b> multiplies sacrifice points.",
            cost: new Decimal(1500),
            unlocked() {return hasMilestone('s', 4) && hasUpgrade('m', 13)}
        },
        15: {
            title: "Magnetic Energy",
            description: "<b>Attract</b> multiplies sacrificial energy.",
            cost: new Decimal(4000),
            unlocked() {return hasMilestone('s', 4) && hasUpgrade('m', 14)}
        },
        21: {
            title: "Magnetic Points II",
            description() {return "<b>Attract</b> multiplies points again, but at a slightly reduced rate. Effect: x" + format(this.effect())},
            effect() {
                let effect = buyableEffect('m', 11).mul(0.6).add(1)
                return effect.min(getMultiLimit())
            },
            cost: new Decimal(500),
            unlocked() {return hasMilestone('s', 4) && hasUpgrade('m', 11)}
        },
        22: {
            title: "Magnetic Prestige II",
            description() {return "<b>Attract</b> multiplies prestige points again, but at a slightly reduced rate. Effect: x" + format(this.effect())},
            effect() {
                let effect = buyableEffect('m', 11).mul(0.4).add(1)
                return effect.min(getMultiLimit())
            },
            cost: new Decimal(2500),
            unlocked() {return hasMilestone('s', 4) && hasUpgrade('m', 21)}
        },
        23: {
            title: "Magnetic II",
            description() {return "<b>Attract</b> multiplies magnets again."},
            cost: new Decimal(5000),
            unlocked() {return hasMilestone('s', 6) && hasUpgrade('m', 22)}
        },
        24: {
            title: "Magnetic Sacrifice II",
            description() {return "<b>Attract</b> multiplies sacrifice points again, but at a slightly reduced rate. Effect: x" + format(this.effect())},
            effect() {
                let effect = buyableEffect('m', 11).mul(0.8).add(1)
                return effect.min(getMultiLimit())
            },
            cost: new Decimal(10000),
            unlocked() {return hasMilestone('s', 11) && hasUpgrade('m', 23)}
        },
        25: {
            title: "Magnetic Energy II",
            description() {return "<b>Attract</b> multiplies sacrificial energy again, but at a reduced rate. Effect: x" + format(this.effect())},
            effect() {
                let effect = buyableEffect('m', 11).mul(0.4).add(1)
                return effect.min(getMultiLimit())
            },
            cost: new Decimal(100000),
            unlocked() {return hasMilestone('s', 11) && hasUpgrade('m', 24)}
        },
        41: {
            title: "Supermagnetic Points",
            description: "<b>Attract+</b> multiplies points.",
            cost: new Decimal(250),
            currencyLayer: "m",
            currencyDisplayName: "super magnets",
            currencyInternalName: "superMagnets",
        },
        42: {
            title: "Supermagnetic Prestige",
            description: "<b>Attract+</b> multiplies prestige points.",
            cost: new Decimal(500),
            currencyLayer: "m",
            currencyDisplayName: "super magnets",
            currencyInternalName: "superMagnets",
        },
        43: {
            title: "Supermagnetic Energy",
            description: "<b>Attract+</b> multiplies sacrificial energy.",
            cost: new Decimal(1500),
            currencyLayer: "m",
            currencyDisplayName: "super magnets",
            currencyInternalName: "superMagnets",
        },
        44: {
            title: "Supermagnetic Sacrifice",
            description: "<b>Attract+</b> multiplies sacrifice points.",
            cost: new Decimal(10000),
            currencyLayer: "m",
            currencyDisplayName: "super magnets",
            currencyInternalName: "superMagnets",
            unlocked() {return hasMilestone('s', 11) && hasUpgrade('m', 43)}

        },
        45: {
            title: "Supermagnetic",
            description: "<b>Attract+</b> multiplies magnets.",
            cost: new Decimal(100000),
            currencyLayer: "m",
            currencyDisplayName: "super magnets",
            currencyInternalName: "superMagnets",
            unlocked() {return hasMilestone('s', 11) && hasUpgrade('m', 44)}
        },
    },
    buyables: {
        11: {
            title: "Attract",
            display() { return "Multiplying by x" + format(buyableEffect('m', this.id)) + "\nBuyable Amount Multiplier: x" + format(this.effectAmountMul()) + "\nCost: " + format(this.cost()) + " magnets"},
            canAfford() { return player[this.layer].points.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effectAmountMul() {
                let amountMul = new Decimal(1)
                if (hasUpgrade('s', 22)) amountMul = amountMul.mul(2)
                return amountMul
            },
            effect() {
                return getBuyableAmount('m', this.id).mul(this.effectAmountMul()).mul(0.5).pow(0.5).plus(1).min(getMultiLimit())
            },
            cost() {
                return getBuyableAmount('m', this.id).plus(1).pow(1.25).mul(10).floor()
            }
        },
        12: {
            title: "Repel",
            display() { return "Multiplying magnet generation by x" + format(buyableEffect('m', this.id)) + "\nCost: " + format(this.cost()) + " magnets"},
            canAfford() { return player[this.layer].points.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('m', this.id).mul(0.2).pow(0.3).plus(1).min(getMultiLimit())
            },
            cost() {
                return getBuyableAmount('m', this.id).plus(1).pow(1.1).mul(10).floor()
            },
        },
        21: {
            title: "Attract+",
            display() { return "Multiplying by x" + format(buyableEffect('m', this.id)) + "\nBuyable Amount Multiplier: x" + format(this.effectAmountMul()) + "\nCost: " + format(this.cost()) + " super magnets"},
            canAfford() { return player[this.layer].superMagnets.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].superMagnets = player[this.layer].superMagnets.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effectAmountMul() {
                let amountMul = new Decimal(1)
                return amountMul
            },
            effect() {
                return getBuyableAmount('m', this.id).mul(this.effectAmountMul()).mul(0.5).pow(0.5).plus(1).min(getMultiLimit())
            },
            cost() {
                return getBuyableAmount('m', this.id).plus(1).pow(1.25).mul(100).floor()
            },
            style: () => {
                if (player.m.superMagnets.gte(tmp.m.buyables[21].cost) && buyableEffect('m', 21).lt(getMultiLimit())) {return {
                    "background": "#ba13a7",
                }} else {return {
                    "background": "#bf8f8f"
                }}
            }
        },
        22: {
            title: "Repel+",
            display() { return "Multiplying magnet generation by x" + format(buyableEffect('m', this.id)) + "\nCost: " + format(this.cost()) + " super magnets"},
            canAfford() { return player[this.layer].superMagnets.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].superMagnets = player[this.layer].superMagnets.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('m', this.id).mul(0.2).pow(0.3).plus(1).min(getMultiLimit())
            },
            cost() {
                return getBuyableAmount('m', this.id).plus(1).pow(1.1).mul(1000).floor()
            },
            unlocked() {return false}
        },
    },
    layerShown(){return hasMilestone('s', 0)},
    microtabs: {
        magnets: {
            "Main": {
                content: [
                    "blank",
                    ["buyables", [1]],
                    "blank",
                    ["upgrades", [1, 2, 3]]
                ],
            },
            "Super Magnets": {
                unlocked() {return hasMilestone('s', 6)},
                content: [
                    "blank",
                    ["display-text", () => {return "You have <h2 style='color:#ba13a7;text-shadow:#ba13a7 0px 0px 10px;'>" + format(player.m.superMagnets) + "</h2> super magnets" }],
                    "blank",
                    ["display-text", () => {return "Super Magnet Generation Rate: +" + format(tmp.m.superMagnetGain) + "/s"}],
                    ["display-text", () => {return "Base super magnet generation rate is equal to magnet gain divided by 60"}],
                    ["display-text", () => {
                        if (player.m.superMagnets.eq(player.m.points)) {
                            return "You cannot have more super magnets than magnets"
                        } else {
                            return ""
                        }
                    }],
                    "blank",
                    ["buyables", [2]],
                    "blank",
                    ["upgrades", [4, 5, 6]]
                ],
                buttonStyle() {return {
                    "border-color": "#ba13a7"
                }}
            },
        },
    },
    tabFormat: [
        "main-display",
        ["display-text", () => {return "Magnet Generation Rate: +" + format(tmp.m.directMult) + "/s"}],
        ["display-text", () => {
            if (player.m.points.eq(player.points)) {
                return "You cannot have more magnets than points"
            } else {
                return ""
            }
        }],
        "blank",
        ["microtabs", "magnets"]
    ],
    update(diff) {
        player.m.points = player.m.points.add(tmp.m.directMult.mul(diff))
        if (player.m.points.gt(player.points)) {
            player.m.points = player.points
        }
        if (hasMilestone('s', 6)) player.m.superMagnets = player.m.superMagnets.add(tmp.m.superMagnetGain.mul(diff))
        if (player.m.superMagnets.gt(player.m.points)) {
            player.m.superMagnets = player.m.points
        }
    },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row <= this.row) return;

        let keep = [];
        if (hasMilestone('s', 3) && !(layers[resettingLayer].row == 2)) keep.push("upgrades")
        if (hasMilestone('s', 13)) keep.push("upgrades")
        if (hasMilestone('s', 11) && !(layers[resettingLayer].row == 2)) keep.push("buyables")
        if (hasMilestone('t', 0)) keep.push("buyables")


        layerDataReset(this.layer, keep);
      
    },
})

addLayer("b", {
    branches: ['s'],
    name: "bricks",
    symbol: "B",
    position: 0,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        bricks: new Decimal(0),
        activeCharge: [],
        chargedEnergy: new Decimal(0),
        superBricks: new Decimal(0)
    }},
    color: "#ddb027",
    requires: new Decimal(250000),
    exponent: 1/3,
    resource: "brick energy",
    baseResource: "sacrificial energy",
    baseAmount() {return player.s.energy},
    type: "normal",
    gainMult() {
        mult = new Decimal(1)
        mult = mult.mul(buyableEffect('t', 12))
        if (hasMilestone('s', 17)) mult = mult.mul(tmp.s.milestones[17].effect)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 2,
    upgrades: {
        
    },
    onPrestige() {
        player.s.trueResetTime = 0
    },
    brickGenMult() {
        let mult = new Decimal(1)
        if (hasMilestone('s', 8)) mult = mult.mul(tmp.s.milestones[8].effect)
        if (hasMilestone('s', 13)) mult = mult.mul(buyableEffect('m', 11))
        mult = mult.mul(buyableEffect('b', 32))
        if (hasMilestone('s', 9)) mult = mult.mul(buyableEffect('m', 21))
        mult = mult.mul(buyableEffect('t', 12))
        if (hasMilestone('s', 17)) mult = mult.mul(tmp.s.milestones[17].effect)
        return mult
    },
    brickLimit() {
        let limit = new Decimal(10).pow(getBuyableAmount('s', 21))
        return limit
    },
    brickChargeLimit() {
        let limit = 1
        if (hasMilestone('s', 15)) limit = 3
        return limit
    },
    superBrickGen() {
        let mult = tmp.b.effect.mul(tmp.b.brickGenMult).div(60)
        return mult
    },
    superBrickLimit() {
        let limit = new Decimal(100).mul(player.b.chargedEnergy.pow(0.75))
        return limit
    },
    effect() {
        let effect = new Decimal(1.1).pow(player.b.points).sub(1)
        if (hasMilestone('s', 13)) effect = new Decimal(1.125).pow(player.b.points.mul(1.5)).sub(1)
        if (effect.gte(1000)) effect = new Decimal(1000).add(new Decimal(1.05).pow(player.b.points).sub(1).log(2))
        return effect
    },
    effectDescription() {
        if (tmp.b.effect.lt(1000)) {
            return "which are generating a base of " + format(tmp.b.effect) + " bricks per second"
        } else {
            return "which are generating a base of " + format(tmp.b.effect) + " bricks per second (softcapped)"
        }
    },
    buyables: {
        11: {
            title: "Brick Points",
            display() { return "Multiplying points by x" + format(buyableEffect('b', this.id)) + "\nCost: " + format(this.cost()) + " bricks"},
            canAfford() { return player[this.layer].bricks.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].bricks = player[this.layer].bricks.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('b', this.id).mul(0.5).pow(0.5).plus(1).min(getMultiLimit())
            },
            cost() {
                return getBuyableAmount('b', this.id).plus(1).pow(1.25).mul(10).floor()
            }
        },
        12: {
            title: "Brick Prestige",
            display() { return "Multiplying prestige points by x" + format(buyableEffect('b', this.id)) + "\nCost: " + format(this.cost()) + " bricks"},
            canAfford() { return player[this.layer].bricks.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].bricks = player[this.layer].bricks.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('b', this.id).mul(0.5).pow(0.5).plus(1).min(getMultiLimit())
            },
            cost() {
                return getBuyableAmount('b', this.id).plus(1).pow(1.25).mul(10).floor()
            }
        },
        13: {
            title: "Brick Magnets",
            display() { return "Multiplying magnets by x" + format(buyableEffect('b', this.id)) + "\nCost: " + format(this.cost()) + " bricks"},
            canAfford() { return player[this.layer].bricks.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].bricks = player[this.layer].bricks.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('b', this.id).mul(0.5).pow(0.5).plus(1).min(getMultiLimit())
            },
            cost() {
                return getBuyableAmount('b', this.id).plus(1).pow(1.25).mul(10).floor()
            }
        },
        21: {
            title: "Brickrificial Energy",
            display() { return "Multiplying sacrificial energy by x" + format(buyableEffect('b', this.id)) + "\nCost: " + format(this.cost()) + " bricks"},
            canAfford() { return player[this.layer].bricks.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].bricks = player[this.layer].bricks.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('b', this.id).mul(0.5).pow(0.5).plus(1).min(getMultiLimit())
            },
            cost() {
                return getBuyableAmount('b', this.id).plus(1).pow(1.25).mul(100).floor()
            },
            unlocked() {return hasMilestone('b', 0)}
        },
        22: {
            title: "Brickrifice Points",
            display() { return "Multiplying sacrifice points by x" + format(buyableEffect('b', this.id)) + "\nCost: " + format(this.cost()) + " bricks"},
            canAfford() { return player[this.layer].bricks.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].bricks = player[this.layer].bricks.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('b', this.id).mul(0.5).pow(0.5).plus(1).min(getMultiLimit())
            },
            cost() {
                return getBuyableAmount('b', this.id).plus(1).pow(1.25).mul(100).floor()
            },
            unlocked() {return hasMilestone('b', 0)}
        },
        31: {
            title: "Supertrue Energy",
            display() { return "Multiplying true sacrificial energy by x" + format(buyableEffect('b', this.id)) + "\nCost: " + format(this.cost()) + " super bricks"},
            canAfford() { return player[this.layer].superBricks.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].superBricks = player[this.layer].superBricks.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('b', this.id).mul(0.3).pow(0.3).plus(1).min(getMultiLimit())
            },
            cost() {
                return getBuyableAmount('b', this.id).plus(1).pow(1.25).mul(100).floor()
            },
            style: () => {
                if (player.b.superBricks.gte(tmp.b.buyables[31].cost) && buyableEffect('b', 31).lt(getMultiLimit())) {return {
                    "background": "#ba13a7",
                }} else {return {
                    "background": "#bf8f8f"
                }}
            }
        },
        32: {
            title: "Not Super Bricks",
            display() { return "Multiplying bricks by x" + format(buyableEffect('b', this.id)) + "\nCost: " + format(this.cost()) + " super bricks"},
            canAfford() { return player[this.layer].superBricks.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].superBricks = player[this.layer].superBricks.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('b', this.id).mul(0.3).pow(0.3).plus(1).min(getMultiLimit())
            },
            cost() {
                return getBuyableAmount('b', this.id).plus(1).pow(1.25).mul(100).floor()
            },
            style: () => {
                if (player.b.superBricks.gte(tmp.b.buyables[32].cost) && buyableEffect('b', 32).lt(getMultiLimit())) {return {
                    "background": "#ba13a7",
                }} else {return {
                    "background": "#bf8f8f"
                }}
            }
        },
        33: {
            title: "Supersacrifice",
            display() { return "Multiplying sacrifice points and sacrificial energy by x" + format(buyableEffect('b', this.id)) + "\nCost: " + format(this.cost()) + " super bricks"},
            canAfford() { return player[this.layer].superBricks.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].superBricks = player[this.layer].superBricks.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('b', this.id).mul(0.3).pow(0.3).plus(1).min(getMultiLimit())
            },
            cost() {
                return getBuyableAmount('b', this.id).plus(1).pow(1.25).mul(100).floor()
            },
            style: () => {
                if (player.b.superBricks.gte(tmp.b.buyables[33].cost) && buyableEffect('b', 33).lt(getMultiLimit())) {return {
                    "background": "#ba13a7",
                }} else {return {
                    "background": "#bf8f8f"
                }}
            }
        },
        41: {
            title: "Super Multiplier Limit",
            display() { return "Multiplying global multiplier limit by x" + format(buyableEffect('b', this.id)) + "\nCost: " + format(this.cost()) + " super bricks"},
            canAfford() { return player[this.layer].superBricks.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].superBricks = player[this.layer].superBricks.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('b', this.id).add(1).log(10).div(2).add(1)
            },
            cost() {
                return getBuyableAmount('b', this.id).plus(1).pow(4).mul(500).floor()
            },
            style: () => {
                if (player.b.superBricks.gte(tmp.b.buyables[41].cost) && buyableEffect('b', 41).lt(getMultiLimit())) {return {
                    "background": "#ba13a7",
                }} else {return {
                    "background": "#bf8f8f"
                }}
            }
        },
    },
    milestones: {
        0: {
            requirementDescription: "5 brick energy",
            effectDescription: "Unlock two new brick buyables.",
            done() { return player.b.points.gte(5) }
        },
        1: {
            requirementDescription: "10 brick energy",
            effectDescription: "Unlock Brick Charge.",
            done() { return player.b.points.gte(10) }
        },
        2: {
            requirementDescription: "10,000 bricks",
            effectDescription: "Unlock Super Bricks.",
            done() { return player.b.bricks.gte(10000) }
        },
        3: {
            requirementDescription: "10 deposited brick energy",
            effectDescription: "Unlock another Brick Charge option.",
            done() { return player.b.chargedEnergy.gte(10) },
            unlocked() { return hasMilestone('b', 2)}
        }
    },
    clickables: {
        11: {
            title: "Charged Points",
            tooltip() {return "Will multiply by x" + format(this.effectDisplay()) + " on your next charge"},
            display() {
                if (player.b.activeCharge.includes("points")) {
                    return "(ACTIVE)<br>Multiplying points by x" + format(this.effect()) 
                } else {
                    return "(INACTIVE)<br>Multiplying points by x1.00"
                }
            },
            canClick() {return player.b.points.gte(10)},
            onClick() {
                if (player.b.activeCharge.includes("points")) {
                    player.b.activeCharge.splice(player.b.activeCharge.indexOf("points"), 1)
                } else {
                    player.b.activeCharge.push("points")
                    doReset('b', true)
                    player.b.chargedEnergy = player.b.chargedEnergy.add(player.b.points.mul(0.25))
                    player.b.points = player.b.points.mul(0.75)
                }
            },
            effect() {
                let effect = player.b.chargedEnergy.add(1).pow(0.5)
                return effect.min(getMultiLimit())
            },
            effectDisplay() {
                let effect = player.b.chargedEnergy.add(player.b.points.div(4)).add(1).pow(0.5)
                return effect.min(getMultiLimit())
            }
        },
        12: {
            title: "Charged Prestige Points",
            tooltip() {return "Will multiply by x" + format(this.effectDisplay()) + " on your next charge"},
            display() {
                if (player.b.activeCharge.includes("prestige")) {
                    return "(ACTIVE)<br>Multiplying prestige points by x" + format(this.effect()) 
                } else {
                    return "(INACTIVE)<br>Multiplying prestige points by x1.00"
                }
            },
            canClick() {return player.b.points.gte(10)},
            onClick() {
                player.b.chargedEnergy = player.b.chargedEnergy.add(player.b.points.mul(0.25))
                player.b.points = player.b.points.mul(0.75)
                if (player.b.activeCharge.includes("prestige")) {
                    player.b.activeCharge.splice(player.b.activeCharge.indexOf("prestige"), 1)
                } else {
                    player.b.activeCharge.push("prestige")
                    doReset('b', true)
                    player.b.chargedEnergy = player.b.chargedEnergy.add(player.b.points.mul(0.25))
                    player.b.points = player.b.points.mul(0.75)
                }
            },
            effect() {
                let effect = player.b.chargedEnergy.add(1).pow(0.3)
                return effect.min(getMultiLimit())
            },
            effectDisplay() {
                let effect = player.b.chargedEnergy.add(player.b.points.div(4)).add(1).pow(0.3)
                return effect.min(getMultiLimit())
            }
        },
        13: {
            title: "Charged Magnets",
            tooltip() {return "Will multiply by x" + format(this.effectDisplay()) + " on your next charge"},
            display() {
                if (player.b.activeCharge.includes("magnets")) {
                    return "(ACTIVE)<br>Multiplying magnets by x" + format(this.effect()) 
                } else {
                    return "(INACTIVE)<br>Multiplying magnets by x1.00"
                }
            },
            canClick() {return player.b.points.gte(10)},
            onClick() {
                player.b.chargedEnergy = player.b.chargedEnergy.add(player.b.points.mul(0.25))
                player.b.points = player.b.points.mul(0.75)
                if (player.b.activeCharge.includes("magnets")) {
                    player.b.activeCharge.splice(player.b.activeCharge.indexOf("magnets"), 1)
                } else {
                    player.b.activeCharge.push("magnets")
                    doReset('b', true)
                    player.b.chargedEnergy = player.b.chargedEnergy.add(player.b.points.mul(0.25))
                    player.b.points = player.b.points.mul(0.75)
                }
            },
            effect() {
                let effect = player.b.chargedEnergy.add(1).log(5).mul(0.8).add(1)
                return effect.min(getMultiLimit())
            },
            effectDisplay() {
                let effect = player.b.chargedEnergy.add(player.b.points.div(4)).add(1).log(5).mul(0.8).add(1)
                return effect.min(getMultiLimit())
            }
        },
        14: {
            title: "Charged Sacrifice Points",
            tooltip() {return "Will multiply by x" + format(this.effectDisplay()) + " on your next charge"},
            display() {
                if (player.b.activeCharge.includes("sacrifice")) {
                    return "(ACTIVE)<br>Multiplying sacrifice points by x" + format(this.effect()) 
                } else {
                    return "(INACTIVE)<br>Multiplying sacrifice points by x1.00"
                }
            },
            canClick() {return player.b.points.gte(10)},
            onClick() {
                player.b.chargedEnergy = player.b.chargedEnergy.add(player.b.points.mul(0.25))
                player.b.points = player.b.points.mul(0.75)
                if (player.b.activeCharge.includes("sacrifice")) {
                    player.b.activeCharge.splice(player.b.activeCharge.indexOf("sacrifice"), 1)
                } else {
                    player.b.activeCharge.push("sacrifice")
                    doReset('b', true)
                    player.b.chargedEnergy = player.b.chargedEnergy.add(player.b.points.mul(0.25))
                    player.b.points = player.b.points.mul(0.75)
                }
            },
            effect() {
                let effect = player.b.chargedEnergy.add(1).log(5).add(1)
                return effect.min(getMultiLimit())
            },
            effectDisplay() {
                let effect = player.b.chargedEnergy.add(player.b.points.div(4)).add(1).log(5).add(1)
                return effect.min(getMultiLimit())
            }
        },
        15: {
            title: "Charged Sacrificial Energy",
            tooltip() {return "Will multiply by x" + format(this.effectDisplay()) + " on your next charge"},
            display() {
                if (player.b.activeCharge.includes("energy")) {
                    return "(ACTIVE)<br>Multiplying sacrificial energy by x" + format(this.effect()) 
                } else {
                    return "(INACTIVE)<br>Multiplying sacrificial energy by x1.00"
                }
            },
            canClick() {return player.b.points.gte(10)},
            onClick() {
                player.b.chargedEnergy = player.b.chargedEnergy.add(player.b.points.mul(0.25))
                player.b.points = player.b.points.mul(0.75)
                if (player.b.activeCharge.includes("energy")) {
                    player.b.activeCharge.splice(player.b.activeCharge.indexOf("energy"), 1)
                } else {
                    player.b.activeCharge.push("energy")
                    doReset('b', true)
                    player.b.chargedEnergy = player.b.chargedEnergy.add(player.b.points.mul(0.25))
                    player.b.points = player.b.points.mul(0.75)
                }
            },
            effect() {
                let effect = player.b.chargedEnergy.add(1).log(7).add(1)
                return effect.min(getMultiLimit())
            },
            effectDisplay() {
                let effect = player.b.chargedEnergy.add(player.b.points.div(4)).add(1).log(7).add(1)
                return effect.min(getMultiLimit())
            }
        },
        21: {
            title: "Global Multiplier Limit",
            tooltip() {return "Will multiply by x" + format(this.effectDisplay()) + " on your next charge"},
            display() {
                if (player.b.activeCharge.includes("global")) {
                    return "(ACTIVE)<br>Multiplying global multiplier limit by x" + format(this.effect()) 
                } else {
                    return "(INACTIVE)<br>Multiplying global multiplier limit by x1.00"
                }
            },
            canClick() {return player.b.points.gte(10)},
            onClick() {
                player.b.chargedEnergy = player.b.chargedEnergy.add(player.b.points.mul(0.25))
                player.b.points = player.b.points.mul(0.75)
                if (player.b.activeCharge.includes("global")) {
                    player.b.activeCharge.splice(player.b.activeCharge.indexOf("global"), 1)
                } else {
                    player.b.activeCharge.push("global")
                    doReset('b', true)
                    player.b.chargedEnergy = player.b.chargedEnergy.add(player.b.points.mul(0.25))
                    player.b.points = player.b.points.mul(0.75)
                }
            },
            effect() {
                let effect = player.b.chargedEnergy.add(1).log(100).div(2).add(1)
                return effect.min(getMultiLimit())
            },
            effectDisplay() {
                let effect = player.b.chargedEnergy.add(player.b.points.div(4)).add(1).log(100).div(2).add(1)
                return effect.min(getMultiLimit())
            }
        },
    },
    hotkeys: [
        {key: "b", description: "B: Reset for brick energy", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    microtabs: { 
        bricks: {
            "Main": {
                content: [
                    "blank",
                    ["display-text", () => "You have <h2 style='color:#ddb027;text-shadow:#ddb027 0px 0px 10px;'>" + format(player.b.bricks) + "</h2> bricks"],
                    "blank",
                    ["display-text", () => "Current Brick Generation Rate: +" + format(tmp.b.effect.mul(tmp.b.brickGenMult)) + "/s"],
                    ["display-text", () => "You can not have more than <h2 style='color:#ddb027;text-shadow:#ddb027 0px 0px 10px;'>" + format(tmp.b.brickLimit) + "</h2> bricks (increased by True Sacrifice Level)"],
                    "blank",
                    "milestones",
                    "blank",
                    ["buyables", [1, 2]],
                    "blank",
                ],
            },
            "Brick Charge": {
                unlocked() {return },
                content: [
                    "blank",
                    ["display-text", "Activate brick charge by clicking on one of the clickables below"],
                    ["display-text", "You can deactivate brick charges by clicking on an already active brick charge"],
                    ["display-text", "Activating brick charge will take away 25% of your Brick Energy and force a Brick reset"],
                    ["display-text", "You need at least 10 Brick Energy to activate Brick Charge"],
                    "blank",
                    ["display-text", () => "Active Brick Charges: <h2 style='color:#ddb027;text-shadow:#ddb027 0px 0px 10px;'>" + format(player.b.activeCharge.length, 0) + "/" + format(tmp.b.brickChargeLimit, 0) + "</h2>"],
                    ["display-text", () => "You have deposited a total of <h2 style='color:#ddb027;text-shadow:#ddb027 0px 0px 10px;'>" + format(player.b.chargedEnergy) + "</h2> brick energy into Brick Charge"],
                    "blank",
                    "clickables"
                ]
            },
            "Super Bricks": {
                unlocked() {return hasMilestone('b', 2)},
                content: [
                    "blank",
                    ["display-text", () => {return "You have <h2 style='color:#ba13a7;text-shadow:#ba13a7 0px 0px 10px;'>" + format(player.b.superBricks) + "</h2> super bricks" }],
                    "blank",
                    ["display-text", () => {return "Current Super Brick Generation Rate: +" + format(tmp.b.superBrickGen) + "/s"}],
                    ["display-text", () => {return "Base super brick generation rate is equal to brick generation divided by 60"}],
                    "blank",
                    ["display-text", () => {return "You can not have more than <h2 style='color:#ba13a7;text-shadow:#ba13a7 0px 0px 10px;'>" + format(tmp.b.superBrickLimit) + "</h2> super bricks (increased by Brick Charge amount)"}],
                    "blank",
                    ["buyables", [3, 4]],
                    "blank",
                ],
                buttonStyle() {return {
                    "border-color": "#ba13a7"
                }}
            },
        }
    },
    layerShown(){return hasUpgrade('p', 25) || player.b.unlocked},
    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",
        ["microtabs", "bricks"]
    ],
    update(diff) {
        player.b.bricks = player.b.bricks.add(tmp.b.effect.mul(tmp.b.brickGenMult).mul(diff))
        if (player.b.bricks.gte(tmp.b.brickLimit)) {
            player.b.bricks = tmp.b.brickLimit
        }
        if (hasMilestone('b', 2)) player.b.superBricks = player.b.superBricks.add(tmp.b.superBrickGen.mul(diff))
        if (player.b.superBricks.gte(tmp.b.superBrickLimit)) {
            player.b.superBricks = tmp.b.superBrickLimit
        }
    },
})

addLayer("t", {
    branches: ['s'],
    name: "tires",
    symbol: "T",
    position: 1,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        resetTime: 0,
        tires: new Decimal(0),
        superTireEnergy: new Decimal(0),
        superTires: new Decimal(0)
    }},
    color: "#717171",
    requires: new Decimal(100000000),
    exponent: 1/3,
    resource: "tire energy",
    baseResource: "sacrificial energy",
    baseAmount() {return player.s.energy},
    type: "normal",
    gainMult() {
        mult = new Decimal(1)
        mult = mult.mul(buyableEffect('t', 43))
        if (hasMilestone('s', 17)) mult = mult.mul(tmp.s.milestones[17].effect)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 2,
    upgrades: {
        
    },
    getTireBase() {
        let base = new Decimal(1.25)
        base = base.mul(buyableEffect('t', 21))
        return base
    },
    getSuperTireBase() {
        let base = new Decimal(1.1)
        if (hasMilestone('s', 20)) base = base.add(0.15)
        return base
    },

    onPrestige() {
        player.t.tires = player.t.tires.add(tmp.t.getTireBase.pow(player.t.points))
        player.s.trueResetTime = 0
    },
    buyables: {
        11: {
            title: "Row Three",
            display() { return "Multiplying brick energy by x" + format(buyableEffect('t', this.id)) + "\nCost: " + format(this.cost()) + " tires"},
            canAfford() { return player[this.layer].tires.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].tires = player[this.layer].tires.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('t', this.id).mul(0.2).pow(0.9).plus(1).min(getMultiLimit())
            },
            cost() {
                return new Decimal(1.5).add(getBuyableAmount('t', 11).div(10)).pow(getBuyableAmount('t', 11)).mul(25).floor()
            }
        },
        12: {
            title: "Tired",
            display() { return "Multiplying sacrificial energy by x" + format(buyableEffect('t', this.id)) + "\nCost: " + format(this.cost()) + " tires"},
            canAfford() { return player[this.layer].tires.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].tires = player[this.layer].tires.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('t', this.id).mul(1.1).pow(1.2).plus(1).min(getMultiLimit())
            },
            cost() {
                return new Decimal(1.5).add(getBuyableAmount('t', 12).div(10)).pow(getBuyableAmount('t', 12)).mul(25).floor()
            }
        },
        13: {
            title: "Toy Car",
            display() { return "Multiplying brick generation by x" + format(buyableEffect('t', this.id)) + "\nCost: " + format(this.cost()) + " tires"},
            canAfford() { return player[this.layer].tires.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].tires = player[this.layer].tires.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('t', this.id).mul(0.5).pow(1.1).plus(1).min(getMultiLimit())
            },
            cost() {
                return new Decimal(1.5).add(getBuyableAmount('t', 13).div(10)).pow(getBuyableAmount('t', 13)).mul(25).floor()
            }
        },
        21: {
            title: "Tire Base",
            display() { return "Multiplying tire base by x" + format(buyableEffect('t', this.id)) + "\nCost: " + format(this.cost()) + " tires"},
            canAfford() { return player[this.layer].tires.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].tires = player[this.layer].tires.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('t', this.id).mul(0.005).add(1).log(10).add(1)
            },
            cost() {
                return new Decimal(1e100).mul(new Decimal(1e50).pow(getBuyableAmount(this.layer, this.id))).pow(getBuyableAmount(this.layer, this.id).add(1)).floor()
            },
            unlocked() {return hasMilestone('t', 2)}
        },
        22: {
            title: "Road Trip",
            display() { return "Multiplying global multiplier limit by x" + format(buyableEffect('t', this.id)) + "\nCost: " + format(this.cost()) + " tires"},
            canAfford() { return player[this.layer].tires.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].tires = player[this.layer].tires.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('t', this.id).mul(0.025).add(1).log(5).add(1)
            },
            cost() {
                return new Decimal(1e100).mul(new Decimal(1e50).mul(new Decimal(1e15).pow(getBuyableAmount(this.layer, this.id))).pow(getBuyableAmount(this.layer, this.id).add(1))).floor()
            },
            unlocked() {return hasMilestone('t', 2)}
        },
        23: {
            title: "I've Sacrificed All My Tire Puns",
            display() { return "Multiplying sacrifice points by x" + format(buyableEffect('t', this.id)) + "\nCost: " + format(this.cost()) + " tires"},
            canAfford() { return player[this.layer].tires.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].tires = player[this.layer].tires.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('t', this.id).mul(5).pow(0.5).add(1)
            },
            cost() {
                return new Decimal(1e100).mul(new Decimal(1e50).mul(new Decimal(1e10).pow(getBuyableAmount(this.layer, this.id))).pow(getBuyableAmount(this.layer, this.id).add(1))).floor()
            },
            unlocked() {return hasMilestone('t', 2)}
        },
        31: {
            title: "Reset for Super Tire Energy", 
            display() { 
                if (player.t.tires.gte(1e10)) {
                    if (!hasMilestone('t', 2)) {
                        return "Resets all previous tire content for <h3>" + format(this.effect()) + "</h3> super tire energy\nYou cannot earn more than one Super Tire Energy at a time"
                    } else {
                        return "Resets all previous tire content for <h3>" + format(this.effect()) + "</h3> super tire energy\nYou cannot earn more than one Super Tire Energy at a time\nThis will not reset row 2 tire buyables"
                    }             
                } else {
                    return "You need at least 1e10 tires to earn True Energy"
                }
            },
            canAfford() { return player.t.tires.gte(1e10) },
            buy() {

                player.t.superTireEnergy = player.t.superTireEnergy.add(this.effect())
                player.t.superTires = player.t.superTires.add(tmp.t.getSuperTireBase.pow(player.t.superTireEnergy))

                player.t.points = new Decimal(0)
                player.t.tires = new Decimal(0)

                setBuyableAmount('t', 11, new Decimal(0))
                if (!hasMilestone('s', 20)) setBuyableAmount('t', 12, new Decimal(0))
                setBuyableAmount('t', 13, new Decimal(0))

            },
            effect() { // Super Tire Energy gain
                let gain = new Decimal(0)
                if (player.t.tires.gte(1e10)) gain = new Decimal(1)
                return gain.floor()
            },
            style: () => {
                if (player.t.tires.gte(1e10)) {return {
                    "width": "250px",
                    "height": "250px",
                    "background": "#ba13a7",
                }} else {return {
                    "width": "250px",
                    "height": "250px",
                    "background": "#bf8f8f"
                }}
            },
        },
        41: {
            title: "Super Points",
            display() { return "Multiplying prestige and sacrifice points by x" + format(buyableEffect('t', this.id)) + "\nCost: " + format(this.cost()) + " super tires"},
            canAfford() { return player[this.layer].superTires.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].superTires = player[this.layer].superTires.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('t', 41).mul(4).pow(0.9).plus(1).min(getMultiLimit())
            },
            cost() {
                return new Decimal(2.5).pow(getBuyableAmount(this.layer, this.id)).floor()
            },
            style: () => {
                if (player.t.superTires.gte(tmp.t.buyables[41].cost) && buyableEffect('t', 41).lt(getMultiLimit())) {return {
                    "background": "#ba13a7",
                }} else {return {
                    "background": "#bf8f8f"
                }}
            }
        },
        42: {
            title: "Worldwide",
            display() { return "Multiplying global multiplier limit by x" + format(buyableEffect('t', this.id)) + "\nCost: " + format(this.cost()) + " super tires"},
            canAfford() { return player[this.layer].superTires.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].superTires = player[this.layer].superTires.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return new Decimal(0.1).mul(getBuyableAmount(this.layer, this.id)).add(1).log(5).add(1)
            },
            cost() {
                return new Decimal(3).add(getBuyableAmount(this.layer, this.id).mul(1.1)).pow(getBuyableAmount(this.layer, this.id)).floor()
            },
            style: () => {
                if (player.t.superTires.gte(tmp.t.buyables[42].cost) && buyableEffect('t', 42).lt(getMultiLimit())) {return {
                    "background": "#ba13a7",
                }} else {return {
                    "background": "#bf8f8f"
                }}
            }
        },
        43: {
            title: "Ultra Synergy Matrix",
            display() { return "Multiplying tire energy by x" + format(buyableEffect('t', this.id)) + "\nCost: " + format(this.cost()) + " super tires"},
            canAfford() { return player[this.layer].superTires.gte(this.cost()) && this.effect().lt(getMultiLimit()) },
            buy() {
                player[this.layer].superTires = player[this.layer].superTires.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect() {
                return getBuyableAmount('t', this.id).mul(0.2).pow(0.8).plus(1).min(getMultiLimit())
            },
            cost() {
                return new Decimal(2.5).pow(getBuyableAmount(this.layer, this.id)).floor()
            },
            style: () => {
                if (player.t.superTires.gte(tmp.t.buyables[43].cost) && buyableEffect('t', 43).lt(getMultiLimit())) {return {
                    "background": "#ba13a7",
                }} else {return {
                    "background": "#bf8f8f"
                }}
            }
        },
    },
    milestones: {
        0: {
            requirementDescription: "5 tires",
            effectDescription: "Keep sacrifice upgrades and magnet buyables on row 3 resets and True Sacrifice.",
            done() { return player.t.tires.gte(5) }
        },
        1: {
            requirementDescription: "25 tires",
            effectDescription: "Unlock tire buyables",
            done() { return player.t.tires.gte(25) }
        },
        2: {
            requirementDescription: "1e100 tires",
            effectDescription: "Unlock more tire buyables",
            done() { return player.t.tires.gte(1e100) },
            unlocked() {return hasMilestone('s', 17)}
        },
        3: {
            requirementDescription: "1,000,000 super tires",
            effectDescription: "All buyables before this point will no longer take away currencies, and will automatically earn one level per tick if affordable. This is one of the requirements to unlock the Miniscule Multiplier.",
            done() { return player.t.superTires.gte(1000000) },
            unlocked() {return hasMilestone('s', 20)}
        },
    },
    hotkeys: [
        {key: "t", description: "T: Reset for tire energy", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    microtabs: { 
        tires: {
            "Main": {
                content: [
                    "blank",
                    ["display-text", () => "You have <h2 style='color:#717171;text-shadow:#717171 0px 0px 10px;'>" + format(player.t.tires) + "</h2> (+" + format(tmp.t.getTireBase.pow(player.t.points)) + ") tires"],
                    ["display-text", () => "Tire gain formula: " + format(tmp.t.getTireBase) + " (tire base) ^ " + format(player.t.points) + " (tire energy)" ],
                    "blank",
                    "milestones",
                    "blank",
                    ["buyables", [1, 2]],
                    "blank",
                ],
            },
            "Super Tires": {
                unlocked() {return hasMilestone('s', 16)},
                content: [
                    "blank",
                    ["display-text", () => "You have <h2 style='color:#ba13a7;text-shadow:#ba13a7 0px 0px 10px;'>" + format(player.t.superTireEnergy) + "</h2> super tire energy"],
                    "blank",
                    ["buyables", [3]],
                    "blank",
                    ["display-text", () => "You have <h2 style='color:#ba13a7;text-shadow:#ba13a7 0px 0px 10px;'>" + format(player.t.superTires) + "</h2> (+" + format(tmp.t.getSuperTireBase.pow(player.t.superTireEnergy.add(buyableEffect('t', 31)))) + ") super tires"],
                    ["display-text", () => "Super tire gain formula: " + format(tmp.t.getSuperTireBase) + " (super tire base) ^ " + format(player.t.superTireEnergy) + " (super tire energy)" ],
                    "blank",
                    ["buyables", [4]],
                    "blank",
                ],
                buttonStyle() {return {
                    "border-color": "#ba13a7"
                }}
            },
        }
    },
    layerShown(){return hasMilestone('s', 14) || player.t.unlocked},
    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",
        ["microtabs", "tires"]
    ],
    update(diff) {
        if (hasMilestone('t', 3)) {
            if (tmp.p.buyables[11].canAfford) setBuyableAmount('p', 11, getBuyableAmount('p', 11).add(1))
            if (tmp.p.buyables[12].canAfford) setBuyableAmount('p', 12, getBuyableAmount('p', 12).add(1))

            if (tmp.m.buyables[11].canAfford) setBuyableAmount('m', 11, getBuyableAmount('m', 11).add(1))
            if (tmp.m.buyables[12].canAfford) setBuyableAmount('m', 12, getBuyableAmount('m', 12).add(1))
            if (tmp.m.buyables[21].canAfford) setBuyableAmount('m', 21, getBuyableAmount('m', 21).add(1))
            
            if (tmp.s.buyables[11].canAfford) setBuyableAmount('s', 11, getBuyableAmount('s', 11).add(1))
            if (tmp.s.buyables[12].canAfford) setBuyableAmount('s', 12, getBuyableAmount('s', 12).add(1))
            if (tmp.s.buyables[13].canAfford) setBuyableAmount('s', 13, getBuyableAmount('s', 13).add(1))

            if (tmp.b.buyables[11].canAfford) setBuyableAmount('b', 11, getBuyableAmount('b', 11).add(1))
            if (tmp.b.buyables[12].canAfford) setBuyableAmount('b', 12, getBuyableAmount('b', 12).add(1))
            if (tmp.b.buyables[13].canAfford) setBuyableAmount('b', 13, getBuyableAmount('b', 13).add(1))
            if (tmp.b.buyables[21].canAfford) setBuyableAmount('b', 21, getBuyableAmount('b', 21).add(1))
            if (tmp.b.buyables[22].canAfford) setBuyableAmount('b', 22, getBuyableAmount('b', 22).add(1))
            if (tmp.b.buyables[31].canAfford) setBuyableAmount('b', 31, getBuyableAmount('b', 31).add(1))
            if (tmp.b.buyables[32].canAfford) setBuyableAmount('b', 32, getBuyableAmount('b', 32).add(1))
            if (tmp.b.buyables[33].canAfford) setBuyableAmount('b', 33, getBuyableAmount('b', 33).add(1))
            if (tmp.b.buyables[41].canAfford) setBuyableAmount('b', 41, getBuyableAmount('b', 41).add(1))

            if (tmp.t.buyables[11].canAfford) setBuyableAmount('t', 11, getBuyableAmount('t', 11).add(1))
            if (tmp.t.buyables[12].canAfford) setBuyableAmount('t', 12, getBuyableAmount('t', 12).add(1))
            if (tmp.t.buyables[13].canAfford) setBuyableAmount('t', 13, getBuyableAmount('t', 13).add(1))
            if (tmp.t.buyables[21].canAfford) setBuyableAmount('t', 21, getBuyableAmount('t', 21).add(1))
            if (tmp.t.buyables[22].canAfford) setBuyableAmount('t', 22, getBuyableAmount('t', 22).add(1))
            if (tmp.t.buyables[23].canAfford) setBuyableAmount('t', 23, getBuyableAmount('t', 23).add(1))
            if (tmp.t.buyables[41].canAfford) setBuyableAmount('t', 41, getBuyableAmount('t', 41).add(1))
            if (tmp.t.buyables[42].canAfford) setBuyableAmount('t', 42, getBuyableAmount('t', 42).add(1))
            if (tmp.t.buyables[43].canAfford) setBuyableAmount('t', 43, getBuyableAmount('t', 43).add(1))
        }
    },
})

function replaceEverythingWithA(input) {
    let result = ""
    for (letter in input) {
        let codePoint = input.codePointAt(letter)
        if ((codePoint >= 65 && codePoint <= 90) || (codePoint >= 97 && codePoint <= 122)) {
            result += "A"
        } else {
            result += input[letter]
        }
    }
    return result
}