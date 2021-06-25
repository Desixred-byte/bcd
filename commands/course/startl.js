const Discord = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "startlearning",
    category: "course",
    aliases: ["startl"],
    cooldown: 4,
    description: "Helps with coding",
    run: async (client, message, args, cmduser, text, prefix) => {
      message.channel.send(new Discord.MessageEmbed()
        .setTitle("DBC Coding Course")
        .addField('**Coding Help**' , '> Now chose your desired language from this list: \`python\` , \`javascript\` , \`html & css\` \n**Notice** : Python isnt available yet , you can use html or javascript command for now.')
        
        .setFooter(`Ping me for the server prefix!`, client.user.displayAvatarURL())
        .setColor('ffca4f')
      );
    } 
    
  }
