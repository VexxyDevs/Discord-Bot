require('dotenv').config();
const { REST, Routes} = require('discord.js');

const commands = [

  {
    name: 'invite',
    description:  'dms you with the discord invite link!',
  }

  
]
const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Registering Slash Commands...');
    
    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands },
    );

    console.log('Successfully registered commands!');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();
