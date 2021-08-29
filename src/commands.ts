import { Message } from "discord.js"
import { jewName } from "./commands/jewName"
import { setBad } from "./commands/setBad"
import { setGood } from "./commands/setGood"

export const commands: {
	[key: string]: (message: Message, args: string[]) => void
} = {
	jewname: jewName,
	setbad: setBad,
	setgood: setGood,
}
