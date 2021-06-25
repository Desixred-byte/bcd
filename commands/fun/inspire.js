const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const Quote = require('randomquote-api');


module.exports = {
    name: "inspire",
    category: "fun",
    aliases: ["quote"],
    run: async (client, message, args, cmduser, text, prefix) => {

 const embed = new MessageEmbed()
.setColor(`ffca4f`)
.setAuthor(Quote.randomQuote().author)
.setTitle('DBC Inspiration Module')
.setDescription(Quote.randomQuote().quote)
 .setFooter(`Nerver give up in life , its not worth it.`, message.author.displayAvatarURL({
                    dynamic: true
                }))
  message.channel.send(embed)
    }
}
