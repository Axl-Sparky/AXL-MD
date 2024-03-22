const { Axl } = require("../lib/");
const axios = require("axios");
const fetch = require("node-fetch");

Axl(
  {
    pattern: "song",
    desc: "YouTube song Downloader",
    type: "downloader",
  },
  async ({client, msg, text}) => {
if(!text)
return msg.reply("_Enter a song name_");
    let andi = await client.sendMessage(msg.chat, { text: "_Searching...!_" }, { quoted: msg });
var res = await axios.get(`https://api-viper-x.koyeb.app/api/song?name=${text}`)
var song = res.data
  await client.sendMessage(msg.chat, { text: `*_Downloading ${song.data.title}_*`, edit: andi.key }, { quoted: msg });  
const axl = await (await fetch(`${song.data.downloadUrl}`)).buffer()
await client.sendMessage(msg.chat , {audio : axl ,  mimetype : 'audio/mpeg'} , { quoted : msg })
  });
