const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'rolldice',
    aliases: ['dice'],
    cooldown: 2,
    description: 'Dice roll command!',
       run: async (client, message, args, cmduser, text, prefix) => {
        const rolls = ["1", "2", "3", "4", "5", "6"];
        const roll = rolls[Math.floor(Math.random() * rolls.length)];
        let newEmbed = new MessageEmbed()
        .setTitle("🎲 Dice Roll")
        .setColor("ffca4f")
        .setDescription(`You rolled a **${roll}**!`)
                .setTimestamp()
                .setFooter("DBC fun Module");
        message.channel.send(newEmbed)
    }   
}