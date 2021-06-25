
const Discord = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const fse = require('fs-extra');
const fs = require('fs');
var archiver = require('archiver');
const { MessageEmbed, MessageAttachment, Client } = require("discord.js");
module.exports = {
    name: "html",
    category: "course",
    cooldown: 1,
    description: "Helps with coding",
    run: async (client, message, args, cmduser, text, prefix) => {
      
     message.delete()

 message.channel.send(new MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
               .setThumbnail('https://cdn.discordapp.com/attachments/857339828998504448/857648161353891880/djss.png')
           
            .addField(`Free Course Request` , `Hello <@${message.author.id}> I think you requested a HTML free guide from me. Make sure to keep your direct messages open as I will message you.`)
            .addField('**Want to learn coding too?**' , `If you want to learn coding like ${message.author.tag} did , type \`${prefix}codehelp\` and get started!`)
            .setColor('ffca4f')
            .setTimestamp()
);
     let approvalmsg = await message.author.send(new MessageEmbed()
        .setTitle("DBC HTML Coding Course")
        .addField('**Introduction to HTML**' , '> HTML is the programming language used to define the structure of a website. This is how everything such as text, images, and links should appear on a web page. Technologies like CSS allow you to style a web page. HTML, on the other hand, is focused on building the blueprint for how a page should appear on a website.')
         .addField('**Reccomended code editors**' , '> I recommend using replit as your IDE. Click [here](https://replit.com) and create a new account. Press new project and select html as the language.')
           .addField('**Get started**' , '> Create a file called \`index.html\`. Your file should look like this: \`\`\`<!DOCTYPE html> <html> <head> <title>Page Title</title> </head> <body> <h1>This is a Heading</h1> <p>This is a paragraph.</p> </body> </html>\`\`\` For more details , click [here](https://www.w3schools.com/html/).')
         
        
        .setFooter(`Ping me for the server prefix!`, client.user.displayAvatarURL())
        .setColor('ffca4f')
      );
    } 
    
  }
