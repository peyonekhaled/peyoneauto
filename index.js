const express = require('express');

const app = express()

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

const {userAccount} = require("sphinx-run");
const Discord = require("discord.js-selfbot-v13");
const client = new Discord.Client({ checkUpdate: false });


new userAccount(client, Discord).autoReaction({
channel: "1107663756500140085",
user: "1091131848383537213",
timeout: 8000,
customBotId: ['990617618899681370','824119071556763668', '848794165537800193', '294882584201003009', '894633316010066032', '1106538922697297930', '806018563307601930', '1113447941189926943', '1131684868619763843', '1201075397182361650', '1177168018711773214', '1373262268443262976', '1362180184228368554', '1257610790752489495'],
blacklistedwords: ["tokens", "auto", "test", "تست"]
})


client.login(process.env.token)

process.on("unhandledRejection", error => {
  console.log(error)
});
