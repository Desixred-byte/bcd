//npm i discord-buttons@latest
//put this in your main file => require('discord-buttons')(client);
//change this to your command handler if you have any questions or need help just dm me.

const Discord = require('discord.js')
const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports = {
    name: "javasdcript",
    aliases: ["jss"],
    category: "course",
    cooldown: 1,
    description: "Helps with coding",
    run: async (client, message, args, cmduser, text, prefix) => {
        const avatar = message.author.displayAvatarURL();

        //you can change the names and colors of embeds and buttons and other things...
        embeds = new Discord.MessageEmbed().setTitle('Hello!').setDescription('By clicking on any of these buttons under this embed you will get list of commands.').setColor('#ffa861').setTimestamp();
        embed1 = new Discord.MessageEmbed().setTitle(`Basic commands 🧍`).setDescription('Here area all the Available commands').addField("commands:", "**list of your commands**,").setColor("BLURPLE").setFooter('1/5').setThumbnail(avatar)
        embed2 = new Discord.MessageEmbed().setTitle(`Moderation commands⛔️`).setDescription('Here area all the Available commands').addField("commands:", "**list of your commands**,").setColor("RED").setFooter('2/5').setThumbnail(`${avatar}`)
        embed3 = new Discord.MessageEmbed().setTitle(`Voice Chat commands 🎤`).setDescription('Here area all the Available commands').addField("commands:", "**list of your commands**,").setColor("GRAY").setFooter('3/5').setThumbnail(`${avatar}`)
        embed4 = new Discord.MessageEmbed().setTitle(`Game Commands 🎮`).setDescription('Here area all the Available commands').addField("commands:", "**list of your commands**,").setColor("GRAY").setFooter('4/5').setThumbnail(`${avatar}`)
        embed5 = new Discord.MessageEmbed().setTitle(`Fun Commands 🤪`).setDescription('Here area all the Available commands').addField("commands:", "**list of your commands**,").setColor("GREEN").setFooter('5/5').setThumbnail(`${avatar}`)
        pages = [embed1, embed2, embed3, embed4, embed5]

        //you can change the names and colores of the buttons here
        let btn1 = new MessageButton()
            .setStyle('blurple')
            .setLabel('Basic commands 🧍')
            .setID('1');
        let btn2 = new MessageButton()
            .setStyle('red')
            .setLabel('Report command ⛔️')
            .setID('2');
        let btn3 = new MessageButton()
            .setStyle('gray')
            .setLabel('Voice Chat commands 🎤')
            .setID('3');
        let btn4 = new MessageButton()
            .setStyle('gray')
            .setLabel('Game Commands 🎮')
            .setID('4');
        let btn5 = new MessageButton()
            .setStyle('green')
            .setLabel('Fun Commands 🤪')
            .setID('5');
        let row = new MessageActionRow()
            .addComponent(btn1)
            .addComponent(btn2)
            .addComponent(btn3)
            .addComponent(btn4)
            .addComponent(btn5);
        
        let msg = await message.channel.send('', {
            component: row,
            embed: embeds
          });
        client.on('clickButton', async (button) => {
            if (button.clicker.member.id !== message.author.id) return;
            if (button.id === '1') {
                await button.defer();
                msg.edit({
                    embed: embed1,
                    component: row,
                });
            }
            if (button.id === '2') {
                await button.defer();
                msg.edit({
                    embed: embed2,
                    component: row,
                });
            }
            if (button.id === '3') {
                await button.defer();
                msg.edit({
                    embed: embed3,
                    component: row,
                });
            }
            if (button.id === '4') {
                await button.defer();
                msg.edit({
                    embed: embed4,
                    component: row,
                });
            }
            if (button.id === '5') {
                await button.defer();
                msg.edit({
                    embed: embed5,
                    component: row,
                });
            }
        })
    }
}