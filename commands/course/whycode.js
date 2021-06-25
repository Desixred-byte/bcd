const Discord = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "whycode",
    category: "course",
    aliases: ["codewhy"],
    cooldown: 4,
    description: "Helps with coding",
    run: async (client, message, args, cmduser, text, prefix) => {
      message.channel.send(new Discord.MessageEmbed()
        .setTitle("DBC Coding Course")
        .addField('**Programming helps people proplem-solve**' , '> Understanding computers and learning the basics of coding helps People to develop an appreciation of how things work. It also teaches them how software engineers use math in order to solve problems in a logical and creative way. This is an important reason that coding should be taught to everyone, so People can learn these skills.')
         .addField('**Programming helps you solve challenges**' , '> When you learn to code, you develop the ability to bounce back after failure. They learn that failure isn’t necessarily a bad thing, and in fact, it can often be something positive because it serves as a learning opportunity. This is one of the most important reasons why People/children should code, as they will learn quickly that ‘debugging’ your code is half the fun.')
         .addField('**Coding will help you in future**' , '> When you look at how the world is developing, coding is an extremely useful skill to process. There are an increasing number of businesses who rely on computer code, not just those in the technology sector.')
         .addField('**Choose your first coding language**' , '> Ready to pick your first coding language? Type \`picklanguage`\ to start!')        
        .setFooter(`Ping me for the server prefix!`, client.user.displayAvatarURL())
        .setColor('ffca4f')
      );
    } 
    
  }
