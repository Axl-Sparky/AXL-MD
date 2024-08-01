const {
  Axl,isPublic
  } = require("../lib/");
const { remini } = require('../lib/remini.js')



Axl({
    pattern: "h",
    desc: "To check ping",
    type: "user",
}, async ({ client, msg }) => {
   
let data = {
      jid: msg.chat,
      button: [

// VISIT SITE CODE 📈📈📈📈

        {
          type: "url",
          params: {
            display_text: "visit",
            url: "https://axlmd-ajsal-sparky.onrender.com",
            merchant_url: "https://axlmd-ajsal-sparky.onrender.com",
          },
        },

// VISIT SITE CODE 📈📈📈📈
        
        {
          type: "url",
          params: {
            display_text: "wa.owner",
            url: "https://wa.me/919539412641?text=*_Hey_*",
            merchant_url: "https://wa.me/919539412641?text=*_Hey_*",
          },
        },


],

            
          

/// TEXT AND FOOTER EDIT 📈📈📈📈


      header: {
        title: "_➤ Hey !_\n_This is a simple multi divice whatsapp bot_\n_created by Team Sparky_\n\n\n *_Visit our site ⇩ -- ( visit )_*\n *_Contact Owner ⇩  --  ( wa.owner )_*",
        subtitle: "WhatsApp Bot",
        hasMediaAttachment: false,
      },
      footer: {
        text: "︲ᴄᴏᴅᴇᴅ ʙy ᴛᴇᴀᴍ-ꜱᴩᴀʀᴋy",
      },
      body: {
        text: "_© ᴀxʟ-ᴍᴅ_",
      },
    };


    return await msg.sendMsg(msg.chat, data, {}, "interactive");

});
