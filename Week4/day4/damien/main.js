/*
1. 'Hello, World, in, a, frame'
2. Break down the string into words
3. Put each word into an array
    1. Remove spaces (whitespaces) at the beginning and end of each word (if any)
4. Loop and put each word on a line
5. Frame the lines into stars
    1. Get length of longest word
    2. Create top frame add '**' at the beginning & end
    3. When writting each line start with '* ' and end with ' *'
    4. For each word calculate difference between its length and the longest word
    5. For each character missing add a space for shorter words
    6. Print each line
    7. Print bottom frame which is the same thing as top frame
*********
* Hello *
* World *
* in *
* a     *
* frame *
*********
*/
let sentence = prompt('Enter a sentence (csv)');// 'Hello, World, in, a, frame,please ';
sentence = sentence || 'Empty';
const splitSentence = value => {
    let result = value.split(',');
    result = trimEachWordOfSentenceArray(result);
    return result;
};
const trimEachWordOfSentenceArray = arr => {
    return arr.map(word => {
        const trimedword = word.trim();
        return trimedword;
    });
};
const getLongestLength = wordsArray => {
    let result = 0;
    for (const word of wordsArray) {
        if (word.length > result) {
            result = word.length;
        }
    }
    return result;
};
const getLines = (wordsArray, maxLen) => {
    let result = '';
    for (const word of wordsArray) {
        // const wordLen = word.length;
        // const diff = maxLen - wordLen;
        // const paddedWord = word + (' ').repeat(diff);
        const paddedWord = word.padEnd(maxLen, ' ');
        result += `* ${paddedWord} *\n`
    }
    return result;
};
const words = splitSentence(sentence);
words;
const longestLength = getLongestLength(words);
longestLength;
const lines = getLines(words, longestLength);
console.log(lines);
const topAndBottomFrame = ('*').repeat(longestLength + 4);
const finalResult = `${topAndBottomFrame}\n${lines}${topAndBottomFrame}`
console.log(finalResult);


SHORT CIRCUTING
const r1 = 3 || 'Orange';
console.log(r1)
const r2 = 'Orange' || 3;
console.log(r2)
const r3 = '' || 0 || 'finally' || false || null || undefined;
console.log(r3)
// Everything falsy: false, 0, '', null, undefined
console.log(3 || 'Orange');
console.log('' || 'Orange');
console.log(true || 0);
console.log(undefined || null);
const person = {
    name: 'Jack',
    age: 34
}
console.log(person.job || 'unemployed');
console.log(0 && 'Orange');
console.log('' && 'Orange');
console.log(true && null);
console.log('Apple' && 'Orange');
const person2 = {
    name: 'Jack',
    age: 45
}
console.log((person2.age > 18) && 'Driving allowed');
if (person2.age > 18) {
    console.log('Driving allowed');
}
else {
    console.log(false);
}
console.log(person2.age > 18 ? 'Driving Allowed' : false)

console.log(person2.age > 18
    ? 'Driving Allowed'
    : (person2.age === 18 ? 'Nearly there' : false))
console.log(
    (person2.age > 18 && 'Driving allowed') || (person2.age === 18 && 'Nearly there') || false
)