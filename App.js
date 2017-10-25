const Commando = require("discord.js-commando")
const client = new Commando.Client({
    owner: '269783091583647754',
    commandPrefix: `;`
});
const path = require("path")

client.registry
// Registers your custom command groups
.registerGroups([
	['moderation', 'Moderation commands']
])

// Registers all built-in groups, commands, and argument types
.registerDefaults()
// Registers all of your commands in the ./commands/ directory
.registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log(`${client.user.tag} is now online!`);
    client.fetchUser("324800107952472064").then(piggy => {
        client.user.setGame(`with ${piggy.tag} | ;help`);
    });
});

client.on('message', function(message) {
    if (!message.author.id == '269783091583647754') return;
    if (message.content === "()herokurun") { 
      var interval = setInterval (function () {
        message.channel.send("keeping the bot alive")
      }, 900 * 1000); 
    }
});

client.login(process.env.TOKEN)