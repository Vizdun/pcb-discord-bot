import { Message } from "discord.js"
import { commands } from "./commands"

export function onCommand(message: Message) {
	const args = message.content.slice(1).split(" ")
	try {
		commands[args[0].toLowerCase()](message, args)
	} catch (e) {
		message.channel.send("command not found")
	}
}
