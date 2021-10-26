const Kahoot = require("kahoot.js-updated");
const settings = require('./settings.json');
const Chance = require('chance');
const chance = new Chance();
const readline = require("readline");
const readlines = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log(`
███╗░░░███╗██╗██╗░░░░░████████╗░█████╗░███╗░░██╗
████╗░████║██║██║░░░░░╚══██╔══╝██╔══██╗████╗░██║
██╔████╔██║██║██║░░░░░░░░██║░░░██║░░██║██╔██╗██║
██║╚██╔╝██║██║██║░░░░░░░░██║░░░██║░░██║██║╚████║
██║░╚═╝░██║██║███████╗░░░██║░░░╚█████╔╝██║░╚███║
╚═╝░░░░░╚═╝╚═╝╚══════╝░░░╚═╝░░░░╚════╝░╚═╝░░╚══╝

▄▄ ▄▄ ▄▄ ▄▄ ▄▄ ▄▄ ▄▄ ▄▄ ▄▄ ▄▄ ▄▄ ▄▄ ▄▄ ▄▄ ▄▄ ▄▄ ▄▄
░░ ░░ ░░ ░░ ░░ ░░ ░░ ░░ ░░ ░░ ░░ ░░ ░░ ░░ ░░ ░░ ░░ 
`)
readlines.question("Kahoot code: ", (answer) => {
    var splits = answer.split(",");
    const pin = splits[0];
    const bots = [...Array(200).keys()].map((i) => {
        const client = new Kahoot();
        const name = settings.random_name ? chance.name() : settings.bot_name+i;
        client.join(pin, name);
        console.log(`Thanks For Using Milton's Kahoot Bot! You've Just Spammed The Kahoot With The Names: ${name}`);
        client.on("questionStart", (question) => {
            question.answer(Math.floor(Math.random() * 4));
        });
        return client;
    });
});
