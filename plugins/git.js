const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/bNYbdXa.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater Ajnas*
*owner number wa.me/917736936605*

*bot setting video : https://youtu.be/RlSG4ZgPls0*

*githublink : https://github.com/Ajnas-dz/Amalser_v2*

*audio commads : https://github.com/Ajnas-dz/Amalser_v2/tree/master/uploads*
`}) 

}));
