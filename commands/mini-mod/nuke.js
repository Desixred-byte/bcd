const Discord = require('discord.js');
const disbut = require('discord-buttons');

module.exports = {
    name: "nuke",
    category: "mini-mod",
    aliases: ["purgeall"],
    cooldown: 4,
    description: "Delete all messages",
    run: async (client, message, apikey, args, cmduser, text, prefix) => {


if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`You don't have enough permission to use this command!`)

let b1 = new disbut.MessageButton()
.setStyle('green')
.setLabel('CONFIRM')
.setID('1')

let b2 = new disbut.MessageButton()
.setStyle('red')
.setLabel('CANCEL')
.setID('2')

const m = await message.channel.send(`This channel will be nuked\nAre you sure , this can't be undone?`, { buttons: [b1, b2] })

client.on('clickButton' , async(b) => {
    if (b.clicker.member.id !== message.author.id) return;

            if (b.id === '1') {

             await b.defer()
message.channel.clone().then((ch) => {
    ch.setParent(message.channel.parent.id);
    ch.setPosition(message.channel.position);
    message.channel.delete();

ch.send(`**\`${message.author.tag}\`** Nuked this channel.`);
});
            } else if(b.id === '2') {
                m.edit(`${message.author} has cancelled the command!`).then(msg => msg.delete({ timeout: 2000}))
                message.delete();
            }
})
} } 
