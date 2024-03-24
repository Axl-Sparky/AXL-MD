const { Axl } = require("../lib/");

Axl({
    pattern: "ping",
    desc: "To check ping",
    type: "user",
}, async ({ client, msg }) => {
    const start = new Date().getTime();
    let pong = await client.sendMessage(msg.chat, { text: "_Checking Ping..._" }, { quoted: msg });
    const end = new Date().getTime();
    return await client.sendMessage(msg.chat, { text: `_Response in_ _${end - start}_ _Ms_`, edit: pong.key }, { quoted: msg });
});
