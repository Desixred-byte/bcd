const Discord = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "picklanguage",
    category: "course",
    aliases: ["picklang"],
    cooldown: 4,
    description: "Helps with coding",
    run: async (client, message, args, cmduser, text, prefix) => {
      message.channel.send(new Discord.MessageEmbed()
        .setTitle("DBC Coding Course")
        .addField('**Which language should I pick first?**' , '> Today I will help you choose your first top 3 coding languages!')
         .addField('**HTML & CSS**' , '> Quite simply, HTML (Hypertext Markup Language) is used to create the actual content of the page, such as written text, and CSS (Cascade Styling Sheets) is responsible for the design or style of the website, including the layout, visual effects and background color. And html is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables.')
         .addField('**JavaScript**' , '> JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user or even code fun interactive discord bots.')
         .addField('**Python**' , '> Python is a general-purpose programming language, so it can be used for many things. Python is used for web development, AI, machine learning, operating systems, mobile application development, and video games.')       
        .addField('**Learn today**' , '> Learn coding with me today , type \`startlearning\` to start.')
        .setFooter(`Learn with DBC!`, client.user.displayAvatarURL())
        .setColor('ffca4f')
      );
    } 
    
  }
