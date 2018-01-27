const Discord = require('discord.js'); // reyiz discord.js burda gömüyorum
const ytdl = require('ytdl-core'); // ytdl core yutuptan video için
var prefix = "çaybot"; // Ön ek belirliyorum 

const client = new Discord.Client(); // discord.js i tanımlıyorum

client.on('message', message => {
    if (message.content === prefix + 'çay') { // eğer prefix ve çay yan yana kullanılırsa burda alttaki şeyleri yap
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        if (!voiceChannel) { // eğer kullanıcı sesli kanalda değilse resti çek
            return message.reply('Bir kanala gir öyle çaldır yoksa ohooo');
        }

        voiceChannel.join().then(connection => { // ve çal bakalım
            const stream = ytdl('https://www.youtube.com/watch?v=a9FsCJqXE0g', { filter: 'audioonly' });
            const dispatcher = connection.playStream(stream);

            dispatcher.on('end', () => voiceChannel.leave());
        });
    }
});

client.login('HAŞMETLİ TOKENİN'); // desteğiniz önemli eğer example'ı sevdiysen çayı sunucuna al bit.ly/caybot
