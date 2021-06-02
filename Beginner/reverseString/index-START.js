/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    // Code goes here
    // return [...text].reduce((acc, char) => char + acc, '')
    /* if (text === "") {
        return ""
    } else {
        return reverseString(text.substr(1)) + text[0]
    } */
    /* let result = "";

    for (let char of text) {
        result = char + result
    }
    return result; */

    return [...text].reverse().join('')
}



module.exports = reverseString