const Discord = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "creatememe",
   category: "memes",
    aliases: ["cmemee"],
    cooldown: 4,
    description: "Memes!",
    run: async (client, message, args, cmduser, text, prefix) => {
        message.delete();
        const memetemplate = args[0];
        if (!memetemplate) {
            return message.channel.send("You didn't mention the template!. To see the available meme templates, type `memetemplates`");
        }
        const memetext1 = args[1];
        if (!memetext1) {
            return message.channel.send("Enter the text to be placed at the top!");
        }
        const memetext2 = args[2];
        if (!memetext2) {
            return message.channel.send("Enter the text to be placed at the bottom!");
        }
        message.channel.send({ files: [{ attachment: `https://api.memegen.link/images/${memetemplate}/${memetext1}/${memetext2}`, name: "custommeme.png"}]})
    }, catch (error) {
        const errorlogs = client.channels.cache.get("833645433078415380") //Put ur channel id To see error log
        message.channel.send("Seems like an error has occured!. Please try again in a few hours!")
        errorlogs.send("Error on Creatememe command! \n\nError:\n\n"+error);
    }
}