const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "coupledp",
  version: "1.1",
  haspermission: 0,
  credit: "Loid Butter (Fixed by ChatGPT)",
  cooldown: 5,
  description: "Get random couple dp",
  commandCategory: "image"
};

module.exports.run = async function ({ api, event }) {
  try {
    const cachePath = path.join(__dirname, "cache");

    // ensure cache folder exists
    if (!fs.existsSync(cachePath)) {
      fs.mkdirSync(cachePath);
    }

    // fetch API data
    const { data } = await axios.get(
      "https://tanjiro-api.onrender.com/cdp?api_key=tanjiro"
    );

    // download male image
    const maleImg = await axios.get(data.male, {
      responseType: "arraybuffer"
    });
    const malePath = path.join(cachePath, "img1.png");
    fs.writeFileSync(malePath, maleImg.data);

    // download female image
    const femaleImg = await axios.get(data.female, {
      responseType: "arraybuffer"
    });
    const femalePath = path.join(cachePath, "img2.png");
    fs.writeFileSync(femalePath, femaleImg.data);

    // send message
    return api.sendMessage({
      body: "💑 Here is your Couple DP",
      attachment: [
        fs.createReadStream(malePath),
        fs.createReadStream(femalePath)
      ]
    }, event.threadID, event.messageID);

  } catch (error) {
    console.error(error);
    return api.sendMessage("❌ Error fetching couple dp!", event.threadID, event.messageID);
  }
};
