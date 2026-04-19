const axios = require("axios");

module.exports.config = {
  name: "aiReply",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "chiiku pie",
  description: "AI auto reply system",
  commandCategory: "auto",
  usages: "",
  cooldowns: 2
};

module.exports.handleEvent = async function({ api, event }) {
  const { body, threadID, messageID, senderID } = event;

  if (!body) return;

  // Bot apne message pe reply na kare
  if (senderID == api.getCurrentUserID()) return;

  try {
    // Free AI API (example)
    const res = await axios.get(`https://api.simsimi.net/v2/?text=${encodeURIComponent(body)}&lc=en`);

    const reply = res.data.success;

    if (reply) {
      return api.sendMessage(reply, threadID, messageID);
    }

  } catch (err) {
    console.log(err);
  }
};
