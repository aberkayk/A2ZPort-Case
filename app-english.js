const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function findLongestWord(sentence) {
	const words = sentence.match(/[a-zA-Z]+/g) || [];

	if (words.length === 0) {
		return null; // No valid words found
	}

	let longestWord = "";
	let maxVowels = 0;

	words.forEach((word) => {
		if (word.length > longestWord.length) {
			longestWord = word;
			maxVowels = countVowels(word);
		} else if (word.length === longestWord.length) {
			const vowelsCount = countVowels(word);
			if (vowelsCount > maxVowels) {
				longestWord = word;
				maxVowels = vowelsCount;
			}
		}
	});

	return longestWord;
}

function countVowels(word) {
	const vowels = "aeiouAEIOU";
	return word.split("").filter((char) => vowels.includes(char)).length;
}

// Ask for user input
rl.question("Enter a sentence: ", (sentence) => {
	const result = findLongestWord(sentence);
	console.log(`The longest word with the most vowels is: ${result}`);
	rl.close();
});
