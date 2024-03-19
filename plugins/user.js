const {
    Ezra,
    } = require("../lib/");
const { performance } = require('perf_hooks')
const font = require("@viper-x/fancytext");

Ezra(
    {
        name: "jid",
        category: "tool",
    },
    async ({
        msg, client, match
    }) => {
msg.reply(`${msg.jid}`)
    })

Ezra(
    {
        name: "rtime",
        category: "user",
        desc: "To check bot runtime"
    },
    async ({
        msg, client 
    }) => {
        return msg.adreply(`_Bot Runtime : ${await msg.runtime()}_`)
    });

Ezra(
    {
        name: "utime",
        category: "user",
        desc: "To check bot uptime"
    },
    async ({
        msg, client 
    }) => {
        return msg.adreply(`_Bot Uptime : ${await msg.uptime()}_`)
    });

Ezra(
    {
        name: "alive",
        category: "user",
        desc: "To check alive"
    },
    async ({
        msg, client 
    }) => {
        return msg.reply(`_ʜᴇy.. ī ᴀᴍ ꜱᴛɪʟʟ ᴀʟɪᴠᴇ..!_\n\n_ʀᴜɴᴛɪᴍᴇ :- ${await msg.runtime()}_`)
    });
