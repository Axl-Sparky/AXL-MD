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
        pattern: "save",
        fromMe: true,
        type: "owner",
        desc: "save videos or images",
    },
    async ({
        msg, client, args
    }) => {
if (!msg.quoted) {
        return msg.reply("_Reply to Anyone's Status!_");
}
let res = await msg.quoted.download();
      if(msg.quoted.videoMessage){
       await client.sendMessage(msg.chat, { video :res ,  mimetype:"video/mp4"}, {quoted: msg })
      } else if(msg.quoted.imageMessage){
      await client.sendMessage(msg.chat, { image :res ,  mimetype:"image/jpeg"}, {quoted: msg })
      }
    }
	);


Axl(
    {
        pattern: "restart",
        fromMe: true,
        desc: "Restart the bot",
        type: "owner",
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
