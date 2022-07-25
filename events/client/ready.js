module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`Client is now logged in as ${client.user.username})`);
  },
};
