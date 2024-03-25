const { Axl } = require("../lib/");

Axl(
    {
        pattern: "wave",
        type: "converter",
        desc: "audio in wave format"
    },
    async ({
        msg, client, match
    }) => {
        if (!msg.quoted || !(msg.quoted.audioMessage || msg.quoted.documentMessage ))
            return await msg.reply("_Reply to an Audio Message_");
        let buff = await msg.quoted.download()
msg.sendMsg(msg.chat , buff,{ audiowave : Array.from({length: 30}, () => Math.floor(Math.random() * 100)) , ptt : true , mimetype : "audio/mpeg" } , "audio" )
    }
    );
