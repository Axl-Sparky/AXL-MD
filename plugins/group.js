const { Axl } = require("../lib/");
const X = require("../config.js");



 Axl(
     {
        pattern: "invite",
        fromMe: true,
        desc: "Share Group invitation link",
        type: "group"
    },
    async ({
        msg, client, match
    }) => {
	    
	    let Y = (msg.sender);



if (!await msg.isGroup) return msg.reply("_This is a group command!_")

        if (!await msg.isAdmin(msg.me)) return msg.reply("_I'm not an admin_")

        if (!await msg.isAdmin(Y)) return msg.reply("_This command for only group admins_")
        let code = await client.groupInviteCode(msg.chat)
        return msg.reply('https://chat.whatsapp.com/' + code)
    })




Axl(
    {
        pattern: "demote",
        fromMe: true,
        desc: "Demotes a user from admin",
        type: "group"
    },
    async ({
        msg, client, args, match, text
    }) => {
        try {
		
		let Y = (msg.sender);


         
            if(!msg.isGroup) {
                         return await msg.reply("_This is a group command !_");
       }
            if (!await msg.isAdmin(msg.me)) return msg.reply("_I'm not an admin_")
            if (!await msg.isAdmin(msg.sender)) return msg.reply("_This command for only group admins_")
            if (!(match || msg.quoted)) return msg.reply("_Mention a user._")
            if (match) {
                var user = match.replace("@", "") + '@s.whatsapp.net';
            } else if (msg.quoted.sender) {
                var user = msg.quoted.sender;
            } else if (msg.mentionedJid) {
                var user = args + '@s.whatsapp.net';
            }

            //if (!await msg.isAdmin(user)) return msg.reply("_Admin access not extended to the user._");

            await client.groupParticipantsUpdate(msg.chat, [user], "demote");
            msg.sendMsg(msg.chat , `_@${user.split("@")[0]} demoted from admin!_`, { mentions : [user] , quoted : msg })

        } catch (e) {
            console.log(e);
        }

    });

/*Axl({
	pattern : "left",
	fromMe: true,
	type : "group",
	desc: "leaving a group🚀",
}, async ({msg, client}) => {
       if(!msg.isGroup) {
                         return await msg.reply("_This is a group command !_");
       }
	await client.groupLeave(msg.chat)
});*/

                                   
