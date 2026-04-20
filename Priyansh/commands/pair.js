module.exports.config = {
  name: "pair",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "Fixed by ChatGPT",
  description: "Love Pairing System",
  commandCategory: "Love",
  usages: "pair",
  cooldowns: 5
};

module.exports.run = async function({ api, event, Users, Threads, Currencies }) {
  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];

  // Get user money
  let userData = await Currencies.getData(event.senderID);
  let money = userData.money;

  // Check money
  if (money < 500) {
    return api.sendMessage(
      `💸 You need 500$ for pairing!\n👉 Use ${global.config.PREFIX}work to earn money.`,
      event.threadID,
      event.messageID
    );
  }

  // Get thread users
  let threadInfo = await api.getThreadInfo(event.threadID);
  let allUsers = threadInfo.participantIDs;

  // Random partner
  let partnerID;
  do {
    partnerID = allUsers[Math.floor(Math.random() * allUsers.length)];
  } while (partnerID == event.senderID);

  // Get names
  let userInfo = await api.getUserInfo(event.senderID);
  let partnerInfo = await api.getUserInfo(partnerID);

  let name1 = userInfo[event.senderID].name;
  let name2 = partnerInfo[partnerID].name;

  // Love percentage
  let love = Math.floor(Math.random() * 101);

  // Gender
  let sex = partnerInfo[partnerID].gender;
  let gender = sex == 2 ? "Male 🧑" : sex == 1 ? "Female 👩" : "Unknown";

  // Deduct money
  await Currencies.setData(event.senderID, { money: money - 500 });

  // Download avatars
  let avt1 = (await axios.get(`https://graph.facebook.com/${event.senderID}/picture?height=720&width=720`, { responseType: "arraybuffer" })).data;
  let avt2 = (await axios.get(`https://graph.facebook.com/${partnerID}/picture?height=720&width=720`, { responseType: "arraybuffer" })).data;
  let gif = (await axios.get(`https://i.imgur.com/vcydK3t.gif`, { responseType: "arraybuffer" })).data;

  // Save files
  fs.writeFileSync(__dirname + "/cache/1.png", Buffer.from(avt1));
  fs.writeFileSync(__dirname + "/cache/2.png", Buffer.from(avt2));
  fs.writeFileSync(__dirname + "/cache/love.gif", Buffer.from(gif));

  // Mentions
  let mentions = [
    { id: event.senderID, tag: name1 },
    { id: partnerID, tag: name2 }
  ];

  // Send message
  return api.sendMessage({
    body: `💖 𝗣𝗔𝗜𝗥 𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟 💖\n\n👤 ${name1}\n❤️\n👤 ${name2}\n\n💘 Love: ${love}%\n🧬 Gender: ${gender}\n\n🌹 Stay happy together!`,
    mentions,
    attachment: [
      fs.createReadStream(__dirname + "/cache/1.png"),
      fs.createReadStream(__dirname + "/cache/love.gif"),
      fs.createReadStream(__dirname + "/cache/2.png")
    ]
  }, event.threadID, () => {
    // delete temp files
    fs.unlinkSync(__dirname + "/cache/1.png");
    fs.unlinkSync(__dirname + "/cache/2.png");
    fs.unlinkSync(__dirname + "/cache/love.gif");
  }, event.messageID);
};
