// string manipulation
// const rb_array = ['<15', '>=15 & <18', '>=18 & <20', '>=20 & <25'];
// const number = 25;

// for (let i = 0; i < rb_array.length; i++) {
//     // Split the string into parts using regular expression
//     const parts = rb_array[i].split(/(<=?|>=?)/).filter(part => part.trim() !== '');
//     console.log(parts);
//     // Extract lower and upper bounds based on the position of the operator
//     const lowerBound = parts[0].trim() === '<' ? Number.NEGATIVE_INFINITY : parseInt(parts[0].trim());
//     const upperBound = parts[parts.length - 1].trim();
//     // If the upper bound is not specified, set it to positive infinity
//     const upperBoundValue = upperBound === '' ? Number.POSITIVE_INFINITY : parseInt(upperBound);
//     console.log(lowerBound, upperBoundValue);
//     // Check if the number falls within the range
//     if (number >= lowerBound && number < upperBoundValue) {
//         console.log(`The condition at index ${i} is satisfied.`);
//         break;
//     }
// }

// const rb_array = ['<15', '>=15 & <18', '>=18 & <20', '>=20 & <25'];
// const number = 23;

// const regex = /([<>]=?)\s*(\d+)/;

// for (let i = 0; i < rb_array.length; i++) {
//     const [, operator, bound] = rb_array[i].match(regex);
//     console.log( bound);
//     const lowerBound = operator === '<' ? Number.NEGATIVE_INFINITY : parseInt(bound);
//     const upperBound = operator === '<=' ? parseInt(bound) : Number.POSITIVE_INFINITY;
    
//     if (number >= lowerBound && number < upperBound) {
//         console.log(`The condition at index ${i} is satisfied.`);
        
//     }
// }


// const compareWithRange = (range) => {
//     const [operator, bound] = range.split(/\s+/);
//     const threshold = parseInt(bound);
    
//     return (number) => {
//         switch (operator) {
//             case '<':
//                 return number < threshold;
//             case '<=':
//                 return number <= threshold;
//             case '>':
//                 return number > threshold;
//             case '>=':
//                 return number >= threshold;
//             default:
//                 return false;
//         }
//     };
// };

// const rb_array = ['<15', '>=15 & <18', '>=18 & <20', '>=20 & <25'];
// const number = 17;

// const satisfiesCondition = rb_array.findIndex(compareWithRange);
// if (satisfiesCondition !== -1) {
//     console.log(`The condition at index ${satisfiesCondition} is satisfied.`);
// }

// const rb_array = ['<15', '>=15 & <18', '>=18 & <20', '>=20 & <25'];
// const number = 17;

// const satisfiesCondition = rb_array.findIndex(range => {
//     const [operator, bound] = range.split(/\s+/);
//     const threshold = parseInt(bound);
//     console.log(threshold);
    
//     switch (operator) {
//         case '<':
//             return number < threshold;
//         case '<=':
//             return number <= threshold;
//         case '>':
//             return number > threshold;
//         case '>=':
//             return number >= threshold;
//         default:
//             return false;
//     }
// });

// if (satisfiesCondition !== -1) {
//     console.log(`The condition at index ${satisfiesCondition} is satisfied.`);
// }

// const operators = {
//     '<': (number, threshold) => number < threshold,
//     '<=': (number, threshold) => number <= threshold,
//     '>': (number, threshold) => number > threshold,
//     '>=': (number, threshold) => number >= threshold
// };

// const rb_array = ['<15', '>=15 & <18', '>=18 & <20', '>=20 & <25'];
// const number = 17;

// for (let i = 0; i < rb_array.length; i++) {
//     const [operator, bound] = rb_array[i].split(/\s+/);
//     const threshold = parseInt(bound);
    
//     if (operators[operator](number, threshold)) {
//         console.log(`The condition at index ${i} is satisfied.`);
//         break;
//     }
// }


