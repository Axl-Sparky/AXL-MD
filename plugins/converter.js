const {
  Ezra,isPublic, isPrivate
  } = require("../lib/");
const googleTTS = require('google-tts-api');
const { remini } = require('../lib/remini.js')



Ezra(
{
    pattern: "tts",
    fromMe: isPublic,
    type: "converter",
    desc: "text to speech"
},
async ({
    msg, client,text, match
}) => {
    if (!text) {
        msg.reply('_Enter something!_')
    } else {
        let [txt,
            lang] = text.split`:`
        const audio = googleTTS.getAudioUrl(`${txt}`, {
            lang: lang || "en-US",
            slow: false,
            host: "https://translate.google.com",
        })
        client.sendMessage(msg.chat, {
            audio: {
                url: audio,
            },
            mimetype: 'audio/mpeg',
            ptt: true,
            fileName: `${'tts'}.mp3`,
        }, {
            quoted: msg,
        })

    }
}); 

                           
Ezra(
    {
        pattern: "mp3",
        desc: "Converts an Video/Voice to Mp3",
        type : "converter",
    },
    async ({
        msg }) => {
        if (!msg.quoted || !(msg.quoted.audioMessage || msg.quoted.videoMessage ))
            return await msg.reply("_Reply to a video or audio message !_");
        let axl = await msg.quoted.download();
     return msg.sendMsg(msg.chat , axl , { mimetype: "audio/mpeg" } , "audio")
    }
);


Ezra(
    {
        pattern: "re",
        type: "converter",
        fromMe: isPublic,
        desc: "converte a photo HD quality"
    },
    async ({
        client, msg, match
    }) => {
if (!msg.quoted || !(msg.quoted.imageMessage  )) return await msg.reply("_Replay to an photo/image_");
await msg.reply("_Please wait..._");

        let media = await msg.quoted.download()
        let proses = await remini(media, "enhance")
        await client.sendMessage(msg.chat, { image: proses }, { quoted: msg})

  }
);
