import { readFileSync } from "fs"

export const COMMAND_PREFIX = ","
export const TOKEN = readFileSync("./token").toString()
