const { MessageEmbed } = require('discord.js');


module.exports = (client, guild) => {

    const channelId = '856408295123845130';
    const channel = client.channels.cache.get(channelId); //This Gets That Channel
    const sowner = guild.owner.user; //This Gets The Guild Owner
    if(!channel) return; //If the channel is invalid it returns
    const embed = new MessageEmbed()
        .setTitle('Guild Deleted')
        .setDescription(`**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}\n**Owner:** ${sowner.tag}`)
        .setTimestamp()
        .setColor('ffca4f')
        .setFooter(`Total ${client.guilds.cache.size} Guilds`);
    channel.send(embed);
}