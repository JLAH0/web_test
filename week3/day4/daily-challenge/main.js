const sentence = 'The food is not much bad, I like it!'

const wordNot = sentence.indexOf('not');
console.log(wordNot);

const wordBad = sentence.indexOf('bad');
console.log(wordBad);


if(wordNot >= 0 && wordNot < wordBad){
    const toReplace = sentence.substring(wordNot, wordBad + 3)
    console.log(toReplace)

    const newSentence = sentence.replace(toReplace, 'good')
    console.log(newSentence)
}else{
    console.log(sentence)
}