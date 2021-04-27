firstWord = prompt('Insert a word')
secondWord = prompt('Insert another word')

if (firstWord.length > secondWord.length) {
    console.log(secondWord, firstWord);
} else if (secondWord.length > firstWord.length) {
    console.log(firstWord, secondWord);
} else {
    console.log("both words are long the same")
}