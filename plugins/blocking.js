const {
    Axl
} = require("../index.js");

Axl(
    {
        pattern: "block",
        fromMe: true,
        desc: "block a user",
        type: "owner",
    },
    async ({
        msg, client, text, match
    }) => {

if (!text) return msg.reply("_Enter a whatsapp number !_");

let dl = await client.sendMessage(msg.chat, {
            text: "_Wait a sec !_"
        }, {
            quoted: msg
        })

try {

let hho = `${text}`

await client.updateBlockStatus(hho + "@s.whatsapp.net", "block")

  await client.sendMessage(msg.chat, {
                text: `_User Blocked_`, edit: dl.key
                  
//await msg.reply("_User Blocked_")
  

} catch (e) {
            client.sendMessage(msg.chat, {
                text: `_Error_`, edit: dl.key
            })

   }

});


Axl(
    {
        pattern: "unblock",
        fromMe: true,
        desc: "unblock a user",
        type: "owner",
    },
    async ({
        msg, client, text, match
    }) => {

if (!text) return msg.reply("_Enter a whatsapp number !_");

let guh = await client.sendMessage(msg.chat, {
            text: "_Wait a sec !_"
        }, {
            quoted: msg
        })

try {

let oih = `${text}`
    
await client.updateBlockStatus(oih + "@s.whatsapp.net", "block")

  await client.sendMessage(msg.chat, {
                text: `_User Unblocked_`, edit: guh.key
                  
//await msg.reply("_User Blocked_")
  

} catch (e) {
            client.sendMessage(msg.chat, {
                text: `_Error_`, edit: guh.key
            })

   }

});