// function isWithinRange(number, rangeString) {
//     try {
//       // Split the range string into lower and upper bounds
//       const [lowerBound, upperBound] = rangeString.split("-").map(parseFloat);
  
//       // Check if the number is within the range (inclusive by default)
//       return number >= lowerBound && number <= upperBound;
//     } catch (error) {
//       // Handle invalid range string format
//       console.error("Invalid range format. Please use 'a-b' format.");
//       return false;
//     }
//   }
  
// Define the ranges
// let rb = ['0-15', '15-18', '18-21', '21-25', '25-500'];
// let stab = ['0-78','78-80','80-83', '83-84'];

// // Define the values
// let rbvalue =27;
// let stabvalue = 77.99;

// // Function to check if a value is within a range
// function isWithinRange(value, range) {
//     let [min, max] = range.split('-').map(parseFloat);
//     return value >= min && value <= max;
// }

// // Find the index for rbvalue
// let rbIndex = rb.findIndex(range => isWithinRange(rbvalue, range));

// // Find the index for stabvalue
// let stabIndex = stab.findIndex(range => isWithinRange(stabvalue, range));

// // Declare the 2D array
// let dummyArray = [
//     ["stab/rb", "0-15", "15-18", "18-21", "21-25", "25-500"],
//     ["0-78", "229-61", "812-23", "507-97", "900-62", "180-55"],
//     ["78-80", "868-38", "777-22", "594-50", "144-64", "464-66"],
//     ["80-83", "305-91", "490-34", "505-97", "903-78", "172-65"],
//     ["83-84", "531-61", "973-42", "457-39", "101-24", "578-33"]
// ];


// // Check if indices are found
// if(rbIndex !== -1 && stabIndex !== -1) {
//     // Get the intersection cell value
//     let intersectionValue = dummyArray[stabIndex + 1][rbIndex + 1];
//     console.log('Intersection cell value:', intersectionValue);
// } else {
//     console.log('Intersection not found. Check if the values are within the specified ranges.');
// }

const XLSX = require('xlsx');
const workbook = XLSX.readFile('./payoutsheet.xlsx');
const sheetName = '1';
const worksheet = workbook.Sheets[sheetName];
const sheetDataArray = XLSX.utils.sheet_to_json(worksheet);
sheetDataArray.map((item, index)=>{
    if(item.stab)
})
console.log(sheetDataArray);
// console.log(worksheet);
// Define the values
let rbvalue = 27;
let stabvalue = 77.99;

// Declare the 2D array
let dummyArray = [
    ["stab/rb", "0-15", "15-18", "18-21", "21-25", "25-500"],
    ["0-78", "229-61", "812-23", "507-97", "900-62", "180-55"],
    ["78-80", "868-38", "777-22", "594-50", "144-64", "464-66"],
    ["80-83", "305-91", "490-34", "505-97", "903-78", "172-65"],
    ["83-84", "531-61", "973-42", "457-39", "101-24", "578-33"]
];
// console.log(dummyArray);
// Extract rb and stab from dummyArray
let rb = dummyArray[0].slice(1); // Remove the first element ("stab/rb") from the first row
let stab = dummyArray.slice(1).map(row => row[0]); // Remove the first element from each row

// Function to check if a value is within a range
function isWithinRange(value, range) {
    let [min, max] = range.split('-').map(parseFloat);
    return value >= min && value <= max;
}

// Find the index for rbvalue
let rbIndex = rb.findIndex(range => isWithinRange(rbvalue, range));

// Find the index for stabvalue
let stabIndex = stab.findIndex(range => isWithinRange(stabvalue, range));

// Check if indices are found
if(rbIndex !== -1 && stabIndex !== -1) {
    // Get the intersection cell value
    let intersectionValue = dummyArray[stabIndex + 1][rbIndex + 1];
    console.log('Intersection cell value:', intersectionValue);
} else {
    console.log('Intersection not found. Check if the values are within the specified ranges.');
}
