import { Message } from "discord.js"
import { goodExample } from "../nn"

export function setGood(message: Message, args: string[]) {
	message.fetchReference().then((msg) => {
		goodExample(msg.content)
	})
	message.channel.send("Added good example")
}
