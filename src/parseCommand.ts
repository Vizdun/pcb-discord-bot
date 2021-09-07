import { Message } from "discord.js";

const commandRegex = /((?:"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'|\/[^\/\\]*(?:\\[\S\s][^\/\\]*)*\/[gimy]*(?=\s|$)|(?:\\\s|\S))+)(?=\s|$)/
const quoteRegex = /^\"|\"$/g

export interface CommandArguments {
	command: string,
	arguments: string[],
	flags: {
		[index: string]: string
	},
}

export function parseCommand(message: Message) {
	const argsRaw = message.content.slice(1).split(commandRegex).filter((item) => { return item !== "" && item !== " "; }).map((item) => { return item.replace(quoteRegex, "") })
	var args: CommandArguments = {
		command: argsRaw[0],
		arguments: [],
		flags: {}
	}
	var prevFlag = ""
	for (const arg of argsRaw.slice(1)) {
		if (arg.startsWith("-")) {
			const flag = arg.slice(1).replace(/^\"|\"$/g, "")
			args.flags[flag] = ""
			prevFlag = flag
		} else {
			if (prevFlag !== "") {
				args.flags[prevFlag] = arg
			} else {
				args.arguments.push(arg)
			}
			prevFlag = ""
		}
	}
	return args
}