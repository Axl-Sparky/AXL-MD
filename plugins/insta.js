/*
const {
    BOT_INFO
} = require("../config.js");

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
let axl = msg.reply("_Please wiat a moment!_\n_Searching..!_")
      
let koothi = await fetch(`https://api-aswin-sparky.koyeb.app/api/search/ig?search=${text}`);
var data = await koothi.json();
ig = data.data
let ajxal = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "displayName": `${BOT_INFO.split(";")[0]}`,"vcard": `BEGIN:VCARD\nVERSION:2.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${msg.sender.split('@')[0]}:${msg.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
client.sendMessage(msg.chat, { image: { url: ig.avatar }, caption: `_Name : ${ig.name}_\n_Username : ${ig.username}_\n\n_Followers : ${ig.followers}_\n_Following : ${ig.following}_\n_Post : ${ig.posts}_\nBio : ${ig.description}` }, { quoted: ajxal })
 
await client.sendMessage(msg.chat, { text: `_Done!_`, edit: axl.key }, { quoted: msg });  
  }
);
*/
