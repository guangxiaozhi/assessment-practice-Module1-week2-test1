/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function countCharacters(string) {
	// Your code here
	let obj = {}
  let arr = string.split("");
  arr.forEach(char => {
    if(!obj[char]) {
      obj[char] = 0;
    }
    obj[char]++;
  })
  return obj;

}

function duplicateCharMinCount(string, minCount) {
	// Your code here
	let obj = countCharacters(string);
  let arr = [];
  for (let key in obj) {
    if(obj[key] >= minCount) {
      arr.push(key);
    }
  }
  return arr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
