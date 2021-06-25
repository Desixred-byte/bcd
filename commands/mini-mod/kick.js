const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js');

module.exports = {
    name: "kick",
    category: "mini-mod",
    cooldown: 1,
      run: async (client, message, args, cmduser, text, prefix) => {

        
        const member = message.mentions.members.first()
        const reason = args.slice(1).join(" ")

        if(!message.member.hasPermission('KICK_MEMBERS')) {
            const no = new MessageEmbed()
            .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
            .setDescription(`You dont have any permissions to execute this command!`)
            .setColor(`RED`)
            message.channel.send(no)
        } else {
            if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
                    const no2 = new MessageEmbed()
                    .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                    .setDescription(`I dont have permissions to kick!`)
                    .setColor(`ffca4f`)
                    message.channel.send(no2)
            } else {

            if(!member) {
                const members = new MessageEmbed()
                .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                .setDescription(`Please mention someone to kick!`)
                .setColor(`RED`)
                message.channel.send(members)
            } else {
                if(!reason) {
                    const r = new MessageEmbed()
                    .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
                    .setDescription(`Please specify a reason!`)
                    .setColor(`RED`)
                    message.channel.send(r)
                } else {
                    if(member.kickable) {
                        member.kick(reason)
                        const done = new MessageEmbed()
                        .setTitle('Member kicked')
                        .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                        .setDescription(`Kicked ${member} for ${reason}.`)
                        .setFooter(`Requested by: ${message.author.username}`)
                        .setColor(`ffca4f`)
                        message.channel.send(done)
                    } else {
                        const cant = new MessageEmbed()
                        .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
                        .setDescription("This user is either a **Moderator**, **Administrator** or has **some** sort of role higher than mine!")
                        .setColor(`RED`)
                        message.channel.send(cant)
                    }
                }
            }
        }

    }
   }
}