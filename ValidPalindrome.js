/** Solution 1
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.
Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:

Input: "race a car"
Output: false

 * @param {String} s 
 */
const validPalindrome = s => {
    
    if (s === "") {
        return true;
    }
    let i = 0;
    let newString = ""
    for(let i = 0; i < s.length; i++) {
        const element = s[i].toLowerCase();

        if ((element.charCodeAt() > 47 && element.charCodeAt() < 58) || (element.charCodeAt() > 64 && element.charCodeAt() < 91) || (element.charCodeAt() > 96 && element.charCodeAt() < 123)) {

            newString += element   
        }
    }
    
    while(i < newString.length) {
        if (newString[i] !== newString[newString.length - i - 1]) {
            return false;
        }
        i++;
    }
    return true;
    
}