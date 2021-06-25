const Discord = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "codehelp",
    category: "course",
    aliases: ["helpcode"],
    cooldown: 4,
    description: "Helps with coding",
    run: async (client, message, args, cmduser, text, prefix) => {
      message.channel.send(new Discord.MessageEmbed()
        .setTitle("DBC Coding Course")
        .addField('**Coding Help**' , '> This module is made by DBC to teach everyone basic coding for free!')
         .addField(`**Why should you learn coding**` , ` This command will give you a brief reason of why you should start coding , to continue please type \`${prefix}whycode\``)
        
        .setFooter(`Ping me for the server prefix!`, client.user.displayAvatarURL())
        .setColor('ffca4f')
        
      );
    } 
    
  }
