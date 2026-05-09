//MODULE 2: STRINGS

/*
1. Reverse a String Without Using reverse()
Problem:
Reverse a string without using built-in reverse methods.
Approach:
Loop through the string from the end and build a new string.
*/

let str = "JavaScript";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log("\n1. Reverse a String Without Using reverse():");
console.log("Original String:", str);
console.log("Reversed String:", reversed);

/*Output:
Reversed String: tpircSavaJ
*/

/*
2. Count Number of Vowels
Problem:
Count vowels in a string.
Approach:
Loop through characters and check whether each character is a vowel.
*/

let text = "Programming";
let count = 0;
let vowels = "aeiouAEIOU";

for (let char of text) {

    if (vowels.includes(char)) {
        count++;
    }
}

console.log("\n2. Count Number of Vowels:");
console.log("Original String:", text);
console.log("Vowel Count:", count);

/*Output:
Vowel Count: 3
*/

/*
3. Check Palindrome String
Problem:
Check whether a string is palindrome.
Approach:
Reverse the string and compare with original.
*/

let word = "madam";

let reversed1 = word.split("").reverse().join("");

console.log("\n3. Check Palindrome String:");
console.log("Original String:", word);
console.log("Reversed String:", reversed1);
if (word === reversed1) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

/*Output:
Palindrome
*/  

/*
4. Capitalize First Letter of Each Word
Problem:
Capitalize the first letter of each word in a string.  
Approach:
Split the string into words, capitalize first letter of each word, and join back.
*/

let sentence = "javascript is awesome";

let result = sentence
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");

console.log("\n4. Capitalize First Letter of Each Word:");
console.log("Original String:", sentence);
console.log("Modified String:", result);

/*Output:
Modified String: Javascript Is Awesome
*/ 

/*
5. Find Longest Word in Sentence
Problem:
Find the longest word in a sentence.
Approach:
Split sentence into words and compare lengths.
*/

let sentence1 = "JavaScript makes web development powerful";
let words = sentence1.split(" ");
let longest = "";

for (let word of words) {

    if (word.length > longest.length) {
        longest = word;
    }
}

console.log("\n5. Find Longest Word in Sentence:");
console.log("Original Sentence:", sentence1);
console.log("Longest Word:", longest);

/*Output:
Longest Word: development
*/

//----------------------------------------------------------
// KEY TAKEAWAYS
//----------------------------------------------------------
/*
- Strings are sequences of characters and can be manipulated using various methods(using loops and built-in methods).
- split(), join(), slice(), and includes() are powerful string methods.
- map() is useful for transforming words in a sentence.
- String processing is important for real-world applications.
- Common string operations include reversing, counting characters, checking palindromes,
  capitalizing words, and finding longest words.
- String manipulation often involves loops, conditionals, 
  and built-in methods like split(), join(), and includes().
*/
