const {
  Axl,isPublic
  } = require("../lib/");
const { remini } = require('../lib/remini.js')


Axl(
    {
        pattern: "remini",
        type: "tool",
        fromMe: isPublic,
        desc: "converte a photo HD quality"
    },
    async ({
        client, msg, match
    }) => {
if (!msg.quoted || !(msg.quoted.imageMessage  )) return await msg.reply("_Replay to an photo/image_");
await msg.reply("_Please wait..._");

        let media = await msg.quoted.download()
        let proses = await remini(media, "enhance")
        await client.sendMessage(msg.chat, { image: proses }, { quoted: msg})

  }
);
