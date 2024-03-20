const {
  Ezra,isPublic, isPrivate
  } = require("../lib/");

Ezra(
    {
        pattern: "mp3",
        desc: "Converts an Video/Voice to Mp3",
        type : "converter",
    },
    async ({
        msg }) => {
        if (!msg.quoted || !(msg.quoted.audioMessage || msg.quoted.videoMessage ))
            return await msg.reply("_Reply to a video or audio message !_");
        let axl = await msg.quoted.download();
     return msg.sendMsg(msg.chat , axl , { mimetype: "audio/mpeg" } , "audio")
    }
);
