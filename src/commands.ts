import { Message } from "discord.js";
import { jewName } from "./commands/jewName";
import { CommandArguments } from "./parseCommand";

export const commands: {
  [key: string]: (message: Message, args: CommandArguments) => void;
} = {
  jewname: jewName,
};
