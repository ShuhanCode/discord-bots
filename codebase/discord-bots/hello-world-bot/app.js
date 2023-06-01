// ID: 934412643840720956
// TOKEN: hidden inside a secret file.
// Invite link: https://discord.com/api/oauth2/authorize?client_id=934412643840720956&scope=bot&permissions=1

const Discord = require("discord.js"); // discord.js node module.

const { token } = require("./token.json"); // contains a string that is the password for the discord bot.

const Client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"], partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"]
}); // Creating a new client with intents and partials needed for this bot to function.

// Ready event captures the state when the bot gets online.
Client.on("ready", (client) => {
    console.log("This bot is now online " + client.user.tag);
});

// messageCreate event captures data of a message that is created/posted.
Client.on("messageCreate", (message) => {
    // only run this code is the user that wrote the message is NOT a bot.
    if (message.author.bot == false){
        message.reply("Hello");
    }
});

Client.login(token); // Logs in the discord bot with the password stored in an external file.