scenarios list {
name: nameOfScenario,
message: to be displayed in CLI
choices: [
{name: option for player to pick, nextScenario: nameOfScenario this option leads to}
{name: option for player to pick, nextScenario: nameOfScenario this option leads to}
]
}

async presentScenario function {
answers = await inquirer.prompt
{
type: 'list'
choice: 'choice'
message: the scenario message
choices: show choices and connect with name
}
}

async startGame function {
start at currentScenario where currentScenario = intro

    while {
        if (current scenario has no further options) {
            display the message
            break the loop (end the game)
        }

playerChoice = present currentScenario and await playerChoice

currentScenario = find next scnario based on player choice and update current scenario
currentScenario = search Scenarios => if choice name is same as playerChoice => show next scenario
}

log goodbye message to console
}
