import { Client, Intents, Message, version } from "discord.js";
import { token } from "./config.json";
import { onMessage } from "./onMessage";
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("ready");
  client.user?.setActivity(
    `Running on Node.js ${process.version} and Discord.js ${version}`,
    {
      type: "PLAYING",
    }
  );
});

client.on("messageCreate", (message: Message) => {
  if (message.author.bot) return;
  onMessage(message);
});

client.login(token);
