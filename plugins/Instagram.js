const { Axl, getJson } = require("../lib/");
const config = require("../config");
const { CAPTION } =  require("../config");


Axl(
    {
        pattern: "insta",
        desc: "no wojjrds",
        type: "user",
    },
    async ({
        msg, client, text
    }) => {

if(!text) return msg.reply("_Enter a insta Url_")

      let { result } = await getJson(`https://afiya-web-api.onrender.com/api/insta?url=${text}`)

  await client.sendMessage(msg.chat, {
            text: "_Wait a sec !_"
        }, {
            quoted: msg
        })

      for (let i = 0; i < result.length; i++) {
      await msg.sendFromUrl(result[i], {quoted: msg,
caption: (config.CAPTION)});
}


    })
