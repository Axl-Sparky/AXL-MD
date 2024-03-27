const plugins = require("../index.js");
const X = require("../config.js");
const {
    BOT_INFO
} = require("../config.js");
const { Axl } = require("../lib");

Axl(
  {
    pattern: "menu",
    desc: "all command list",
    type: "user",
  },
  async ({client , msg}) => {
      let { prefix } = client;
      let [date, time] = new Date()
        .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
        .split(",");
let usern = msg.pushName;
        const readMore = String.fromCharCode(8206).repeat(4001);
      let menu = `\n╭━━━〘 ${BOT_INFO.split(";")[0]} 〙 ━━━┈\n
│  *ᴏᴡɴᴇʀ*: ${BOT_INFO.split(";")[1]}
│  *ᴅᴀᴛᴇ*: ${date}
│  *ᴛɪᴍᴇ*: ${time}
│  *ᴩʟᴜɢɪɴꜱ*: ${plugins.commands.length}
│  *ᴍᴏᴅᴇ*: ${X.MODE}
│  *ᴩʀᴇꜰɪx*: ${X.PREFIX}
│  *ᴠᴇʀꜱɪᴏɴ*: ${require("../package.json").version}
╰━━━━━━━━━━━━━━━┈\n ${readMore}`

      let cmnd = [];
      let cmd;
      let category = [];
      plugins.commands.map((command, num) => {
        if (command.pattern instanceof RegExp) {
          cmd = command.pattern.toString().split(/\W+/)[1];
        }

        if (!command.dontAddCommandList  && cmd !== undefined) {
          let type = command.type ? command.type.toLowerCase() : "misc";

          cmnd.push({ cmd, type });

          if (!category.includes(type)) category.push(type);
        }
      });
      cmnd.sort();
      category.sort().forEach((cmmd) => {

        menu +=  `\n  ╭──〘 *${cmmd.toUpperCase()}* 〙─┈`;


        let comad = cmnd.filter(({ type }) => type == cmmd);
        comad.forEach(({ cmd }) => {
          menu += `\n_•  ${cmd.trim()}_`;
        });
        menu += `\n ╰─────────────┈`;
      });
menu += `\n\n*_WORK IN PROGRESS.. 🚀✅️_*`;
let TIT =  "AXL-BOT-MD 💗"
let BOD = "Aswin spermy"
let THUM = "https://i.imgur.com/cmqBKpH.jpg"
let URL = "https://chat.whatsapp.com/HbekCMezwdr6bZXFjTNkLH"
return await client.sendMessage(msg.chat , { text : (menu),
contextInfo: { externalAdReply: {                                           
title: TIT,
body: BOD,
sourceUrl: URL,
mediaUrl: URL,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true,
thumbnailUrl: THUM }}},{ quoted: false })

 }
);


//ᴄʀᴇᴀᴛᴇᴅ ʙy  A-J-X-A-L S-P-A-R-K-Y
