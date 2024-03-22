const { Axl } = require("../lib/");

Axl({
    pattern: "ping",
    desc: "To check ping",
    type: "user",
}, async ({ client, msg }) => {
    const start = new Date().getTime();
    let pong = await client.sendMessage(msg.chat, { text: "*ᴄʜᴇᴄᴋɪɴɢ ᴘɪɴɢ...*" }, { quoted: msg });
    const end = new Date().getTime();
    return await client.sendMessage(msg.chat, { text: `*Rᴇꜱᴘᴏɴꜱᴇ ɪɴ* *${end - start}* *ᴍꜱ*`, edit: pong.key }, { quoted: msg });
});
