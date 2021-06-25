
const Discord = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const fse = require('fs-extra');
const fs = require('fs');
var archiver = require('archiver');
const { MessageEmbed, MessageAttachment, Client } = require("discord.js");
module.exports = {
    name: "javascript",
    aliases: ["js"],
    category: "course",
    cooldown: 1,
    description: "Helps with coding",
    run: async (client, message, args, cmduser, text, prefix) => {

     message.delete()

 message.channel.send(new MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
               .setThumbnail('https://cdn.discordapp.com/attachments/857339828998504448/857648161353891880/djss.png')
           
            .addField(`Free Course Request` , `Hello <@${message.author.id}> I think you requested a DJS free guide from me. Make sure to keep your direct messages open as I will message you.`)
            .addField('**Want to learn coding too?**' , `If you want to learn coding like ${message.author.tag} did , type \`${prefix}codehelp\` and get started!`)
            .setColor('ffca4f')
            .setTimestamp()
);
     let approvalmsg = await message.author.send(new MessageEmbed()
        .setTitle("DBC Discord.Js Coding Course")
        .addField('**Setup**' , '> Did you ever want to write your own bot but you think you are too bad for it or you dont have motivation to do so Stop thinking that way. Writing discord bots using discord.js is really, really, easy if you know some javascript basics. Discord.js is a node.js package which requires at least [Node.js v14](https://nodejs.org/en/download/) directory. Important for windows users: Normally cmd opens in system32, so navigate into your directory using cd (otherwise it qill ll install that package in system32). Just ignore those warnings, they are not important to us. If installed, create a file - name doesnt matter, I recommend index.js or something that is similar to that and open it with your text editor.')
         .addField('**Your first lines of code**' , '> Node.js has a method for implementing packages or files: require(); As I mentioned before, ES6 offers much more stuff which makes JS better, for example more datatypes: \`const\` and \`let\`. If you create a \`const\`, you wont be able to modify its value anymore. It is read-only. So lets create a new const for \`require();\` (since we want to make sure that we dont modify it by mistake.)\n\`\`\`js\nconst Discord = require("discord.js"); // Requires the npm package discord.js.\n\`\`\`\n> If you ever programmed in another language like C++, C#, Java, etc., you probably know classes. If not, dont worry. We need the Client class of the npm package to interact with the Discord api. Thats why we create an instance of \`Discord.Client;\` lets call that instance \`client\`.\n\`\`\`js\nconst Discord = require("discord.js");\nconst client = new Discord.Client(); // Create an instance of Discord#Client\n\`\`\`')
         .addField('Part 2' , 'Now we can login with our application token using \`client.login()\`.\nToken? What? What token? How do I get one? Go to the [discord developer page](discord.com/developers/applications/), login, create an application, create a bot user and copy the token.\nIf you got your token, call \`client.token()\` with your token as parameter.\n\`\`\`js\nconst Discord = require("discord.js");const client = new Discord.Client(); \nclient.login("Your Token");\`\`\`\n> **Warning** , never share your bot token!\nCongrats! You wrote your first bot. So we want to test if it works and if our bot goes online. Open your command prompt, navigate into bots folder and type \`node <filename>.\` (\`<filename>\` being the filename of your file that you haveve created some seconds ago). If nothing is in your console, it works.\nCool , the bot is online, but ... how can we invite our bot to our server? It iss actually really simple. Just generate an OAuth2 url on the developer page.\nIf your bot joined the server, you should see that your bot is online.')
        .addField('Events and handling messages' , 'Some node.js packages have events. But, what is an event? An “EventEmitter“ takes two parameters: the event type and a function that will be evaluated when the event gets fired. Discord.js has many of these; our most important event is message. It gets fired every time a message is being sent. Heres the syntax for these Event Emitters:\n\`\`\`js\nclient.on(type, function);\n\`\`\`\n> Please dont use emitter for every command , just use the \`if\` statement.\nSo now you know what events are and what they do. Lets make one to interact with incoming messages.\n\`\`\`js\nclient.on("message", (message) => {\n});\n\`\`\`\nOooh, what is going on there? Let me explain: as I said, client has an event of type message, so we use \`"message"\` as first parameter. The second parameter looks a bit weird if youve never used \`ES6\`. Those things are called “arrow functions“. Theres actually no difference between them.\n\`\`\`js\nfunction(foo){\nconsole.log(foo);\n}\n\`\`\`')
        .addField('**Last Part**' , 'You can use the first one if you dont like the second one, Im using it because ~~programmers are lazy~~. (Do note that arrow functions dont have a bound this context) The parameter message is an object with many properties. The most important properties for now are:\n\`message.content\` The message content \`message.author\` The user object of message author - more later \`message.member\` The \`guildmember\` object of message author (yes, there is a **BIG** difference between author and member) \`message.id\` The id of the message \`message.channel\` The channel object where the message was sent in \`message.guild\` The guild object where the message was sent in (null if message is in a direct messages.\nCheck out the docs for a list of all properties of each class.')
        .addField('**First command: Ping**' , 'So we know about \`eventemitters\` and other stuff, lets make our first command. First of all, we check if the content of the message equals to \`!ping\`. If that condition is true, the bot should send a message with \`pong!\`. Here is how it works:\n\`\`\`js\n// client is an instance of Discord.Client\nclient.on("message", (message) => {\nif(message.content == "!ping"){\n // Check if content of message is "!ping"\nmessage.channel.send("pong!"); // Call .send() on the channel object the message was sent in\n}});\n\`\`\`')
        .addField('**Editing a message**' , 'But what if you want to edit a message or delete one? What if you want to pin a message?\n> You can only edit your own messages, it doesnt matter if you have permissions to manage messages. To edit a message, you call \`.edit()\` on a message object with the new message content as parameter:\n\`\`\`js\nmessage.edit("This is an edit");\n\`\`\`')
      
        .addField('**More Information**' , '> Full setup tutorial is in our github , press the link. \n | [Github DJS tutorial](https://github.com/Desixred-byte/DBCtutorial/blob/main/tutorial.md) | [Discord Developers Portal](https://discord.com/developers/applications/)')
         
        
        .setFooter(`Learn javaScript with DBC!`, client.user.displayAvatarURL())
        .setColor('ffca4f')
        );
         let approvalmsg1 = await message.author.send(new MessageEmbed()
        .setTitle("DBC Discord.Js Coding Course 2")
        .addField('**Resolving Promises**' , '> If you want to send a message and edit it, you have to resolve the promise that .send() returns (or using an asynchronous function) Its uncommon that a method which sends a request doesnt return a promise. Editing its own message could look like this:\n\`\`\`js\nmessage.channel.send("Hello").then((newMessage) => {newMessage.edit("Edited!");});\n\`\`\`\nTo resolve a promise, call .then on it. That method takes a function as parameter and I used an arrow function. On the docs you can see what a method returns (and want parameter the promise returns, \`.send()\` for example returns the message object.')
        .addField('**Other message methods**' , 'Guess, there is a \`.delete()\` method which deletes the message you call \`.delete()\` on. Normally you have to use \`setTimeout\` to wait some time, but the delete method offers a timeout parameter which waits an amount of time. Pinning a message is easy too, just call \`.pin()\` on the message - and \`.unpin()\` unpins a message. Another cool thing you can do is adding reactions on messages. Simply call \`.react()\` on the message object. As parameter you use a unicode emoji or a custom emote id.\n\`\`\`js\nmessage.react(":thinking:");\nmessage.react("🤔"); // Yes\nmessage.react("123456789");\`\`\`')
        .addField('**Real Ping Command**' , 'Lets make a "real" ping command which displays how long it took to send the message Since the message object has a "createdTimestamp" property - which returns the seconds since 1/1/1970 00:00 AM -, we can substract the current timestamp with message.createdTimestamp\`\`\`js\nclient.on("message", (message)){ // EventEmitter if(message.content == "!ping"){\nmessage.channel.send("Pinging ...")\n.then((msg) => {\nmsg.edit("Ping: " + (Date.now() -\nmsg.createdTimestamp))\n\n   });\n  }\n};\n\`\`\`')
      
        .addField('**More Information**' , '> Full setup tutorial is in our github , press the link. \n | [Github DJS tutorial](https://github.com/Desixred-byte/DBCtutorial/blob/main/tutorial.md) | [Discord Developers Portal](https://discord.com/developers/applications/)')
        
         
        
        .setFooter(`Learn javaScript with DBC!`, client.user.displayAvatarURL())
        .setColor('ffca4f')
        );

        let approvalmsg2 = await message.author.send(new MessageEmbed()
        .setTitle('DBC Coding Module')
        .setDescription('Make sure to read all of the text given or you could make an error in JS.\nThis text might be long but it is worth it to read all of them as it may change your life and coding knowledge like it did to others.')
        .setFooter('Thanks for using our modules')
         .setColor('ffca4f')
        );



    } 
    
  }
