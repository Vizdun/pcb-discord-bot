import { Message } from "discord.js"

export function onBad(message: Message) {
	message.reply("bad")
}
