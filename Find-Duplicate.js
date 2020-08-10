/**
 * Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]

 * @param {*} numbers 
 */
const findDuplicate = numbers => {

    if (numbers.length <= 0) {
        return []
    }
    const resultArray = [];
    for (num of numbers) {
        if (numbers[Math.abs(num) - 1] < 0) {
            resultArray.push(Math.abs(num));
        }
        numbers[Math.abs(num) - 1] *= -1;
    }
    return resultArray
}
console.log("findDuplicate =>", findDuplicate([4,3,2,7,8,2,3,1]))