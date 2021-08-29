import { Message } from "discord.js"
import { commandPrefix } from "./config.json"
import { isBad } from "./nn"
import { onBad } from "./onBad"
import { onCommand } from "./onCommand"

export function onMessage(message: Message) {
	if (message.content.startsWith(commandPrefix)) onCommand(message)
	if (isBad(message.content)) {
		onBad(message)
		return
	}
}
