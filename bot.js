const Discord = require('discord.js');
const client = new Discord.Client();
const convert = require("hh-mm-ss")
const dateFormat = require('dateformat');
const googl = require('goo.gl'); 
const google = require('google-it'); 
const translate = require('google-translate-api'); 
const fs = require('fs');
const pretty = require('pretty-ms');
const rn = require('random-number');
const userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));
const moment = require('moment');
var jimp = require('jimp')
const adminprefix = "--"
const prefix = "!"
let done = {};






client.on("message", (message) => {
  var sender = message.author
if(message.content.startsWith(prefix + 'free')) {
if (games[sender.id].lastDaily != moment().format('day')) {
    games[sender.id].lastDaily = moment().format('day')
 games[message.author.id].credits += 0.20;
    message.channel.send(`**${message.author.username} you collect your \`0.20\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
}
})
//مصاري//
client.on("message", (message) => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;    
if (message.content === prefix + 'coins') {
message.channel.send(`** ${message.author.username}, your :credit_card: balance is ${games[message.author.id].credits}.**`)
}
});



client.on('message', function(message) {
	const myID = "352832614190809089";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(adminprefix + "setname")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(adminprefix + "stream")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args , 'https://twitch.tv/6xlez1');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(adminprefix + "play")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(adminprefix + "listen")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(adminprefix + "watch")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(adminprefix + "setavatar")) {
				        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب الحالة اللي تريدها.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});








  client.on('message',async message => {
    if(message.content.startsWith(adminprefix + "restart")) {
        if(message.author.id !== "352832614190809089") return message.reply('You aren\'t the bot owner.');
        message.channel.send('**Restarting.**').then(msg => {
            setTimeout(() => {
               msg.edit('**Restarting..**');
            },1000);
            setTimeout(() => {
               msg.edit('**Restarting...**');
            },2000);
        });
        console.log(`${message.author.tag} [ ${message.author.id} ] has restarted the bot.`);
        console.log(`Restart Done..`);
        setTimeout(() => {
            client.destroy();
client.login(process.env.BOT_TOKEN);
        },3000);
    }
});

client.login(process.env.BOT_TOKEN);
