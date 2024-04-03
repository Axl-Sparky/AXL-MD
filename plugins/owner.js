const { Axl } = require("../lib/");
const util = require("util");
const axios = require("axios");
const fetch = require("node-fetch");
const fs = require("fs");

const {
    exec
} = require("child_process");



Axl(
    {
        pattern: "restart",
        fromMe: true,
        desc: "Restart the bot",
        type: "sudo",
    },
    async ( {
        msg, args, client
    }) => {
        await msg.reply("_Restarting..._");
        exec("node index.js", (error, stdout, stderr) => {
            if (error) {
                return client.sendMessage(msg.chat , `Error: ${error}`);
            } return;
        });
    });


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
