const {
    Ezra,
    } = require("../lib/");
const { performance } = require('perf_hooks');


/*Ezra(
    {
        pattern: "jid",
    desc: "no words",
    type: "user",
    },
    async ({
        msg, client, match
    }) => {
msg.reply(`${msg.jid}`)
    })*/

Ezra(
    {
        pattern: "rtime",
    desc: "To check runtime",
    type: "user",
    },
    async ({
        msg, client 
    }) => {
        return msg.adreply(`_Bot Runtime : ${await msg.runtime()}_`)
    });

Ezra(
    {
        pattern: "utime",
    desc: "To check uptime",
    type: "user",
    },
    async ({
        msg, client 
    }) => {
        return msg.adreply(`_Bot Uptime : ${await msg.uptime()}_`)
    });

Ezra(
    {
        pattern: "alive",
    desc: "To check bot alive",
    type: "user",
    },
    async ({
        msg, client 
    }) => {
        return msg.reply(`_ʜᴇy.. ī ᴀᴍ ꜱᴛɪʟʟ ᴀʟɪᴠᴇ..!_\n\n_ʀᴜɴᴛɪᴍᴇ :- ${await msg.runtime()}_`)
    });
