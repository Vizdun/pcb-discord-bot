import { Message } from "discord.js"
import { badExample } from "../nn"

export function setBad(message: Message, args: string[]) {
	message.fetchReference().then((msg) => {
		badExample(msg.content)
	})
	message.channel.send("Added bad example")
}
