const { MessageEmbed } = require('discord.js')
const { MessageButton } = require('discord-buttons') // npm i discord-buttons

module.exports = {
    name: "nickname",
    category: "Info",
    cooldown: 2,
    description: "Resends a message from u as an Embed",
    run: async (client, message, args, user, text, prefix) => {

    const member = message.member
    const name = args.join(' ') // For NickName
    if (!name) return message.reply(`What NickName You Do Want To Keep?`) // If No NickName Provided

    if (name.length > 32) return message.reply(`Your Name Can't Be Longer Than 32 Words`) // If Name Is Longer Then 32 Words // Discord Rules
    if (name.length < 2) return message.reply(`You Name Can't Be Shorter Than 2 Words`) // If Name Is Shorter Then 2 Words

    const embed1 = new MessageEmbed()
      .setAuthor(member.user.username, member.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor('RANDOM')
      .setDescription(`
<@${member.user.id}> Wants To Change NickName To **${name}**

React Below WithIn 30 Seconds
            `)

    const button1 = new MessageButton()
      .setStyle('green') // Color Of Button
      .setID('yes') // ID, So We Make Its Function
      .setLabel('Yes, Change') // Label Of Button

    const button2 = new MessageButton()
      .setStyle('red') // Color Of Button
      .setID('no') // ID, So We Make Its Function
      .setLabel('No, Don\'t Change') // Label Of Button

    message.channel.send({ buttons: [button1, button2], embed: embed1 }).then(message => { // Send Embed And Buttons
      const filter = (button) => button.clicker.user.id === member.id // To Check If User Who Clicked Button Is Same As Who Used Command
      const collector = message.createButtonCollector(filter, { time: 30000 }) // 30 Seconds To Click

      collector.on('collect', async b => {
        b.defer()
        if (b.id === 'yes') { // If User Click Yes Button
          member.setNickname(name)
          b.channel.send(`Successfully Chnaged NickName To **${name}**`)
          collector.stop()
        } else if (b.id === 'no') { // If User Click No Button
          b.channel.send(`Request Cancelled`)
          collector.stop()
        }
      })
    })
  }
}