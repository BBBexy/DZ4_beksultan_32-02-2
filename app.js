let data = ["name", "John", "lastname", "Black", "age", "23"];
let result = {};

for (let i = 0; i < data.length; i += 2) {
    let key = data[i];
    let value = data[i + 1];
    result[key] = value;
}
//
function calculateAverage(...numbers) {
    let sum = numbers.reduce(function (acc, num) {
        return acc + num;
    }, 0);

    let average = sum / numbers.length;
    console.log("Средняя арифметическая:", average);
    }

    calculateAverage(5, 10, 15, 20);
  //
    function getDataType(value) {
    console.log(typeof value);
    }

getDataType(false);
getDataType("hello world!");
getDataType(42);
//
function reverseString(inputString) {
    let reversedString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }
    console.log(reversedString);
    }
reverseString("hello");