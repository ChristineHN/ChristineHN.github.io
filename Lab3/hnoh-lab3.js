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
console.log(`\nExercise #1 - find min, max, and avg`);
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
console.log(`\nExercise #2 - count vowels in the string`);
countVowels("Winter");
countVowels("Exercise");
countVowels("Information Technology Management");
countVowels("COFFEE");

//Exercise #3
function sortNumbers(arr) {
    arr.sort((a, b) => a - b);
    console.log(arr);
}
console.log(`\nExercise #3 - sort numbers from smallest to largest`);
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
console.log(`\nExercise #4 - convert Celsius to Fahrenheit`);
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
console.log(`\nExercise #5 - sort people by age`);
console.log(`Test array #1`);
sortPeople([{ name: 'Michael', age: 23, city: 'Chicago' }, { name: 'Jim', age: 32, city: 'New York' }, { name: 'Joe', age: 52, city: 'St. Louis' }, { name: 'Terry', age: 12, city: 'Des Plaines' }, { name: 'Richard', age: 132, city: 'Miami' }]);
console.log(`Test array #2`);
sortPeople([{ name: 'James', age: 10, city: 'Los Angeles' }, { name: 'Mary', age: 9, city: 'Houston' }, { name: 'John', age: 8, city: 'Phoenix' }, { name: 'Emily', age: 7, city: 'Denver' }, { name: 'William', age: 6, city: 'Boston' }, { name: 'Olivia', age: 5, city: 'Orlando' }, { name: 'Daniel', age: 4, city: 'Austin' }]);
console.log(`Test array #3`);
sortPeople([{ name: 'David', age: 28, city: 'Charlotte' }, { name: 'Ava', age: 25, city: 'San Antonio' }, { name: 'Ethan', age: 32, city: 'Columbus' }, { name: 'Ben', age: 17, city: 'Indianapolis' }, { name: 'Alexander', age: 46, city: 'Detroit' }, { name: 'Isabella', age: 15, city: 'Minneapolis' }, { name: 'Jacob', age: 29, city: 'Jacksonville' }, { name: 'Madison', age: 8, city: 'Louisville' }, { name: 'Chloe', age: 39, city: 'Baltimore' }]);