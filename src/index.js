require('dotenv').config();
const { Client, IntentsBitField, userMention, UserFlagsBitField, messageLink } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', () => {
  console.log(`${client.user.tag} is ready to use!`);
  console.log(`made by @vexxydevs!`);
});


client.on('messageCreate', (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === 'hello') {
    message.reply('hello my friend :).');
  }

  if (message.content === 'https://') {
    message.delete();
  }
  
});

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand())  return;

  if (interaction.commandName === 'invite') {
    interaction.user.send("invite link: https://discord.gg/");
    interaction.reply("dms!");
  }

})

client.on('messageCreate', (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) {
    message.reply("no responce...");
  }

});



client.login(process.env.TOKEN);
