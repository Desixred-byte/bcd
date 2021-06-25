const Discord = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "math",
   category: "math",
    aliases: ["startl"],
    cooldown: 4,
    description: "Helps with coding",
    run: async (client, message, args, cmduser, text, prefix) => {
      message.channel.send(new Discord.MessageEmbed()
        .setTitle("DBC Math Module")
        .addField('**How to use the commands**' , '> This calculator is made with discord buttons , please type \`calculator\` to activate it!')

        .setFooter(`Ping me for the server prefix!`, client.user.displayAvatarURL())
        .setColor('ffca4f')
      );
    } 
    
  }
