var token = '190151524:AAHRkWjzZCDlZ2EnUuDv2H1GsUfrbJkhcto';

var Bot = require('node-telegram-bot-api'),
    bot = new Bot(token, { polling: true });
var express = require('express');
var packageInfo = require('./package.json');
var app = express();

app.get('/', function (req, res) {
  res.json({ version: packageInfo.version });
});

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Web server started at http://%s:%s', host, port);
});

//console.log('bot server started...');


// Any kind of message
bot.onText(/^\/start$/, function (msg, match) {
  //var name = match[1];
  var first_name = msg.from.first_name;
  var userID = msg.from.id;
  bot.sendMessage(162911302, 'new user ' + userID + ' ' + first_name);
  bot.sendMessage(msg.chat.id, 'Hello ' + first_name + '!').then(function () {
  //console.log('new user' + first_name);
    // reply sent!
  });
});


bot.on('message', function (msg) {
  var chatId = msg.chat.id;
  var first_name = msg.from.first_name;
  // photo can be: a file path, a stream or a Telegram file_id
  //var photo = './img/Pokemon.jpg';
  var pokemon_images = ['./img/Pokemon.jpg','./img/Pokemon1.jpg','./img/Pokemon2.jpg','./img/Pokemon3.jpg','./img/Pokemon4.jpg','./img/Pokemon5.jpg','./img/Pokemon6.jpg','./img/Pokemon7.jpg','./img/Pokemon8.jpg','./img/Pokemon9.jpg','./img/Pokemon10.jpg','./img/Pokemon11.jpg','./img/Pokemon12.jpg','./img/Pokemon13.jpg','./img/Pokemon14.jpg'];
  var photo = pokemon_images[Math.floor(Math.random() * pokemon_images.length)];
  var pokemon_caption = ['Pokemon rules the World!','Catch them all!','Catch ME!','Ha-ha-ha-ha!','Go! Go! Go!','What is your favorite Pokemon?','Have you seen it?',"Let's Play Hide'N'Seek!","Explore the World!","Mighty Pokemon!"];
  var random_caption = pokemon_caption[Math.floor(Math.random() * pokemon_caption.length)];
  bot.sendPhoto(chatId, photo, {caption: random_caption});
  bot.sendMessage(162911302, 'user ' + first_name + ' writes: \n' + '"'+msg.text+'"');
  //console.log('user ' + first_name + ' writes: /n' + '"'+msg.text+'"');
});

/*
  tg.api.runMenu({
      message: 'Select:',
      layout: 2,
      'test1': () => {}, //will be on first line
      'test2': () => {}, //will be on first line
      'test3': () => {}, //will be on second line
      'test4': () => {}, //will be on second line
      'test5': () => {}, //will be on third line
})
*/      
//bot.onText(/^(.+)$/, function (msg, match) {
//  var cars = ["Saab", "Volvo", "BMW"];
//  bot.sendMessage(msg.chat.id, 'Hello ' + first_name + '!').then(function () {
    // reply sent!
//  });


//bot.onText(/^\bphoto\b$/, function (msg) {
  //var name = match[1];
  //var first_name = msg.from.first_name;
//  bot.sendPhoto(msg.chat.id, 'http://www.ucreative.com/wp-content/uploads/2015/09/DaneCozens_VenusaurPoster-e1442627025465.jpg').then(function () {
    // reply sent!
//  });
//});


/// bot.onText(/^\/sum((\s+\d+)+)$/, function (msg, match) {
///  var result = 0;
///  match[1].trim().split(/\s+/).forEach(function (i) {
///    result += (+i || 0);
///  })
///  bot.sendMessage(msg.chat.id, result).then(function () {
///    // reply sent!
///  });
///});