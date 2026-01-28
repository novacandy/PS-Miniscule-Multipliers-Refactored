/* 
    Icon change key:
    @h: Happy
    @e: Excited
    @s: Smile
    @m: Embarrased
    @u: Surprised
    @n: Normal
*/

const trueDialogue = {
    introduction1: {
        onLoad() {},
        mimiText: () => "Hi! Hello! @eI'm so glad to see you! @sYou've been doing so good so far! @hCan I know your name, pretty please?",
        command: '> Enter your name.',
        startImage: "resources/mimiHappy.png",
        canSend() {return true},
        onSend() {player.name = player.dialogueInput; startDialogue("introduction2")}
    }, 
    introduction2: {
        onLoad() {player.p.lastUpgradeUnlocked = true},
        mimiText: () => player.name + "! @eWhat an awesome name! @hI'm so happy now that I've finally met you! @mSorry, I'm being a little too energetic, what was I gonna say again? @uOh, right! I'm Mimi, @hthe one in charge of getting you to the Miniscule Multiplier! Anyways, I've just unlocked the prestige upgrade you're missing for you. It's a little expensive, but you'll keep it permanently! Go buy it, it does some pretty neat stuff!@n",
        command: '> Purchase the <b>Millionaire\'s Fortune</b> upgrade.',
        startImage: "",
        canSend() {return false},
        onSend() {}
    },
    bricks1: { 
        onLoad() {},
        mimiText: () => "Yay! You've increased the multiplier limit! You're no longer stuck with quintuplers and can go BEYOND now! @hYou've also unlocked a new layer: @sthe Brick layer! @hYou'll need 250,000 sacrificial energy to earn your first Brick Energy, @mwhich will generate an itty-bitty amount of bricks per second... @hNot to worry though, that amount will @eEXPLODE by the time you've gotten lots of Brick energy! @hGo earn your first 10 bits of brick energy to unlock the next feature: Brick Charge!@n",
        command: '> Reach 10 Brick Energy.',
        startImage: "resources/mimiExcited.png",
        canSend() {return false},
        onSend() {}
    },
    bricks2: { // Brick Charge
        onLoad() {},
        mimiText: () => "You did it! Go, you! @hYou've just unlocked a new feature in the Brick layer, @sBrick Charge! @mYeah, brick charge will take away your brick energy on activation, but it'll @hconvert it into one powerful multiplier of your choice! @eYou can even unlock a multiplier to the Global Multiplier Limit if you manage to convert ten! @hThis kinda stuff reminds me of my little sister. @mAlways her and her generators... @hAnyways, for your next unlock, you'll need 10,000 bricks. @mThis'll require for you to reach True Sacrifice Level 4 first so you can increase your brick limit, though... @hI'll leave you on your own for now though. @sGood luck, " + player.name + "!@n",
        command: '> Reach 10,000 bricks.',
        startImage: "resources/mimiExcited.png",
        canSend() {return false},
        onSend() {}
    },
    bricks3: { // Super Bricks
        onLoad() {},
        mimiText: () => "Getting closer! @hNow that you have 10,000 bricks on you, you've gained the ability to generate Super Bricks! These work similarly to Super Magnets, where generation is proportional to your current Brick Generation amount. @eAll multipliers to Bricks will also affect Super Bricks! @mJust one problem though, the limit for super bricks is also super low. @hYou'll need more Brick Charge in order to increase it, which thankfully isn't as hard as increasing your True Sacrifice level. Speaking of which, you'll need to reach True Sacrifice Level 5 to unlock the final layer, Tires! @sGood luck!@n",
        command: '> Reach True Sacrifice Level 5 and unlock Tires. ',
        startImage: "resources/mimiSmile.png",
        canSend() {return false},
        onSend() {}
    },
    tires1: { // Tires
        onLoad() {},
        mimiText: () => "Welcome to the Tire Layer! Earning tire energy will also grant Tires, just like how Sacrifice also gives you Sacrifice Energy alongside Sacrifice Points! You know what's cool about Tires? @eThey scale exponentially! @mYeah I know, this isn't really related to multiplying that much... @hBut I do like to think about it as several itty bitty multipliers being accumulated as you gain more Tire Energy, though! For your next goal, you'll want to reach 1e10 of both Sacrifice Energy and Tires. @sHave fun with the massive numbers!@n",
        command: '> Reach 1e10 sacrifice energy and 1e10 tires.',
        startImage: "resources/mimiExcited.png",
        canSend() {return false},
        onSend() {}
    },
    tires2: { // Super Tires
        onLoad() {},
        mimiText: () => "Alright, we're getting super close now! @hYou've unlocked Super Tires, a currency that'll take away your Tires, Tire Energy, and Tire buyables, in exchange for Super Tire Energy and Super Tires. These upgrades are super powerful, one of them even boosts Tire Energy! You've also got a Global Multiplier Limit boost and, more importantly, @ea Sacrifice Point multiplier! @hThis one scales exponentially too, making it super easy to max out! You'll need lots of Sacrifice points to reach the next True Sacrifice Level, which will unlock several milestones that'll be super important for unlocking the Miniscule Multiplier! @eBe sure to prioritize the other boosts first, though! Have fun!@n",
        command: '> Reach True Sacrifice Level 6.',
        startImage: "resources/mimiSmile.png",
        canSend() {return false},
        onSend() {}
    },
    miniscule1: { // Unlocking The Miniscule Multiplier
        onLoad() {},
        mimiText: () => "You're almost there! Just a few more steps left! You'll need to reach three different milestones in order to unlock the Miniscule Multiplier. @sYep, you're super close now! @hYou'll need 1e12 sacrifice energy, True Sacrifice Level 7, and 1,000,000 suoer tires. How will you get these currencies? @eTry going for Sacrifice Energy first! @hOnce you have all three milestones, you'll be super close to the end! Good luck!@n",
        command: '> Unlock the Miniscule Multiplier.',
        startImage: "resources/mimiExcited.png",
        canSend() {return false},
        onSend() {}
    },
    miniscule2: { // The Miniscule Multiplier
        onLoad() {},
        mimiText: () => "You're almost there! Just a few more steps! @hNow that True Sacrifice resets basically nothing, and you've got some sweet buyable automation, you'll want to get lots of True Sacrifice Energy so you can afford levels of The Miniscule Multiplier! Once you've gotten the right amount, try performing Prestiges to get your points to the hardcap! @eThere's not much left to do, so let's finish things strong! Get to one trillion points!",
        command: '> Beat the game.',
        startImage: "resources/mimiExcited.png",
        canSend() {return false},
        onSend() {}
    },
    end: { // Endgame
        onLoad() {},
        mimiText: () => "Yay! You made it to the end! It's been so fun, I hope to see you again soon!",
        command: '>',
        startImage: "resources/mimiSmile.png",
        canSend() {return false},
        onSend() {}
    },
    /* name: { //
        onLoad() {},
        mimiText: () => "",
        command: '>',
        startImage: "resources/mimiHappy.png",
        canSend() {return false},
        onSend() {}
    }, */
}
function renderDialogue(dialogueid, step) {
    let ret = ""
    for (let i = 0; i < trueDialogue[dialogueid].mimiText().length && i < step; i++) {
        if (trueDialogue[dialogueid].mimiText().charAt(i) == "@") {
            i++
            if (trueDialogue[dialogueid].mimiText().charAt(i) == "h") {
                player.currentImage = "resources/mimiHappy.png"
            } else if (trueDialogue[dialogueid].mimiText().charAt(i) == "e") {
                player.currentImage = "resources/mimiExcited.png"
            } else if (trueDialogue[dialogueid].mimiText().charAt(i) == "s") {
                player.currentImage = "resources/mimiSmile.png"
            } else if (trueDialogue[dialogueid].mimiText().charAt(i) == "m") {
                player.currentImage = "resources/mimiEmbarrassed.png"
            } else if (trueDialogue[dialogueid].mimiText().charAt(i) == "u") {
                player.currentImage = "resources/mimiSurprised.png"
            } else if (trueDialogue[dialogueid].mimiText().charAt(i) == "n") {
                player.currentImage = "resources/mimiNormal.png"
            }
        } else {
            ret = ret + trueDialogue[dialogueid].mimiText().charAt(i)
        }
    }
    return ret
}
function startDialogue(dialogueid) {
    trueDialogue[dialogueid].onLoad()
    player.dialogueInput = ''
    player.dialogueStatus = dialogueid
    player.dialogueStep = 0
    player.currentImage = trueDialogue[dialogueid].startImage
}
function triggerDialogues() {
    if (player.dialogueStatus == "introduction2" && hasUpgrade('p', 25)) startDialogue('bricks1')
    if (player.dialogueStatus == "bricks1" && player.b.points.gte(10)) startDialogue('bricks2')
    if (player.dialogueStatus == "bricks2" && player.b.bricks.gte(10000)) startDialogue('bricks3')
    if (player.dialogueStatus == "bricks3" && player.t.points.gte(1)) startDialogue('tires1')
    if (player.dialogueStatus == "tires1" && player.s.energy.gte(1e10) && player.t.tires.gte(1e10)) startDialogue('tires2')
    if (player.dialogueStatus == "tires2" && getBuyableAmount('s', 21).gte(6)) startDialogue('miniscule1')
    if (player.dialogueStatus == "miniscule1" && hasMilestone('s', 19) && hasMilestone('s', 20) && hasMilestone('t', 3)) startDialogue('miniscule2')
    if (player.dialogueStatus == "miniscule2" && player.points.gte(1e12)) {startDialogue('end'); player.dialogueStep = 92} 
}