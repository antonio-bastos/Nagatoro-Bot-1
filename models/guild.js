const mongoose = require("mongoose");

const guildSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildID: String,
  guildName: String,
  prefix: String,
  logchannelId: String,
  welcomechannelId: String,
});

module.exports = mongoose.model("Guild", guildSchema, "guilds");
