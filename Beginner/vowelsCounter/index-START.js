/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

const vowels = ["a", "e", "i", "o", "u"];
function vowelsCounter(text) {
    // An Iterative Approach
    let counter = 0;

    for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++
        }
    }
    return counter

    //Regular Expression Approach

    /* let matchingInstances = text.match(/[aeiou]/gi)

    if (matchingInstances) {
        
        return matchingInstances.length
    } else {
        return 0
    } */
}



module.exports = vowelsCounter;
