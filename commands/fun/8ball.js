const { MessageEmbed } = require("discord.js");

module.exports = {
    name: '8ball',               
    description: "Fun 8ball command!",
     run: async (client, message, args, cmduser, text, prefix) => {
        
  var phrases = [
            "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes – definitely",
        "You may rely on it",
        "As I see it",
        "yes",
        "Most Likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "It is certain",
        "It is decidedly so",
        'Without a doubt',
        'Yes definitely',
        'You may rely on it',
        'As I see it, yes',
        'Most likely',
        'Outlook good',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        'Don\'t count on it',
        'My reply is no',
        'My sources say no',
        'Outlook not so good',
        'Very doubtful',
        'Signs point to yes. Except that you were born an idiot, you will die an idiot, and nothing will change in-between.',

        ];

        message.reply(phrases[Math.floor(Math.random()*phrases.length)]); // Replies to the user with a random phrase
    },
};