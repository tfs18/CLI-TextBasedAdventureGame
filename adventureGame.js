import inquirer from 'inquirer';

const scenarios = [
    // Introduction
    {
        name: 'intro',
        message: 'Where would you like to start? Cave, desert, castle or forest?',
        choices: [
            {name: 'Cave', nextScenario: 'caveIntro'},
            {name: 'Desert', nextScenario: 'desertIntro'},
            {name: 'Castle', nextScenario: 'castleIntro'},
            {name: 'Forest', nextScenario: 'forestIntro'},
        ]
    },

    // CAVE --------------------------------------------------------

    {
        name: 'caveIntro',
        message: 'You wake up in a cave. You see two tunnels before you, do you choose to enter the left or the right tunnel?',
        choices: [
            {name: 'Enter the left tunnel', nextScenario: 'leftTunnel'},
            {name: 'Enter the right tunnel', nextScenario: 'rightTunnel'},
        ]
    },

    {
        name: 'rightTunnel',
        message: 'You find a glowing pouch of sand. Do you pick it up?',
        choices: [
            {name: 'Yes', nextScenario: 'desertIntro'},
            {name: 'No', nextScenario: 'returnToCaveStart'},
        ]
    },

    {
        name: 'returnToCaveStart',
        message: 'You leave the glowing bag of sand and return through the tunnel, but as you do the tunnel collapses and you are buried and perish.',
        choices: []
    },

    {
        name: 'leftTunnel',
        message: 'You go through the left tunnel and come upon a large opening where a large dragon is sleeping. Do you wake the dragon?',
        choices: [
            {name: 'Yes', nextScenario: 'wakeUpDragon'},
            {name: 'No', nextScenario: 'leaveDragonAsleep'},
        ]
    },

    {
        name: 'wakeUpDragon',
        message: 'You bang loudly on the rock wall in order to wake the dragon. It rises slowly, then breathes fire over you and you perish.',
        choices: []
    },

    {
        name: 'leaveDragonAsleep',
        message: 'You decide to leave the dragon sleeping, but you must get past. Will you sneak past quietly or run past quickly?',
        choices: [
            {name: 'Sneak past quietly', nextScenario: 'sneakPast'},
            {name: 'Run past quickly', nextScenario: 'runPast'},
        ]
    },

    {
        name: 'runPast',
        message: 'You attempt to sprint past the dragon, but your loud footsteps wake the dragon and it burns you to death.',
        choices: []
    },

    {
        name: 'sneakPast',
        message: 'You successfully sneak past the dragon without waking it and find a small tunnel on the other side of the opening. You enter the tunnel, but suddenly it collapses and you fall into a deep pit. Do you try to dig yourself out of it or call out for help?',
        choices: [
            {name: 'Dig your way out', nextScenario: 'digOut'},
            {name: 'Call out for help', nextScenario: 'callOut'},
        ]
    },

    {
        name: 'digOut',
        message: 'You claw at the dirt and rocks, but more keeps falling on top of you and you remain stuck forever!',
        choices: []
    },

    {
        name: 'callOut',
        message: 'When all hope is lost, you call out for help, hoping someone might hear and save you. After a few minutes, the rubble starts to move and you see a hand grab yours a pull you out of the debris. The mystery man (Bob) has saved you, and offers you some odd looking food. Do you eat it?',
        choices: [
            {name: 'Eat the food', nextScenario: 'eatFood'},
            {name: 'Refuse the food', nextScenario: 'refuseFood'},
        ]
    },

    {
        name: 'refuseFood',
        message: "You refuse Bob's offering. He is severely disappointed, thus he knocks you out and leaves you in the cave forever!",
        choices: []
    },

    {
        name: 'eatFood',
        message: "You accept Bob's offering and eat the food. It tastes awful, do you thank him or let him know how bad it was?",
        choices: [
            {name: 'Graciously thank him', nextScenario: 'thankBob'},
            {name: 'Tell him the truth', nextScenario: 'truthBob'},
        ]
    },

    {
        name: 'truthBob',
        message: "You tell Bob it was terrible. Bob thinks you're very unkind and deems you unworthy. He traps you in the cave forever.",
        choices: []
    },

    {
        name: 'thankBob',
        message: "You graciously thank Bob for the food and he beckons you to follow him. He leads you to the entrance of the cave then climbs a ledge up to the mouth of the cave. He leans down and extends his arm to free you from the cave.",
        choices: [
            {name: "Take Bob's hand", nextScenario: 'ending'},
        ]
    },

    // Castle --------------------------------------------------------

    {
        name: 'castleIntro',
        message: 'work in progress..',
        choices: []
    },

    // Forest --------------------------------------------------------

    {
        name: 'forestIntro',
        message: 'work in progress..',
        choices: []
    },

    // DESERT --------------------------------------------------------

    {
        name: 'desertIntro',
        message: 'You wake up in a desert. You see a tower to the left and an oasis to the right. WHich way do you go?',
        choices: [
            {name: 'Go to tower', nextScenario: 'goTower'},
            {name: 'Go to oasis', nextScenario: 'wanderIntoDesert'}
        ]
    },
    
    {
        name: 'wanderIntoDesert',
        message: 'You decided to wander into the desert in search of the oasis, this was a mirage. You have perished.',
        choices: []
    },
    
    {
        name: 'goTower',
        message: 'You find a sarcophagus inside the tower, do you open it?',
        choices: [
            {name: 'Open it', nextScenario: 'openSarc'},
            {name: 'Do not open it', nextScenario: 'dontOpenSarc'}
        ]
    },
    
    {
        name: 'dontOpenSarc',
        message: 'You decide not to open the sarcophagus and turn to leave, however you knock over a vase nearby and awake the mummy! They are angered by your disturbance to their slumber, and you die',
        choices: []
    },

    {
        name: 'openSarc',
        message: 'You decide to open the sarcophagus. Inside is a mummy holding a golden staff. Do you choose to take the staff or leave it?',
        choices: [
            {name: 'Take the staff', nextScenario: 'takeStaff'},
            {name: 'Leave the staff', nextScenario: 'leaveStaff'}
        ]
    },

    {
        name: 'leaveStaff',
        message: 'You leave the staff and exit the tower. Without the staff, you cannot unlock the desert’s secrets. You wander aimlessly and perish.',
        choices: []
    },
    
    {
        name: 'takeStaff',
        message: 'The staff glows and reveals a hidden staircase beneath the sarcophagus. Do you descend or stay?',
        choices: [
            { name: 'Descend', nextScenario: 'descendStairs' },
            { name: 'Stay', nextScenario: 'stayInTower' }
        ]
    },
    
    {
        name: 'stayInTower',
        message: 'You stay in the tower. The magic fades, and the door seals shut. You are trapped forever.',
        choices: []
    },
    
    {
        name: 'descendStairs',
        message: 'You descend into a chamber with two doors: one marked with a sun, the other with a serpent. Which do you choose?',
        choices: [
            { name: 'Sun door', nextScenario: 'sunDoor' },
            { name: 'Serpent door', nextScenario: 'serpentDoor' }
        ]
    },
    
    {
        name: 'serpentDoor',
        message: 'You open the serpent door and are bitten by a venomous snake. You die.',
        choices: []
    },
    
    {
        name: 'sunDoor',
        message: 'The sun door leads to a glowing room with a pedestal. On it lies a scroll. Do you read it or ignore it?',
        choices: [
            { name: 'Read the scroll', nextScenario: 'readScroll' },
            { name: 'Ignore the scroll', nextScenario: 'ignoreScroll' }
        ]
    },
    
    {
        name: 'ignoreScroll',
        message: 'You ignore the scroll and proceed. Without its guidance, you fall into a trap. You die.',
        choices: []
    },
    
    {
        name: 'readScroll',
        message: 'The scroll reveals a map and a riddle: “Where the sun meets sand, the path is grand.” Do you follow the map or solve the riddle?',
        choices: [
            { name: 'Follow the map', nextScenario: 'followMap' },
            { name: 'Solve the riddle', nextScenario: 'solveRiddle' }
        ]
    },
    
    {
        name: 'followMap',
        message: 'You follow the map but it leads to a dead end. The sands shift and bury you. You die.',
        choices: []
    },
    
    {
        name: 'solveRiddle',
        message: 'You realize the riddle points to a dune shaped like the sun. You head there and find a hidden portal. Enter or retreat?',
        choices: [
            { name: 'Enter the portal', nextScenario: 'enterPortal' },
            { name: 'Retreat', nextScenario: 'retreatPortal' }
        ]
    },
    
    {
        name: 'retreatPortal',
        message: 'You retreat, fearing the unknown. But the desert offers no second chances. You die.',
        choices: []
    },
    
    {
        name: 'enterPortal',
        message: 'You step through the portal and find yourself at the edge of the desert. A caravan awaits. You are saved.',
        choices: [
            { name: 'Join the caravan', nextScenario: 'ending' },
            { name: 'Stay behind', nextScenario: 'stayBehind' }
        ]
    },
    
    {
        name: 'stayBehind',
        message: 'You stay behind, unsure of your place. The portal closes and the desert reclaims you.',
        choices: []
    },

    {
        name: 'ending',
        message: 'Congratulations! You have completed the adventure.',
        choices: []
    },
]


// Function to present a scenario and get player choice
const presentScenario = async (scenario) => {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: scenario.message,
            choices: scenario.choices.map(choice => choice.name),
        }
    ]);

    return answers.choice;
};


const startGame = async () => {
    
    let currentScenario = scenarios.find(scenario => scenario.name === 'intro');

    while (currentScenario) {
        if (!currentScenario.choices || currentScenario.choices.length === 0) {
            console.log(currentScenario.message);
            break
        }

        const playerChoice = await presentScenario(currentScenario);

        currentScenario = scenarios.find(scenario => scenario.name === currentScenario.choices.find(choice => choice.name === playerChoice).nextScenario);
    }

    console.log('Thanks for playing!');
};

startGame();