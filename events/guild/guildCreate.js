const { MessageEmbed } = require('discord.js');


module.exports = async (client, guild) => {

   const channelId = '856408294402031617';
    const channel = client.channels.cache.get(channelId); //This Gets That Channel
    const sowner = guild.owner.user; //This Gets The Guild Owner
    if(!channel) return; //If the channel is invalid it returns
    const embed = new MessageEmbed()
        .setTitle('Guild Created')
        .setDescription(`**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}\n**Owner:** ${sowner.tag}`)
        .setTimestamp()
        .setColor('ffca4f')
        .setFooter(`Total ${client.guilds.cache.size} Guilds`);
    channel.send(embed);
}