const path = require("path");
const fs = require("fs");
const {
  MessageType
} = require("@adiwajshing/baileys");
const faq = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/faq.json"))
);
msgl = "🤖🤖🤖 *XXX-BOT FAQs* 🤖🤖🤖\n";
const faqs = (infor4, client, xxx3) =>
  new Promise((resolve, reject) => {
    const infor5 = { ...infor4 };
    const xxx = { ...xxx3 };
    const from = infor5.from;
    let msgl = "";
    faq.forEach((element) => {
     
      msgl +=
        "\n🤔 *" +
        element.question +
        "*\n" +
        "😐 ```" +
        element.answer +
        "```\n";
    });
    client.sendMessage(from, msgl, MessageType.text, {
      quoted: xxx,
    });
    resolve();
  });
module.exports.faqs = faqs;