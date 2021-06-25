
const Discord = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const fse = require('fs-extra');
const fs = require('fs');
const canvacord = require('canvacord')//npm i canvacord in your terminal 
var archiver = require('archiver');
const { MessageEmbed, MessageAttachment, Client } = require("discord.js");
module.exports = {
    name: "hitler",
    category: "fun",
    aliases: ["worsethanhitler"],
    run: async (client, message, args, cmduser, text, prefix) => {

            let user = message.mentions.users.first() || message.author;
            let triggered = await canvacord.Canvas.hitler(user.displayAvatarURL({ format: "png", dynamic: false }));
            let attachment = new MessageAttachment(triggered, "worse_than_hitler.png");
            return message.channel.send(attachment);

    }
}