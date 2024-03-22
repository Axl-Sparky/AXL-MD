/*const { Axl, getJson, getBuffer } = require("../lib/");
const axios = require("axios");
const fetch = require("node-fetch")
const X = require("../config.js");
const { CAPTION } = require("../config.js");

Axl(
  {
    pattern: "insta",
    desc: "Instagram Reel/Post Downloader",
    type: "downloader",
  },
  async ({msg, text}) => {
    text = text || msg.quoted.text
   if (!text)return msg.reply(`*_Need instagram Link_*`)
      var { data } = await getJson(`https://vihangayt.me/download/instagram?url=${text}`);
        
        for (let i = 0; i < data.data.length; i++) {
            await msg.sendFromUrl(data.data[i].url, { caption: (X.CAPTION)})
            }
            });

Axl(
  {
    pattern: "story",
    desc: "Instagram Story Downloader",
    type: "downloader",
  },
  async ({msg, text}) => {
   if (!text)return msg.reply(`*_Need A Story Link_*`)
      var { data } = await getJson(`https://vihangayt.me/download/instagram?url=${text}`);
        
        for (let i = 0; i < data.data.length; i++) {
            await msg.sendFromUrl(data.data[i].url, { caption: (X.CAPTION)})
            }
            });

Axl(
  {
    pattern: "yta",
    desc: "YouTube song Downloader",
    type: "downloader",
  },
  async ({client, msg, text}) => {
if(!text)
return msg.reply("_*Need YouTube url*_");
var ytmp4 = await
fetch(`https://vihangayt.me/download/ytmp4?url=${text}`)
var yt = await ytmp4.json()
await client.sendMessage(msg.chat, { text: `*Downloading ${yt.data.title}*` },{ quoted: msg})
await client.sendMessage(msg.chat, { audio :{url: yt.data.vid_720p },  mimetype:"audio/mpeg", contextInfo: { externalAdReply: {
title: "AXL-MD✅️",
body: "𝙎𝙤𝙣𝙜 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙙 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮🚀",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true,
thumbnailUrl: `${yt.data.thumbnail}` }}, }, {quoted: msg })
  });

Axl(
  {
    pattern: "ytv",
    desc: "YouTube 720p Video Downloader",
    type: "downloader",
  },
  async ({client, msg, text}) => {
if(!text)
return msg.reply("_*Need YouTube Url*_");
var ytmp4 = await
fetch(`https://vihangayt.me/download/ytmp4?url=${text}`)
var yt = await ytmp4.json()
await client.sendMessage(msg.chat, { text: `*Downloading ${yt.data.title}*` },{ quoted: msg})
await client.sendMessage(msg.chat,{video:{ url: yt.data.vid_720p}, contextInfo: { externalAdReply: {
title: "AXL-EMDI",
body: "𝙑𝙞𝙙𝙚𝙤 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙙 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮🚀",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/cmqBKpH.jpg" }}, caption : `_*${yt.data.title}*_`}, {quoted : msg})
  });

Axl(
  {
    pattern: "song",
    desc: "YouTube song Downloader",
    type: "downloader",
  },
  async ({client, msg, text}) => {
if(!text)
return msg.reply("_*Need Song Query/Url*_");
var res = await axios.get(`https://api-viper-x.koyeb.app/api/song?name=${text}`)
var song = res.data
await client.sendMessage(msg.chat, { text: `*_Downloading ${song.data.title}_*` },{ quoted: msg})
const zeta = await (await fetch(`${song.data.downloadUrl}`)).buffer()
await client.sendMessage(msg.chat, { audio :zeta,  mimetype:"audio/mpeg", contextInfo: { externalAdReply: {
title: "AXL-EMDI✅️",
body: "𝙎𝙤𝙣𝙜 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙙 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮🚀",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/cmqBKpH.jpg" }} }, {quoted: msg })
  });

Axl(
  {
    pattern: "video",
    desc: "YouTube Video Downloader",
    type: "downloader",
  },
  async ({client, msg, text}) => {
if(!text)
return msg.reply("_*Need YouTube Url*_");
let result = await axios.get(`https://api-aswin-sparky.koyeb.app/api/downloader/yt_video?search=${text}`);
var yt = await result.data
await client.sendMessage(msg.chat, { text: `*_Downloading ${yt.result.title}_*` },{ quoted: msg})
await client.sendMessage(msg.chat, { video :{ url: yt.result.url }, contextInfo: { externalAdReply: {
title: "AXL-MD✅️",
body: "𝙑𝙞𝙙𝙚𝙤 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙙 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮🚀",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/cmqBKpH.jpg" }}, caption: `*${yt.result.title}*`}, {quoted: msg })
});

Axl(
  {
    pattern: "spotify",
    desc: "Spotify Downloader",
    type: "downloader",
  },
  async ({client, msg, text}) => {
if(!text)
return msg.reply("_*Need Spotify Url*_");
var sex = await fetch(`https://vihangayt.me/download/spotify?url=${text}`);
var fek = await sex.json();
msg.reply(`                       *DOWNLOADED*\n\n> *SONG* : ${fek.data.song} \n> *ARTIST* : ${fek.data.artist} \n> *RELEASED* : ${fek.data.release_date}\n\n𝐄𝐙𝐑𝐀 𝐗𝐃`)
await client.sendMessage(msg.chat, { audio :{ url: fek.data.url } , mimetype : 'audio/mpeg', contextInfo: { externalAdReply: {
title: "AXL-EMDI✅️",
body: `🎧 ${fek.data.song}`,
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/cmqBKpH.jpg" }}, }, {quoted: msg })
});

Axl(
  {
    pattern: "pinterest",
    desc: "Pinterest Downloader",
    type: "downloader",
  },
  async ({client, msg, text}) => {
if(!text)
return msg.reply("_*Need Pinterest Url*_");
var {result} = await getJson(`https://api.lokiser.xyz/api/pinterestdl?link=${text}`)
await msg.sendFromUrl(result.LokiXer.url,{ contextInfo: { externalAdReply: {
title: "AXL-EMDI✅️",
body: `PLAY WITH ME?`,
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/cmqBKpH.jpg" }}, caption: (X.CAPTION)}, {quoted: msg})
});

Axl(
  {
    pattern: "xvd",
    desc: "Xvideo Downloader",
    type: "downloader",
  },
  async ({client, msg, text}) => {
if(!text)
return msg.reply("_*Need Xvideo Url*_");
var sex = await fetch(`https://raganork-network.vercel.app/api/xvideos/download?url=${text}`);
var fek = await sex.json();
await Louis.sendMessage(msg.chat,{video:{ url: fek.url}, contextInfo: { externalAdReply: {
title: "KUNNAN✅️",
body: "𝙑𝙞𝙙𝙚𝙤 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙙 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮😮‍💨",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/cmqBKpH.jpg" }}, caption : (X.CAPTION)}, {quoted : msg})
});*/
