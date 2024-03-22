const { getContentType, generateWAMessageContent, generateForwardMessageContent, waUploadToServer, downloadContentFromMessage, jidDecode } = require('@whiskeysockets/baileys');
const fileType = require("file-type");
const { getBuffer } = require('./utils.js');
const fs = require('fs');
const {
    BOT_INFO
} = require("../config.js");

const isUrl = (url) => {
        return new RegExp(
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
            "gi"
        ).test(url);

module.exports = async (msg, client, store) => {
 if (msg.key) {
  msg.me = client.user.id.includes(':') ? client.user.id.split(':')[0]+'@s.whatsapp.net' : client.user.id;
  msg.chat = msg.key.remoteJid;
  msg.client = client;
  msg.id = msg.key.id;
  msg.fromBot = msg.isBaileys = msg.id.startsWith('BAE5') && msg.id.length === 16
  msg.fromMe = msg.key.fromMe
  msg.isGroupChat = msg.isGroup = msg.key.remoteJid.endsWith('g.us')
  msg.isPrivateChat = msg.isPrivate = msg.key.remoteJid.endsWith('.net')
  msg.sender = msg.from = msg.fromMe ? msg.me : msg.isGroupChat ? msg.key.participant : msg.chat
  if (msg.isGroupChat) msg.participant = msg.key.participant
}
if (msg.message) {
 msg.mtype = getContentType(msg.message)
 msg.text = (msg.mtype === 'conversation') ? msg.message.conversation : (msg.mtype == 'imageMessage') ? msg.message.imageMessage.caption : (msg.mtype == 'videoMessage') ? msg.message.videoMessage.caption : (msg.mtype == 'extendedTextMessage') ? msg.message.extendedTextMessage.text : (msg.mtype == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.mtype == 'listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.mtype == 'templateButtonReplyMessage') ? msg.message.templateButtonReplyMessage.selectedId : (msg.mtype === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId || msg.msg) : ''
 msg.msg = (msg.mtype == 'viewOnceMessage' ? msg.message[msg.mtype].message[getContentType(msg.message[msg.mtype].message)] : msg.message[msg.mtype])
 msg.quoted = msg.msg?.contextInfo ? msg.msg.contextInfo.quotedMessage : false
 msg.mentions = msg.msg?.contextInfo ? msg.msg.contextInfo.mentionedJid : []
 if (msg.quoted) {
  msg.quoted.id = msg.msg.contextInfo.stanzaId || false
  msg.quoted.chat = msg.msg.contextInfo.remoteJid || msg.chat
  msg.quoted.fromBot = msg.quoted.isBaileys = msg.quoted.id ? msg.quoted.id.startsWith('BAE5') && msg.quoted.id.length === 16 : false
  msg.quoted.sender = msg.quoted.from = msg.msg.contextInfo.participant || false
  msg.quoted.mentions = msg.msg.contextInfo ? msg.msg.contextInfo.mentionedJid : []
  msg.quoted.fromMe = msg.quoted.me = msg.quoted.sender === msg.me
  msg.quoted.mtype = getContentType(msg.quoted)
  msg.quoted.text = msg.quoted.text || msg.quoted.caption || msg.quoted.conversation || msg.quoted.contentText || msg.quoted.selectedDisplayText || msg.quoted.title || false
  msg.quoted.image = msg.quoted.imageMessage || false
  msg.quoted.video = msg.quoted.videoMessage || false
  msg.quoted.audio = msg.quoted.audioMessage || false
  msg.quoted.sticker = msg.quoted.stickerMessage || false
  msg.quoted.document = msg.quoted.documentMessage || false
  msg.quoted.download = async () => await msg.load(msg.quoted.imageMessage || msg.quoted.videoMessage || msg.quoted.audioMessage || msg.quoted.stickerMessage);


//////////////////////////////////////////////////////////////////////////////////
const downloadMedia = (message, pathFile) =>
new Promise(async (resolve, reject) => {
    let type = Object.keys(message)[0];
    let mimeMap = {
        imageMessage: "image",
        videoMessage: "video",
        stickerMessage: "sticker",
        documentMessage: "document",
        audioMessage: "audio",
    };
    let mes = message;
    if (type == "templateMessage") {
        mes = message.templateMessage.hydratedFourRowTemplate;
        type = Object.keys(mes)[0];
    }
    if (type == "buttonsMessage") {
        mes = message.buttonsMessage;
        type = Object.keys(mes)[0];
    }
    try {
        if (pathFile) {
            const stream = await downloadContentFromMessage(
                mes[type],
                mimeMap[type]
            );
            let buffer = Buffer.from([]);
            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            }
            await fs.promises.writeFile(pathFile, buffer);
            resolve(pathFile);
        } else {
            const stream = await downloadContentFromMessage(
                mes[type],
                mimeMap[type]
            );
            let buffer = Buffer.from([]);
            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            }
            resolve(buffer);
        }
    } catch (e) {
        reject(e);
    }
});
//////////////////////////////////////////////////////////////////////////////////
/*msg.quoted.download = async(pathFile) => {
               await downloadMedia(msg.quoted, pathFile)
}*/
/////////////////////////////////////////////////////////////////////////////////

 }
}

msg.isOwner = msg.sender === msg.me
msg.reply= async(txt) =>{
 return await client.sendMessage(msg.chat, { text: txt }, { quoted: msg});

}
msg.replay = async (message, options, jid = msg.chat) => {
 if (message.hasOwnProperty('text')) {
  return await client.sendMessage(jid, { text: message.text, mentions: (await msg.getMentions(message.text)), ...message}, { quoted: msg, ...options});
 } else if (message.hasOwnProperty('image')) {
  return await client.sendMessage(jid, { image: message.image, caption: (message?.caption || ''), mimetype: (message?.mimetype || 'image/png'), thumbnail: Buffer.alloc(0), mentions: (await msg.getMentions(message?.caption)), ...message }, { quoted: msg, ...options });
 } else if (message.hasOwnProperty('video')) {
  return await client.sendMessage(jid, { video: message.video, caption: (message?.caption || ''), mimetype: (message?.mimetype || 'video/mp4'), thumbnail: Buffer.alloc(0), mentions: (await msg.getMentions(message?.caption)), ...message }, { quoted: msg, ...options });
 } else if (message.hasOwnProperty('audio')) {
  return await client.sendMessage(jid, { audio: message.audio, ptt: (message?.ptt || false), mimetype: (message?.mimetype || 'audio/mpeg'), waveform: Array(40).fill().map(() => Math.floor(Math.random() * 99)), ...message }, { quoted: msg, ...options });
 } else if (message.hasOwnProperty('document')) {
  return await client.sendMessage(jid, { document: message.document, caption: (message?.caption || ''), mimetype: (message?.mimetype || 'application/pdf'), mentions: (await msg.getMentions(message?.caption)), ...message }, { quoted: msg, ...options });
 } else if (message.hasOwnProperty('sticker')) {
  return await client.sendMessage(jid, { sticker: message.sticker, mimetype: (message?.mimetype || 'image/webp'), ...message }, { quoted: msg, ...options });
 } else if (message.hasOwnProperty('poll')) {
  return await client.sendMessage(jid, { poll: { name: message.poll.title, values: message.poll.options }, mentions: (await msg.getMentions(message.title + '\n' + message.poll.options.join('_'))), ...message }, { quoted: msg, ...options });
 } else if (message.hasOwnProperty('delete')) {
  return await client.sendMessage(jid, { delete: message.delete.key });
 } else if (message.hasOwnProperty('edit')) {
  return await client.relayMessage(jid, { protocolMessage: { key: message.edit.key, type: 14, editedMessage: { conversation: message.edit.text, mentions: (await msg.getMentions(message.edit.text)) } }, }, {});
 }
}
msg.sendFromUrl = async (url, options = {}) => {
  let buff = await getBuffer(url);
  let mime = await fileType.fromBuffer(buff);
  let type = mime.mime.split("/")[0];
  
  if (type === "audio") {
    options.mimetype = "audio/mpeg";
  } else if (type === "application") {
    type = "document";
  }
  
  return client.sendMessage(msg.chat, { [type]: buff, ...options }, { ...options });
}
msg.isAdmin = async (who) => {
 let group = await client.groupMetadata(msg.chat);
 let participant = group.participants.filter(p => p.id == who);
 if (participant.length != 0) return (participant[0].admin === 'superadmin' || participant[0].admin === 'admin') ? true : false;   
 else return false;
}
msg.isParticipant = async (who, chat = msg.chat) => {
 let group = await client.groupMetadata(chat);
 let participant = group.participants.filter(p => p.id == who);
 if (participant.length == 0) return false;
 return true;
}
msg.getMentions = async (message) => {
 let mentions = [];
 try { 
   mentions = [...message.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net');
 } catch {
   mentions = [];
 }
 return mentions;
}
 ////////////////TESTWR❤️‍🩹❤️‍🩹❤️‍🩹❤️‍🩹🚀❤️‍🩹❤️‍🩹/////////////
 let ajxal = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "displayName": "ᴀxʟ-ʙᴏᴛ-ᴍᴅ  V2","vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=919539412641:919539412641\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
      
msg.adreply = async (teks) => {                                           
            client.sendMessage(msg.chat, { text: teks, contextInfo: { externalAdReply: {

title: BOT_INFO.split(";")[0],
                                                                  
body: BOT_INFO.split(";")[1],

sourceUrl: "",

mediaUrl: "",

mediaType: 1,

showAdAttribution: true,

renderLargerThumbnail: false,

thumbnailUrl: BOT_INFO.split(";")[2] }}}, { quoted : ajxal });
  }
      /////////////////////////
msg.runtime = async () => {
          seconds = Number(`${process.uptime()}`);
          var d = Math.floor(seconds / (3600 * 24));
          var h = Math.floor(seconds % (3600 * 24) / 3600);
          var m = Math.floor(seconds % 3600 / 60);
          var s = Math.floor(seconds % 60);
          var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
          var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
          var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
          var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
          return dDisplay + hDisplay + mDisplay + sDisplay;
        }

 msg.uptime = async () => {
        const duration = process.uptime();
        const seconds = Math.floor(duration % 60);
        const minutes = Math.floor((duration / 60) % 60);
        const hours = Math.floor((duration / (60 * 60)) % 24);

        const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

        return formattedTime;
    }

 ///////////////////////////******+////////📍📍📍📍📍/////

 msg.sendMsg = async(chat, content, opt = {
    packname: "Viper"
}, type = "text") => {
    {
        switch (type.toLowerCase()) {
			
            case "text": {
                return client.sendMessage(msg.chat, {
                    text: content, ...opt,
                }, {
                    ...opt
                });
            } break;
			
            case "image": {
                if (Buffer.isBuffer(content)) {
                    return client.sendMessage(msg.chat, {
                        image: content, ...opt
                    }, {
                        ...opt
                    });
                } else if (isUrl(content)) {
                    let media = await (await fetch(content)).buffer()
                    return client.sendMessage(msg.chat,
                        {
                            image: media, ...opt
                        }, {
                            ...opt
                        });
                }
            } break;

	    case "video": {
                if (Buffer.isBuffer(content)) {
                    return client.sendMessage(msg.chat, {
                        video: content, ...opt
                    }, {
                        ...opt
                    });
                } else if (isUrl(content)) {
                    let media = await (await fetch(content)).buffer()
                    return client.sendMessage(msg.chat,
                        {
                            video: media, ...opt
                        }, {
                            ...opt
                        });
                }
            } break;
			
	    case "audio": {
                if (Buffer.isBuffer(content)) {
                    return client.sendMessage(msg.chat, {
                        audio: content, ...opt
                    }, {
                        ...opt
                    });
                } else if (isUrl(content)) {
                    let media = await (await fetch(content)).buffer()
                    return client.sendMessage(msg.chat,
                        {
                            audio: media, ...opt
                        }, {
                            ...opt
                        });
                }
            } break;
			
            case "sticker": {
                let {
                    data,
                    mime
                } = await m.getFile(content);
                if (mime == "image/webp") {
                    let buff = await writeExifWebp(data, opt);
                    await client.sendMessage(
                        msg.chat,
                        {
                            sticker: {
                                url: buff
                            }, ...opt
                        },
                        opt
                    );
                } else {
                    mime = await mime.split("/")[0];

                    if (mime === "video") {
                        await client.sendImageAsSticker(msg.chat, content, opt);
                    } else if (mime === "image") {
                        await client.sendImageAsSticker(msg.chat, content, opt);
                    }
                }

            } break;
			
        }
    }
 }
 
 ////?????????/?//UMBIYENGIL DELETE CHEYY MYE😮‍💨///////////
msg.load = async (message) => {
 let mime = (message.msg || message).mimetype || ''
 let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
 let stream = await downloadContentFromMessage(message, messageType);
 let buffer = Buffer.from([]);
 for await(let chunk of stream) {
   buffer = Buffer.concat([buffer, chunk]);
 }
 return buffer;
}
client.getName = async (id) => {
   id = id.toString();
   if (id.endsWith('net')) {
   if (id == client.user.id) return client.user.name;
   let s = store.contacts[id]
   try { s = s.name } catch { s = '+'+id.split('@')[0] }
   return s;
  } else {
   return id;
  }
 }
 return msg;
}
