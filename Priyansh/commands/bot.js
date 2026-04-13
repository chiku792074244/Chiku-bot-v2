const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Fixed By Arun Kumar",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["𝐓𝐔 𝐘𝐀𝐇𝐈 𝐒𝐎𝐂𝐇 𝐑𝐀𝐇𝐈 𝐇𝐎 𝐍𝐀 𝐊𝐈 𝐂𝐇𝐈𝐊𝐔 𝐊𝐎 𝐏𝐀𝐓𝐀 𝐋𝐔 𝐓𝐎 𝐏𝐀𝐓𝐀 𝐋𝐎 𝐍𝐀 🙄" , "𝐁𝐎𝐓 𝐁𝐎𝐓 𝐌𝐀𝐓 𝐊𝐀𝐑𝐎 𝐕𝐀𝐑𝐍𝐀 𝐌𝐄𝐑𝐀 𝐇𝐄𝐑𝐎 𝐂𝐇𝐈𝐊𝐔 𝐋𝐄𝐊𝐄 𝐁𝐇𝐀𝐆 𝐉𝐀𝐘𝐄𝐆𝐀 𝐓𝐔𝐌𝐇𝐄  📸" , "𝐊𝐘𝐀 𝐌𝐀𝐁𝐀𝐋 𝐋𝐀𝐆 𝐑𝐀𝐇𝐈 𝐇𝐎 𝐏𝐀𝐓𝐎𝐆𝐈 𝐊𝐘𝐀 𝐓𝐔𝐌 🙈" , "𝐌𝐄𝐑𝐄 𝐌𝐀𝐋𝐈𝐊 𝐁𝐎𝐋 𝐑𝐀𝐇𝐀 𝐂𝐇𝐀𝐘 𝐏𝐄 𝐂𝐇𝐀𝐋𝐎𝐆𝐈 𝐓𝐔𝐌 𝐊𝐘𝐀" , "Mere liye Chay Bana Kar LA ,Pura din Dekho Bot BoT🙄" , "Din vicho tere Layi Teym Kadd ke, Kardi me Promise     Milan aungi" ,  "𝐂𝐇𝐈𝐊𝐔 𝐁𝐀𝐁𝐔 𝐊𝐄 𝐓𝐀𝐑𝐀𝐅 𝐒𝐄 𝐌𝐀𝐘 𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 𝐁𝐎𝐋𝐓𝐀 𝐇𝐔 🥺" , "Je koi shaq ni , Kari check ni" , "ME HERAAN HU KI TUM BINA DIMAG KESE REH LETE HO☹️" , "sheHar me Hai rukka baeje Rao Saab ka🙄" , "Bewafa Nikali re tu🙂🤨", "Systemmmmmmm😴" , "Leja Leja tenu 7 samundra paar🙈🙈", "Laado puche manne kyu tera rang kala" , "Moye moye moye moye🙆🏻‍♀🙆🏻‍♀" , "Ye dukh kahe nahi khatm hota 🙁" , "Tum to dokebaz ho" , "you just looking like a wow😶" , "Mera aasmaan dhunde teri zamin" , "Kal ana abhi lunch time hai" , "Jab dekho B0T B0T b0T😒😒", "Chhodo na koi dekh lega🤭", "Kab ayega mere banjaare" , "Tum wahi ho na ,jisko.me.nahi janti 🙂" , "Ye I love you kya hota hai" , "Sunai deta hai mujhe behri nahi hu me   😒" , "so elegent, so beautiful , just looking like a wow🤭" , "began🙂" , "Aayein🤔" , "I Love you baby , mera recharge khtm hone wala h" , "paani paani uncle ji" , "apne Labhar ko dhoka do , daling hme bhi moka do🙈" , "Arry Bas Kar🤣😛" , "Me ni To Kon Be" , "naam adiya kumar 7vi kaksha me padhte hai favret subject begon😘" , "Mera Dimag Mat Khaya kro😒😒" , "Chuppp Saatvi Fail😒" , "Saste Nashe Kab Band kroge" , "Mai Jaanu Ke sath Busy hu yar, mujhe mat balao" , "Haye Jaanu Mujhe Yaad Kiya🙈" , "Hayee ese mt bulaya kro, mujhe sharm aati h" , "System pe system betha rahi chhori bot ki" , "Naach meri Bulbul tujhe pesa milega" , "me idhar se hu aap kidhar se ho" , "Khelega Free Fire🙈🙈" , "aye haye oye hoye aye haye oye hoye😍 bado badi bado badi😘" , "e halo bhai darr rha hai kya" , "akh ladi bado badi" , "haaye garmi😕" , "Ao kabhi haweli pe😍" , "Khelega Free Fire🥴" , "Hallo bai tu darr raha hai kya" , "janu bula raha h mujhe" , "I cant live without you babu😘" , "haa meri jaan" , "Agye Phirse Bot Bot Krne🙄" , "konse color ki jacket pehne ho umm btao na😚" , "dhann khachh booyaah"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
   mess = "{name}"
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `🔶${name}🔶,  \n\n『\n   ${rand} 』\n\n❤️𝙲𝚛𝚎𝚍𝚒𝚝𝚜 : 𝐂𝐇𝐈𝐊𝐔 𝐏𝐈𝐄 𝐗𝐃 🌹 `
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
