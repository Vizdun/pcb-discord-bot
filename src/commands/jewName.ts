const jewNameParts = [
	["Reu", "Mo", "He", "Ja", "Schmu", "Schlo", "Meno", "Eli", "Shi", "Yeru"],
	[
		"bediah",
		"donai",
		"shel",
		"mon",
		"mo",
		"diah",
		"chay",
		"phraim",
		"muel",
		"liel",
	],
	[
		"Kronen",
		"Gold",
		"Wasser",
		"Edel",
		"Bergen",
		"Braun",
		"Katzen",
		"Baren",
		"Apple",
		"Blumen",
	],
	[
		"mann",
		"berg",
		"stein",
		"meyer",
		"owsky",
		"heimer",
		"baum",
		"feld",
		"bach",
		"heimer",
	],
]

import { Message } from "discord.js"

export function jewName(message: Message, args: string[]) {
	const tag: string = message.author.tag.split("#")[1]
	var jewName = ""

	jewName += jewNameParts[0][parseInt(tag[0])]
	jewName += jewNameParts[1][parseInt(tag[1])]
	jewName += " "
	jewName += jewNameParts[2][parseInt(tag[2])]
	jewName += jewNameParts[3][parseInt(tag[3])]

	message.channel.send(jewName)
}
