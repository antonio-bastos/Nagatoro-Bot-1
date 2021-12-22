const Discord = require("discord.js");

const colors = require("../../configuration/colors.json");
const emojis = require("../../configuration/emojis.json");

module.exports = {
  name: "ping",
  category: "misc",
  description: "Shows the bots ping",
  run: async (message) => {
    if (!message.user) return;

    const pingembed = new Discord.MessageEmbed()
      .setColor(colors.info)
      .setTimestamp()
      .setDescription(
        emojis.Hype +
          `**Pong! Time took:** __**${
            Date.now() - message.createdTimestamp
          }**__ **ms**`
      )
      .setFooter("Requested by " + message.user.tag);

    message.channel.send({ embeds: [pingembed] });
  },
};
