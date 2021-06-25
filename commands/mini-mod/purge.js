const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js');


module.exports = {
    name: 'clear',
    aliases: ['purge'],
  run: async (client, message, args, cmduser, text, prefix) => {

        const number = args.join(' ')

        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            const no = new MessageEmbed()
            .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
            .setDescription(`You dont have any permissions to execute this command.`)
            .setColor(`RED`)
            message.channel.send(no)

        } else {
            if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
                const naw = new MessageEmbed()
                .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                .setDescription(`I can\'t clear the chat without the \`Manage_Messages\` permission.`)
                .setColor(`ffca4f`)
                message.channel.send(naw)
            } else {
                if(!number) {
                    const naw = new MessageEmbed()
                    .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                    .setDescription(`❌ **Invalid Usage!** ❌ \n Please enter a number!`)
                    .setColor(`#131313`)
                    message.channel.send(naw)
                } else {
                if(isNaN(number)) {
                        const notanumber = new MessageEmbed()
                        .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                        .setDescription(`❌ **Invalid Usage!** ❌ \n Enter in a valid number!`)
                        .setColor(`#131313`)
                        message.channel.send(notanumber)
                } else {
                    if(number > 100) {
                        const ripchatlmao = new MessageEmbed()
                        .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                        .setDescription(`❌ **Invalid Usage!** ❌ \n Please enter a number from 1 - 100!`)
                        .setColor(`#131313`)
                        message.channel.send(ripchatlmao)
                    } else {
                        if(number < 1) {
                            const megobruhnow = new MessageEmbed()
                        .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                        .setDescription(`❌ **Invalid Usage!** ❌ \n Please enter a number higher than 0!`)
                        .setColor(`#131313`)
                        message.channel.send(megobruhnow)
                        } else {
                        const awaits = await message.channel.bulkDelete(number)
                        const done = new MessageEmbed()
                        .setTitle('Success!')
                        .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                        .setDescription(`Done! Deleted ${awaits.size} messages in from this channel!`)
                        .setFooter(`Requested by: ${message.author.username}`)
                        .setColor(`#131313`)
                        message.channel.send(done).then(sent => sent.delete({ timeout: 3000 }))
                    }
                }
            }         
        }
    }
    }
}
}