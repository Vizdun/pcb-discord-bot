import { Message } from "discord.js";
import { commandPrefix } from "./config.json";
import { onCommand } from "./onCommand";

export function onMessage(message: Message) {
  if (message.content.startsWith(commandPrefix)) onCommand(message);
}
