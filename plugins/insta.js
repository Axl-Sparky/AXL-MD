const {
    Ezra
} = require("../lib/");

Ezra(
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
msg.reply("_Please wiat a moment!_\n_Searching..!_")
      
let koothi = await fetch(`https://api-aswin-sparky.koyeb.app/api/search/ig?search=${text}`);
var data = await koothi.json();
ig = data.data

client.sendMessage(msg.chat, { image: { url: ig.avatar }, caption:`*_ɴᴀᴍᴇ :${ig.name}_*\n_*ᴜꜱᴇʀɴᴀᴍᴇ : ${ig.username}_*\n\n*_ꜰᴏʟʟᴏᴡᴇʀꜱ : ${ig.followers}_*\n*_ꜰᴏʟʟᴏᴡɪɴɢ : ${ig.following}_*\n*_ᴛᴏᴛᴀʟ ᴩᴏꜱᴛꜱ : ${ig.posts}_*\n*_ᴜꜱᴇʀ ʙɪᴏ_* : ${ig.description}` }, { quoted: msg });
  }
);
