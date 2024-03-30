>const {
    Axl
} = require("../lib/");
const fetch = require("node-fetch");

Axl(
    {
        pattern: "lyrics",
        fromMe: true,
        desc: "song lyrics searcher",
        type: "search",
    },
    async ({
        msg, client, text
    }) => {
        if (!text)
            return await msg.reply("_Enter a song name_");
let dl = await client.sendMessage(msg.chat, {
            text: "_searching..._"
        }, {
            quoted: msg
        })
try {
let sample = await fetch(`https://api-aswin-sparky.koyeb.app/api/search/lyrics?search=${text}`);
var data = await sample.json();
let lyrics = data.data
await msg.adreply(`${lyrics}`)
} catch (e) {
client.sendMessage(msg.chat, {
                text: `_Error_`, edit: dl.key
            })
}

});
