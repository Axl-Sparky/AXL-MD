const { Axl } = require("../lib/");
const axios = require("axios");
const fetch = require("node-fetch");

Axl(
  {
    pattern: "play",
    desc: "YouTube song Downloader",
    type: "downloader",
  },
  async ({client, msg, text}) => {
if(!text)
return msg.reply("_Enter a song name!_\n_Eg:- play starboy_");
    let love = await client.sendMessage(msg.chat, { text: "_Please Wait_\n_Searching...!_" }, { quoted: msg });
var res = await axios.get(`https://api-viper-x.koyeb.app/api/song?name=${text}`)
var song = res.data
  await client.sendMessage(msg.chat, { text: `*_Downloading ${song.data.title}_*`, edit: love.key }, { quoted: msg });  
const axl = await (await fetch(`${song.data.downloadUrl}`)).buffer()
await client.sendMessage(msg.chat , {audio : axl ,  mimetype : 'audio/mpeg'} , { quoted : msg })
  });




Axl(
  {
    pattern: "song",
    desc: "YouTube song Downloader",
    type: "downloader",
  },
  async ({client, msg, text}) => {
if(!text)
return msg.reply("_Enter a yt url/song name!_");
    let andi = await client.sendMessage(msg.chat, { text: "_Please wait_\n_Searching...!_" }, { quoted: msg });
var res = await axios.get(`https://api-viper-x.koyeb.app/api/song?name=${text}`)
var song = res.data
  await client.sendMessage(msg.chat, { text: `*_Downloading ${song.data.title}_*`, edit: andi.key }, { quoted: msg });  
const axl = await (await fetch(`${song.data.downloadUrl}`)).buffer()
await client.sendMessage(msg.chat , {audio : axl ,  mimetype : 'audio/mpeg'} , { quoted : msg })
  });
