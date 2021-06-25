const Discord = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "memetemplates",
   category: "memes",
    aliases: ["mt"],
    cooldown: 4,
    description: "Memes!",
    run: async (client, message, args, cmduser, text, prefix) => {
        const embed = new Discord.MessageEmbed()
        .setTitle("Available Meme Templates")
        .setDescription("Usage Example: `creatememe facepalm Hello Bye`\n`sohappy`,`tenguy`,`afraid`,`apcr`,`older`,`aag`,`atis`,`alyt`,`biw`,`stew`,`blb`,`bihw`,`kermit`,`bd`,`ch`,`cbg`,`wonka`,`cb`,`gandalf`,`keanu`,`cryingfloor`,`dsm`,`disastergirl`,`live`,`ants`,`doge`,`trump`,`drake`,`ermg`,`facepalm`,`feelsgood`,`firsttry`,`fwp`,`fa`,`fbf`,`fmr`,`fry`,`ggg`,`grumpycat`,`harold`,`hipster`,`icanhas`,`crazypills`,`elf`,`ackbar`,`agnes`,`aint-got-time`,`ams`,`away`,`awesome`,`captain`,`yuno`,`yodawg`,`whatyear`,`winter`,`tried`,`toohigh`,`success`,`spongebob`,`spiderman`,`sparta`,`snek`,`ski`,`soa`,`sadfrog`,`sad-obama`,`rollsafe`,`remembers`,`regret`,`red`,`mmm`,`money`,`patrick`,`nice`,`morpheus`,`joker`,`jetpack`,`imsorry`")
        .setTimestamp()
        .setColor("ffca4f");
    return message.channel.send(embed);
    }
}