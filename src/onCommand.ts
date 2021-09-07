import { Message } from "discord.js"
import { commands } from "./commands"
import { parseCommand } from "./parseCommand"


export function onCommand(message: Message) {
	const args = parseCommand(message)
	try {
		commands[args.command](message, args)
	} catch (e) {
		message.channel.send("command execution failed")
	}
}
