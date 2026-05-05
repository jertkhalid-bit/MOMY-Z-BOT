const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Bot running ✅'));
app.listen(3000);

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.on('ready', () => {
  console.log(`🔥 ${client.user.tag}`);
});

client.login(process.env.TOKEN);

