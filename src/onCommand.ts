import { Message } from "discord.js";
import { executeCommand } from "./executeCommand";
import { parseCommand } from "./parseCommand";

export function onCommand(message: Message) {
  const args = parseCommand(message);
  executeCommand(args.command, message, args);
}
