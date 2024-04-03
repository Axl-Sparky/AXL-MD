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
        pattern: "mute",
        fromMe: true,
        desc: "Mutes the group.",
        type: "group"
    },
    async ({
        msg, client, match
    }) => {
	    
        if(!msg.isGroup) {
                         return await msg.reply("_This is a group command !_");
       }
        if (!await msg.isAdmin(msg.me)) return msg.reply("_I'm not an admin_")
        if (!await msg.isAdmin(msg.sender)) return msg.reply("_This command for only group admins !_")
        await client.groupSettingUpdate(msg.chat , 'announcement');
        return await msg.reply("_Group Muted !_");
    })


Axl(
    {
        pattern: "unmute",
        fromMe: true,
        desc: "Mutes the group.",
        type: "group"
    },
    async ({
        msg, client, match
    }) => {
	    
if(!msg.isGroup) {
                         return await msg.reply("_This is a group command !_");
       }
        if (!await msg.isAdmin(msg.me)) return msg.reply("_I'm not an admin_")
        if (!await msg.isAdmin(msg.sender)) return msg.reply("_This command for only group admins !_")
        await client.groupSettingUpdate(msg.chat , 'not_announcement');
        return await msg.reply("_Group Unmuted !_");
    })


Axl(
    {
        pattern: "promote",
        fromMe: true,
        desc: "Promotes a user to admin",
        type: "group"
    },
    async ({
        msg, client, args, match, text }) => {
        try {

		if(!msg.isGroup) {
                         return await msg.reply("_This is a group command !_");
       }
            if (!await msg.isAdmin(msg.me)) return msg.reply("_Admin access not conferred._")
            if (!await msg.isAdmin(msg.sender)) return msg.reply("_Only for authorized administrators._")

            if (!(match || msg.quoted)) return msg.reply("_Replay to a user!_")
            if (match) {
                var user = match.replace("@", "") + '@s.whatsapp.net';
            } else if (msg.quoted.sender) {
                var user = msg.quoted.sender;
            } else if (msg.mentionedJid) {
                var user = args + '@s.whatsapp.net';
            }

            /*if (await msg.isAdmin(user) === true) return msg.reply("_The user is currently in an admin role._");*/

            await client.groupParticipantsUpdate(msg.chat, [user], "promote");
            msg.sendMsg(msg.chat , `_@${user.split("@")[0]} promoted to admin!_`, { mentions : [user] , quoted : msg})
        } catch (e) {
            console.log(e);
        }

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
            if (!(match || msg.quoted)) return msg.reply("_Replay to a user!_")
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

                                   
