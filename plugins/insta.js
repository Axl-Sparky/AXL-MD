const { Axl, getJson } = require("../lib/");
const { CAPTION } =  require("../config.js");


Axl(
  {
    pattern: "story",
    desc: "insta Downloader",
    type: "downloader",
  },
  async ({client, msg, text}) => {
if(!text)
return msg.reply("_Need a story link_");

  let axl = await client.sendMessage(msg.chat, { text: "_Please wait_\n_Downloading...!_" }, { quoted: msg });


      let { result } = await getJson(`https://afiya-web-api.onrender.com/api/insta?url=${text}`);
      
      for (let i = 0; i < result.data.length; i++) {
        await msg.sendFromUrl(result.data[i].url, {quoted: msg,
caption: (CAPTION)});

await client.sendMessage(msg.chat, { text: `_Downloaded!_`, edit: axl.key }, { quoted: msg });

      }

  });


Axl(
  {
    pattern: "insta",
    desc: "insta Downloader",
    type: "downloader",
  },
  async ({client, msg, text}) => {
if(!text)
return msg.reply("_Need a Instagram link_");

  let axl = await client.sendMessage(msg.chat, { text: "_Please wait_\n_Downloading...!_" }, { quoted: msg });


      let { result } = await getJson(`https://afiya-web-api.onrender.com/api/insta?url=${text}`);
      
      for (let i = 0; i < result.data.length; i++) {
        await msg.sendFromUrl(result.data[i].url, {quoted: msg,
caption: (CAPTION)});

await client.sendMessage(msg.chat, { text: `_Downloaded!_`, edit: axl.key }, { quoted: msg });

      }

  });


Axl(
    {
        pattern: "ig",
        type: "search",
        desc: "search a insta id"
    },
    async ({
        client, msg, text
    }) => {
if (!text) return await msg.reply("_Enter a insta Username_");
//match = match || msg.quoted?.text;
msg.reply("_Searching..!_")
      
let baby = await fetch(`https://api-aswin-sparky.koyeb.app/api/search/ig?search=${text}`);
var data = await baby.json();
ig = data.data

client.sendMessage(msg.chat, { image: { url: ig.avatar }, caption:`*_ɴᴀᴍᴇ : ${sasi.name}_*\n*_ᴜꜱᴇʀɴᴀᴍᴇ : ${ig.username}_*\n*_ꜰᴏʟʟᴏᴡᴇʀꜱ : ${ig.followers}_*\n*_ꜰᴏʟʟᴏᴡɪɴɢ : ${ig.following}_*\n*_ᴛᴏᴛᴀʟ ᴩᴏꜱᴛꜱ : ${ig.posts}_*\n*_ᴜꜱᴇʀ ʙɪᴏ_* : ${ig.description}` }, { quoted: msg });
  }
);
