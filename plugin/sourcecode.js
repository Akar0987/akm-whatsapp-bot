const axios = require("axios");
const path = require("path");
const logo = path.join(__dirname, "../docs/images/akmlogo.mp4");
const thumb = path.join(__dirname, "../docs/images/akmlogo.png");

module.exports = {
  name: "sourcecode",
  usage: "sourcecode",
  desc: "Provids the source code of the bot.",
  eg: ["sourcecode"],
  group: false,
  owner: false,
  async handle(Bot) {
    const templateButtons = [
      {
        index: 1,
        urlButton: {
          displayText: "⭐ Project Link!",
          url: "https://github.com/akm-akm/akm-whatsapp-bot/",
        },
      },
      {
        index: 2,
        urlButton: {
          displayText: "Contact Me!",
          url: "https://github.com/akm-akm/akm-whatsapp-bot/issues",
        },
      },
      
    ];

    axios
      .get(`https://api.github.com/repos/akm-akm/akm-whatsapp-bot`)
      .then((response) => {
        let data = response.data;

        msg =
          "\n 🤖 🤖  *AKM  🤖  BOT*  🤖 🤖\n\n" +
          "👨‍💻 *Owner:* ```" +
          data.owner.login +
          "```\n" +
          "💻 *Name:*  ```" +
          data.name +
          "```\n" +
          "🉐 *Language:*     ```" +
          data.language +
          "```\n" +
          "⭐ *Stars:*             ```" +
          data.stargazers_count +
          "```\n" +
          "🔀 *Forks:*             ```" +
          data.forks_count +
          "```\n" +
          "🧰 *Issues:*           ```" +
          data.open_issues +
          "```\n" +
          "🎨 *Watchers:*      ```" +
          data.watchers_count +
          "```\n" +
          "💾 *Size:*               ```" +
          (data.size / 1024).toFixed(0) +
          " KB```\n" +
          "📄 *License:*         ```" +
          data.license.key +
          " ```\n";
        const templateMessage = {
          text: msg,
          footer: "Bot made by Aditya K Mandal",
          templateButtons: templateButtons,
        };
        Bot.client.sendMessage(Bot.from, templateMessage);
      })

      .catch((e) => {
        Bot.errorlog(e);
      });
  },
};
