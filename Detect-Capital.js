/**
 * Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

    All letters in this word are capitals, like "USA".
    All letters in this word are not capitals, like "leetcode".
    Only the first letter in this word is capital, like "Google".

Otherwise, we define that this word doesn't use capitals in a right way. 
 */

const deletectCapital = word => {

    if (word.length <= 0) {
        return false;
    }
    if (word.length === 1) {
        return true;
    }
    let type = "";

    if (word[0] === word[0].toUpperCase() && word[1] === word[1].toUpperCase()) {
        type = "UU";
    }
    else if (word[0] === word[0].toUpperCase() && word[1] === word[1].toLowerCase()) {
        type = "UL";
    }
    else if (word[0] === word[0].toLowerCase() && word[1] === word[1].toLowerCase()) {
        type = "LL";
    }
    else {
        type = "LU";
    }
    if (word.length === 2 && type === "LU") {
        return false;
    }

    let current = type;
    for (let i = 2; i < word.length; i++) {
        const element = word[i];
        if (word[0] === word[0].toUpperCase() && element === element.toUpperCase()) {
            current = "UU";
        }
        else if (word[0] === word[0].toUpperCase() && element === element.toLowerCase()) {
            current = "UL";
        }
        else if (word[0] === word[0].toLowerCase() && element === element.toLowerCase()) {
            current = "LL";
        }
        else if (word[0] === word[0].toLowerCase() && element === element.toUpperCase()) {
            return false
        }
        if (type !== current) {
            return false;
        }
    }
    return true;

}