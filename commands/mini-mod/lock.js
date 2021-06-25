const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js');

module.exports = {
    name: "lock",
    category: "mini-mod",
    cooldown: 1,
      run: async (client, message, args, cmduser, text, prefix) => {

        
        if(!message.member.hasPermission('MANAGE_ROLES')) {
            const no = new MessageEmbed()
            .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
            .setDescription(`> You dont have any permissions to execute this command!`)
            .setColor(`RED`)
            message.channel.send(no)
        } else {

            if(!message.guild.me.hasPermission('MANAGE_ROLES')) {
                const no2 = new MessageEmbed()
                .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                .setDescription(`> DBC  can not lock a channel without the \`Manage Roles\` permission!`)
                .setColor(`RED`)
                message.channel.send(no2)

            } else {
            message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: false
            });
            const done = new MessageEmbed()
            .setTitle('Success!')
            .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
            .setDescription(`> Succesfully locked this channel , to unlock this channel type \`unlock\``)
            .setFooter(`Requested by: ${message.author.username}`)
            .setColor(`ffca4f`)
            message.channel.send(done)
        }
    }
    }
}