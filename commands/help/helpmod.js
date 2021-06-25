const Discord = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "helpmod",
    category: "🔰 Info",
    aliases: ["modhelp"],
    cooldown: 4,
    description: "Returns all Commmands, or one specific command",
    run: async (client, message, args, cmduser, text, prefix) => {
      message.channel.send(new Discord.MessageEmbed()
        .setAuthor('DBC Modules')
        .setTitle("DBC Quick Moderation Module")
        .setDescription('These are all quick moderation commands.\nMake sure to report it in support server if a bug occurs.')
        .addField(`\`${prefix}purge\``, 'Clear up to 100 messages in a specific channel or specific user.')
        .addField(`\`${prefix}kick\``, 'Kicking removes a user from the server, they would need to use a valid invite link to get back in. Banning removes a user from the server, and prevents both their user and IP from accepting another invite to the server.')
         .addField(`\`${prefix}nuke\``, 'A nuke command will delete the current channel and create a new one. Also comes with a confirmation message.')
        .addField(`\`${prefix}poll\``, 'This is only can be accessed by the moderators , creates a poll which people can vote for it.')
        .addField(`\`${prefix}lock\``, 'This command will lock the current channel , disables sending messages for everyone.')
        .addField(`\`${prefix}unlock\``, 'This command will unlock the current channel , enables sending messages for everyone.')
       .addField(`\`${prefix}ban\``, `Bans a user from the server with the given reason , if not it counts as breaking rules.`, client.user.displayAvatarURL())
        .setColor('ffca4f')
      );
    } 
    
  }

