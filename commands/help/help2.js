const Discord = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "help",
    category: "🔰 Info",
    aliases: ["h", "commandinfo", "cmds", "cmd"],
    cooldown: 4,
    usage: "help [Command]",
    description: "Returns all Commmands, or one specific command",
    run: async (client, message, args, cmduser, text, prefix) => {
      message.channel.send(new Discord.MessageEmbed()
        .setTitle("DBC Help")
        .setDescription(`Here is a list of commands of DBC.\n**Prefix for this server is** \`${prefix}\`\nLess commands? DBC developers are working everyday to add new commands to DBC. Dont worry , we add commands every day.`)
        .addField('**DBC Quick Info**' , '> **Lost** in this help module?\nHere are all the quick information commands.\n\`modhelp\` | \`bot-creation\` | \`codehelp\`')
        .addField('**🤖  Pre Setup Bots**' , '> \`musicbot\` | \`discordjshandler\` | \`jointocreate\` | \`waitingroombot\`')
         .addField('**🔍  Information Commands**' , '> \`stats\` | \`ping\` | \`userinfo\` | \`serverinfo\` | \`invite\` | \`botinfo\` | \`inspire\`')
          .addField('**🔰  Misc Commands**' , '> \`ping\` | \`nick\` | \`embed\`')
         .addField('**🔥  Fun Commands**' , '> \`calculator\` | \`wouldyourather\` | \`nick\` | \`triggered` | \`sudo\` | \`rolldice\` | \`hitler\` | \`8ball\`')
        .addField('**🔢  Math Commands**' , '> \`math\` | \`calculator\`')
         .addField('**🛠  Mini Moderation**' , '> \`nuke\` | \`prefix\` | \`kick\` | \`ban\` | \`lock\` | \`unlock\` | \`poll\` | \`poll\` | \`purge\`')
         .addField('**💡  Meme Commands**' , '> \`meme\` | \`memetemplates\` | \`creatememe\`')
          .addField('**👩‍💻  DBC Free Course**','> \`codehelp\` | \`whycode\` | \`picklanguage\` | \`startlearning\` | \`html\`')
        .setFooter(`Ping me for the server prefix!`, client.user.displayAvatarURL())
        .setColor('ffca4f')
      );
    } 
    
  }

