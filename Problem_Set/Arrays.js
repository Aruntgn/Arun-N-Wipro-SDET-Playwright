//MODULE 4: ARRAYS

/*
1. Find Largest and Smallest Number in Array
Problem:
Find the largest and smallest number in an array.
Approach:
Loop through the array and compare values.
*/

let arr = [12, 45, 7, 89, 23, 5];

let largest = arr[0];
let smallest = arr[0];

for (let num of arr) {

    if (num > largest) {
        largest = num;
    }

    if (num < smallest) {
        smallest = num;
    }
}

console.log("\n1. Find Largest and Smallest Number in Array:");
console.log("Largest:", largest);
console.log("Smallest:", smallest);

/*Output:
Largest: 89 
Smallest: 5
*/

/*
2. Remove Duplicate Elements
Problem:
Remove duplicate elements from an array.
Approach:
Use Set to store unique values.
*/

let numbers = [1, 2, 3, 2, 4, 5, 1, 6];
let unique = [...new Set(numbers)];
console.log("\n2. Remove Duplicate Elements:");
console.log("Original Array:", numbers);
console.log("Array without Duplicates:", unique);

/*Output:
Original Array: [1, 2, 3, 2, 4, 5, 1, 6]
Array without Duplicates: [1, 2, 3, 4, 5, 6]
*/  

/*
3. Sort Array Without Built-in sort()
Problem:
Sort array without using sort().
Approach:
Use Bubble Sort algorithm.
*/

let arr1 = [5, 2, 8, 1, 9];

for (let i = 0; i < arr1.length; i++) {

    for (let j = 0; j < arr1.length - 1; j++) {

        if (arr1[j] > arr1[j + 1]) {

            let temp = arr1[j];
            arr1[j] = arr1[j + 1];
            arr1[j + 1] = temp;
        }
    }
}

console.log("\n3. Sort Array Without Built-in sort():");
console.log("Original Array:", [5, 2, 8, 1, 9]);
console.log("Sorted Array:", arr1);

/*Output:
Sorted Array: [1, 2, 5, 8, 9]
*/

/*
4. Find Second Largest Number
Problem:
Find the second largest number in an array.
Approach:
Sort the array and access second last element.
*/

let arr2 = [10, 45, 23, 89, 67];
arr2.sort((a, b) => b - a);
console.log("\n4. Find Second Largest Number:");
console.log("Original Array:", [10, 45, 23, 89, 67]);
console.log("Second Largest:", arr2[1]);

/*Output:
Second Largest: 67
*/

/*
5. Merge Two Arrays and Remove Duplicates
Problem:
Merge two arrays and remove duplicate elements.
Approach:
Combine arrays using spread operator and remove duplicates using Set.
*/

let arr3 = [1, 2, 3, 4];
let arr4 = [3, 4, 5, 6];

let merged = [...new Set([...arr3, ...arr4])];

console.log("\n5. Merge Two Arrays and Remove Duplicates:");
console.log("Array 1:", arr3);
console.log("Array 2:", arr4);
console.log("Merged Array:", merged);

/*Output:
Array 1: [1, 2, 3, 4]
Array 2: [3, 4, 5, 6]
Merged Array: [1, 2, 3, 4, 5, 6]
*/

// ----------------------------------------------------------
// KEY TAKEAWAYS
// ----------------------------------------------------------
/*
- Arrays are ordered collections of values.
- Use loops or built-in methods to manipulate arrays.
- Set can be used to remove duplicates.
- Custom sorting can be implemented using algorithms like Bubble Sort.
- Array methods like reverse() and sort() are available from the Array prototype.
- Spread operator simplifies merging arrays.
*/


