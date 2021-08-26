import { Message } from "discord.js"
import { jewName } from "./commands/jewName"

export const commands: {
	[key: string]: (message: Message, args: string[]) => void
} = {
	jewname: jewName,
}
