import { Message } from "discord.js";
import { commands } from "./commands";
import { CommandArguments } from "./parseCommand";

export function executeCommand(
  command: string,
  message: Message,
  args: CommandArguments
) {
  try {
    commands[command](message, args);
  } catch (e) {
    message.channel.send("command execution failed");
  }
}
