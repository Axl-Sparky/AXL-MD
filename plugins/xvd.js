>const { commands, eypz } = require('../command');

eypz({
    pattern: "xvd",
    desc: "dl xvd Performance.",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

if(!q) return m.reply("_Give a xv link for download...!_");


let endi = await fetch(`https://api-aswin-sparky.koyeb.app/api/downloader/xdl?url=${q}`)

await m.reply('_Downloading...!_');



let js = await endi.json()
let url = js.data


await conn.sendMessage(from, { video: { url: url } }, { quoted: mek })


} catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
