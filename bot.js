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
var Canvas = require('canvas')
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


client.login(process.env.BOT_TOKEN);
