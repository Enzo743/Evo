const { Client } = require("discord.js");
const client = new Client({ intents: ["Guilds"] });

client.config = require("./config.json");

client
  .login(client.config.token)
  .then(() => {
    console.log(`client logged in as ${client.user.username}`);
    client.user.setActivity(`with ${client.guilds.cache.size} guild(s)`);
  })
  .catch((err) => console.log(err));
