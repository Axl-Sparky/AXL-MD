const {
    Ezra,
    } = require("../lib/");
const { performance } = require('perf_hooks')
const font = require("@viper-x/fancytext");

Ezra(
    {
        name: "jid",
        category: misc,
    },
    async ({
        msg, client, match
    }) => {
msg.reply(`${msg.jid}`)
    })

Ezra(
    {
        name: "rtime",
        category: "misc",
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
        category: "misc",
        desc: "To check bot uptime"
    },
    async ({
        msg, client 
    }) => {
        return msg.adreply(`_Bot Uptime : ${await msg.uptime()}_`)
    });

/*Ezra(
    {
        name: "wa",
        desc: "wa.me umban✅️",
        category: "converter",
    },
    async ({
        msg, client, match
    }) => {
let data = m.quoted.sender.split("@")[0]
return m.reply(`https://wa.me/${data}?text=${args}`)
    }
    );*/
