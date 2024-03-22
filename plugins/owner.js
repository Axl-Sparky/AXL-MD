const {
    Axl
} = require("../lib/");

Axl(
    {
        pattern: "mee",
        fromMe: "true",
        type: "owner",
        desc: "self mention "
    },
    async ({
        client, msg, text
    }) => {
msg.sendMsg(msg.chat , `_@${msg.sender.split("@")[0]}_`  , {   mentions : [msg.sender]} )
  }
);
