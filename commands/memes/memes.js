const Discord = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "meme",
   category: "memes",
    aliases: ["whymeme"],
    cooldown: 4,
    description: "Helps with coding",
    run: async (client, message, args, cmduser, text, prefix) => {
      message.channel.send(new Discord.MessageEmbed()
        .setTitle("DBC Meme Module")
        .addField('**What are memes**' , '> A meme is a concept or behavior that spreads from person to person. Examples of memes include beliefs, fashions, stories, and phrases. ... Memes that are propogated online are called "Internet memes." Examples of behavioral Internet memes include using Facebook and checking email several times a day.')
        .addField('**How to get started**' , '> This module includes 2 meme commands. You can generate a custom meme! To view a template of memes you can create , type \`memetemplates\`. To create the meme type \`creatememe\`.')

        .setFooter(`Ping me for the server prefix!`, client.user.displayAvatarURL())
        .setColor('ffca4f')
      );
    } 
    
  }
