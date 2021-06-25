const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js');
module.exports = {
    name: "ban",
   category: "mini-mod",
    cooldown: 4,
    description: "Ban a user",
    run: async (client, message, args, cmduser, text, prefix) => {

      if (!messagmember === message.member)
      return this.sendErrorMessage(message, 0, 'You cannot ban yourself'); 


        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You do not have permissions to use this command!')

        if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('I do not have permissions to execute this command!')

        const user = message.member

        let member = message.mentions.members.first()
        let reason = args[1]

        

        if (!member) {
            member = await message.guild.members.cache.get(args[0])
        }

        if (!member) {
            try {
                member = await client.users.fetch(args[0])
            } catch (e) {
                console.log('An error occured.')
                return message.channel.send("**Command failure**\n```fix\nCould not find that member , maybe try to mention them?\n```")
            }
        }

        if (!args[1]) {
            reason = "No reason provided";
        } else if (args[1]) {
            reason = args.slice(1).join(" ");
        }

        if (reason.length > 1024) reason = reason.slice(0, 1021) + "...";

        const bannedEmbed = new MessageEmbed()
            .setTitle('User banned')
            .setColor('ffca4f')
            .setDescription(`${member} was successfully banned.`)
            .addField('Moderator', message.member, true)
            .addField('Member', member, true)
            .addField('Reason', reason)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setTimestamp()

        const dmEmbed = new MessageEmbed()
            .setTitle("Banned!")
            .setDescription(`You have been ban from **${message.guild}**!`)
            .addField('Moderator', message.member, true)
            .addField('Member', member, true)
            .addField('Reason', reason)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setTimestamp()

        try {
            await message.guild.members.ban(member.id, {
                reason: reason
            })

            message.channel.send(bannedEmbed)

            try {
                await member.send(dmEmbed)

                user.send('I have successfully send the reason to the user!')
            } catch (e) {
                user.send('I could not DM the user! Reason logged.')
                console.log('An error occured while sending the DM embed!' + e)
            }
        } catch (e) {
            message.channel.send('An error occured while executing the action!')
            console.log("An error occured while executing the ban command!" + e)
        }
    }
}