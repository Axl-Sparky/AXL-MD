'use strict';
const X = require("./config.js")
const { default: makeWASocket, useMultiFileAuthState, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, generateForwardMessageContent, downloadContentFromMessage, jidDecode } = require('@whiskeysockets/baileys');
const { Sequelize, DataTypes } = require('sequelize');
const { list, uninstall } = require('./lib/database/commands');
const { getFilter } = require('./lib/database/filter');
const { parseJson } = require('./lib/utils');
const { database } = require('./lib/database.js');
const Greetings = require('./lib/database/greetings');
const axios = require('axios');
const pino = require('pino');
const fs = require("fs");
const fx = require("fs-extra");
require('http')
 .createServer(async (req, res) => {})
 .listen(process.env?.PORT || 8080, () => true);

const Users = database.define('Users', {
    name: {
        primaryKey: true,
        unique: false,
        type: DataTypes.STRING,
        allowNull: false
    },
    id: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

//////////////////////////////////////// 
////////  🇵 🇱 🇺 🇬 🇮 🇳 🇸 ////////
////////////////////////////////////////
const commands = [];
function Axl(commandInfo, func) {
  commandInfo.function = func;
  if (commandInfo.pattern) {
    commandInfo.pattern =
      new RegExp(`${X.PREFIX}( ?${commandInfo.pattern})`, "is") || false;
  }
  commandInfo.dontAddCommandList = commandInfo.dontAddCommandList || false;
  commandInfo.fromMe = commandInfo.fromMe || false;
  commandInfo.type = commandInfo.type || "misc";

  commands.push(commandInfo);
  return commandInfo;
}
/////////////////////////////////////////
//sessionid----------------------------
async function MakeSession() {
    try {
        console.log("WRITING SESSION...");
        const {
          data
        } = await axios(`https://paste.c-net.org/${X.SESSION_ID.split(':')[1]}`);
        await fs.writeFileSync("./lib/auth_info_baileys/creds.json", JSON.stringify(data));
        console.log("SESSION CREATED SUCCESSFULLY✅");
      } catch (err) {
        console.log(err);
      }
}
MakeSession();
//------------------------------

async function Connect() {
    try {
        let store = makeInMemoryStore({
            logger: pino().child({ level: 'silent', stream: 'store' })
        });
        
        let { version, isLatest } = await fetchLatestBaileysVersion();
        let { state, saveCreds } = await useMultiFileAuthState('./lib/auth_info_baileys');
        let client = makeWASocket({
            logger: pino({ level: 'silent' }),
            printQRInTerminal: false,
            markOnlineOnConnect: false,
            browser: ['X-Base', 'Chrome', '1.0.0'],
            auth: state,
            version: version
        });
        store.bind(client.ev);

        client.ev.on('connection.update', async (update) => {
            const { connection } = update;
             if (connection === 'open') {
                console.log('[ + ] Connected!');
                //let start = `*_^AXL-EMDI^_*\n\n_CONNECTED..._`
/////////////////////////////////////////
              fs.readdirSync(__dirname + "/plugins").forEach((plugin) => {
              if (plugin.endsWith(".js")) {
              require(__dirname + "/plugins/" + plugin);
              }});
              console.log("Plugins Loaded🤟")
/////////////////////////////////////////
                /*let num = X.SUDO.split(",")[0]
                    client.sendMessage(num + "@s.whatsapp.net", {text : start})*/

                     ///////

              let start = `_AXL MD STARTED..._\n\n_Mode : Public_\n_Prefix : X.HANDLERS_\n_Version : 1.00_\n\n\n_Web : https://axlmd-ajsal-sparky.onrender.com_\n\n\n💗`
let URL = "https://chat.whatsapp.com/HbekCMezwdr6bZXFjTNkLH"
return await client.sendMessage(`X.SUDO.split(",")[0]@s.whatsapp.net` , { text : start,
contextInfo: { externalAdReply: {                                           
title: "AXL MD 💗 ",
body: "Join For Updats",
sourceUrl: URL,
mediaUrl: URL,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: true,
thumbnailUrl: "https://telegra.ph/file/b51deea8df9177d78f35e.jpg" }}},{ quoted: false })




              ///////////
              
            } else if (connection === 'close') {
                console.log('[ ! ] Connection Closed: Reconnecting...');
                await Connect();
             }
        });
        client.ev.on('group-participants.update', async (info) => {
           if (info.action == 'add') {
            let wtext = await Greetings.getMessage('welcome', info.id);
            if (wtext !== false) await client.sendMessage(info.id, { text: wtext });
           } else if (info.action == 'remove') {
            let gtext = await Greetings.getMessage('goodbye', info.id);
            if (gtext !== false) await client.sendMessage(info.id, { text: gtext });
           }
        });
 
        client.ev.on('messages.upsert', async (msg) => {
        // try {
            msg = msg.messages[0];
            if (!msg.message) return;
            msg = await require('./lib/message')(msg, client, store);
            if (msg.chat === 'status@broadcast') return;
/////////////////////////////////////////
            try {
             let user = await Users.findAll({ where: { id: msg.isPrivate ? msg.chat : msg.sender } });
             if (user.length < 1) {
              await Users.create({ name: msg.pushName, id: msg.isPrivate ? msg.chat : msg.sender });
             } else {
              await Users[0]?.update({ name: msg.pushName });
             }
            } catch {}
/////////////////////////////////////////
           
            let filters = await getFilter(msg.chat);
            filters.forEach(async (filter) => {
              let regex = new RegExp(filter.match, 'i');
              if (regex.test(msg.text) &&
                  filter.chat == msg.chat &&
                  !msg.fromBot) await msg.reply({ text: filter.response });
            });
           
/////////////////////////////////////////
/////////////////////////////////////////
///🇵 🇱 🇺 🇬 🇮 🇳 🇸  🇫 🇺 🇳 🇨 ///
/////////////////////////////////////////
    
           commands.map(async (Axl) => {
          // }
           let comman = msg.text;
            let text;
           switch (true) {
           case Axl.pattern && Axl.pattern.test(comman):
             text = msg.text.replace(new RegExp(Axl.pattern, "i"), "").trim();
               //text = msg.text.replace(text = msg.text.replace(new RegExp(`${X.PREFIX}`Axl.pattern, `is`));
                 Axl.function({client, msg, text});
           break;
           case comman && Axl.on === "text":
             text = msg.text
               Axl.function({client, msg, text});
           break;
           case Axl.on === "image" || Axl.on === "photo":
           if (msg.mtype === "imageMessage") {
               Axl.function({client, msg});
           }
           break;
           case Axl.on === "sticker":
           if (msg.mtype === "stickerMessage") {
               Axl.function({client, msg});
           }
           break;
           case Axl.on === "video":
           if (msg.mtype === "videoMessage") {
             Axl.function({client, msg});
           }
           break;
           default:
           break;
           }
           });
           
           
/////////////////////////////////////////
        });

        client.ev.on('contacts.upsert', async (contact) => store.bind(contact));
        client.ev.on('creds.update', saveCreds);
    } catch (e) {
        console.log(e);
    }
}
setTimeout( () => {
    Connect()
    }, 3000)


module.exports = {
 Users,
 Connect,
 Axl,
 commands
};
