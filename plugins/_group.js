const { Axl } = require("../lib/");
const X = require("../config.js");



 Axl(
     {
        pattern: "invite",
        fromMe: true,
        desc: "Share's Group invitation link",
        type: "group"
    },
    async ({
        msg, client, match
    }) => {
let X = (msg.me);
let Y = (msg.sender);

if (!await msg.isGroup) return msg.reply("_This is a group command!_")

        if (!await msg.isAdmin(X)) return msg.reply("_I'm not an admin_")

        if (!await msg.isAdmin(Y)) return msg.reply("_This command for only group admins_")
        let code = await client.groupInviteCode(msg.chat)
        return msg.reply('_https://chat.whatsapp.com/' + code_)
    })
