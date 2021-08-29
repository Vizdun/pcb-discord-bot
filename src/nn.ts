import fs from "fs"
import natural from "natural"

var classifier = natural.BayesClassifier.restore(
	JSON.parse(fs.readFileSync("./nn.json").toString()),
)

export function isBad(text: string) {
	return classifier.classify(text) == "bad"
}

export function badExample(text: string) {
	classifier.addDocument(text, "bad")
	classifier.train()
	fs.writeFileSync("./nn.json", JSON.stringify(classifier))
}

export function goodExample(text: string) {
	classifier.addDocument(text, "ok")
	classifier.train()
	fs.writeFileSync("./nn.json", JSON.stringify(classifier))
}
