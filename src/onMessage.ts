import { Message } from "discord.js"
import { COMMAND_PREFIX } from "./globals"
import { onCommand } from "./onCommand"

export function onMessage(message: Message) {
	if (message.content.startsWith(COMMAND_PREFIX)) onCommand(message)
}
