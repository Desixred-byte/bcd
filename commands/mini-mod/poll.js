const Discord = require('discord.js');

 const { User } = require("discord.js");

module.exports = {
    name: "poll",
   category: "mini-mod",
    cooldown: 4,
    description: "Delete all messages",
    run: async (client, message, args, cmduser, text, prefix) => {


               const sayMessage = args.join(" "); 
                    message.delete().catch(err => console.log(err)); 
                    let embed = new Discord.MessageEmbed()
                        .setColor('ffca4f')
                        .setTitle(`**New poll**`)
                        .setThumbnail(`https://img2.pngio.com/download-free-png-poll-png-6-png-image-dlpngcom-poll-png-800_800.jpg`)
                        .addField(`**Poll from ${message.author.tag}**` , `${sayMessage}`);
                        const msg = await message.channel.send(embed);
                        await msg.react ('✅')
                        await msg.react ('❌')

                }
        
            }
         