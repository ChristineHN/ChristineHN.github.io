// Hyesoo Noh
// ITMD 541-01 Graduate Student 

//Exercise #1 
function minMaxAverage(arr) {
    if (arr.length === 0) {
        console.log("Array is empty, please provide an array whose length is greater than 1.");
        return;
    }
    arr.sort((a, b) => a - b);
    let tot = 0;
    for (let i = 0; i < arr.length; i++) {
        tot += arr[i];
    }
    const avg = tot / arr.length;
    console.log(`Total Numbers: ${arr.length}, Min Value: ${arr[0]}, Max Value: ${arr[arr.length - 1]}, Average: ${avg}}`)
}
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([20, 15, 3, 2, 76, 3]);
minMaxAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
minMaxAverage([9]);
minMaxAverage([]);

//Exercise #2
function countVowels(str) {
    const mySet = new Set();
    mySet.add('a');
    mySet.add('i');
    mySet.add('e');
    mySet.add('o');
    mySet.add('u');

    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (mySet.has(str.toLowerCase().charAt(i))) {
            count++;
        }
    }
    const vowel = count > 1 ? "vowels" : "vowel";
    console.log(`${str} : ${count} ${vowel}`);
}
countVowels("Winter");
countVowels("");
countVowels("Information Technology Management");
countVowels("COFFEE");

//Exercise #3
/*o Write a function named `sortNumbers` that takes an array of numbers as the only parameter and returns the array sorted from smallest to largest.
o Use console.log and invocations your sortNumbers function to print three test arrays of your choice to the console. Each test line should output to the console the original array and the sorted array.
 EXAMPLE: Original Array: [9, 4, 6, 2] output Sorted Array: [2, 4, 6, 9] */
function sortNumbers(arr) {
    arr.sort((a, b) => a - b);
    console.log(arr);
}
sortNumbers([9, 4, 6, 2]);
sortNumbers([1, 11, 22, 33, 111, 99, 1, 12, 13]);
sortNumbers([]);
sortNumbers([1]);
sortNumbers([1, 1, 1, 1, 1]);

//Excercise #4
function celsiusToFahrenheit(temp) {
    const f = (temp * 9 / 5) + 32;
    console.log(`${temp} Celsius = ${f} Fahrenheit`);
}

celsiusToFahrenheit(30);
celsiusToFahrenheit(0);
celsiusToFahrenheit(12);
celsiusToFahrenheit("35");
celsiusToFahrenheit("12");


//Example #5
function sortPeople(ppl) {
    ppl.sort((person1, person2) => person1.age - person2.age);
    for (let i = 0; i < ppl.length; i++) {
        console.log(`${ppl[i].name} is ${ppl[i].age} and from ${ppl[i].city}`);
    }
}
sortPeople([{ name: 'Michael', age: 23, city: 'Chicago' }, { name: 'Jim', age: 32, city: 'New York' }, { name: 'Joe', age: 52, city: 'St. Louis' }, { name: 'Terry', age: 12, city: 'Des Plaines' }, { name: 'Richard', age: 132, city: 'Miami' }]);
sortPeople([{ name: 'James', age: 10, city: 'Los Angeles' }, { name: 'Mary', age: 9, city: 'Houston' }, { name: 'John', age: 8, city: 'Phoenix' }, { name: 'Emily', age: 7, city: 'Denver' }, { name: 'William', age: 6, city: 'Boston' }, { name: 'Olivia', age: 5, city: 'Orlando' }, { name: 'Daniel', age: 4, city: 'Austin' }]);