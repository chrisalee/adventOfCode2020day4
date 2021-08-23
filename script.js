// const response = await fetch('https://adventofcode.com/2020/day/4/input');
// const responseText = await response.text();
// const inputs = response.trim().split("\n");

const data = `
  ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
  byr:1937 iyr:2017 cid:147 hgt:183cm

  iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
  hcl:#cfa07d byr:1929

  hcl:#ae17e1 iyr:2013
  eyr:2024
  ecl:brn pid:760753108 byr:1931
  hgt:179cm

  hcl:#cfa07d eyr:2025 pid:166559648
  iyr:2011 ecl:brn hgt:59in
 `;


//cleaned up version of the very bottom
const inputList = dataLong.trim().split("\n\n");
const requiredKeys = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]; 
const entryArrays = inputList.map(
  (entry) => 
      entry
        .replace(/\n/g, " ")
        .split(" ")
        .map(keyValuePair => keyValuePair.split(":")[0])
);

console.log(entryArrays);

//split text into a list of entries
// const inputList = dataLong.trim().split("\n\n");

//   //split the entries into lines
//   //convert the lines into arrays
//   // const splitList = inputList.map(entry => entry.split("\n").map(line => line.trim().split(" ")));
//   // // const mergedList = splitList.map(dataPoint => dataPoint.reduce((combined, current) => combined.concat(current), []));
//   // ///^^^^^^^another way to write above
//   // const mergedList = splitList.map(dataPoint => dataPoint.reduce((combined, current) => [...combined, ...current], []));

// // lines 26-29 can be writtten as:
// //replace new lines with spaces. then split into arrays
// //combine the arrays into a single array
// //convert the resulting array into a set
// //check if all the required fields in the set
// const requiredKeys = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];  //''cid' not included because it is optional

// const entryArrays = inputList.map(
//   (entry) => 
//     new Set(
//       entry
//         .replace(/\n/g, " ")
//         .split(" ")
//         .map(keyValuePair => keyValuePair.split(":")[0])
//   )
// );

// const numberValid = entryArrays.filter((keySet) => 
//     requiredKeys.every(key => keySet.has(key))
// ).length;


// // console.log(entryArrays.map(keySet => requiredKeys.reduce((bool, key) => bool && keySet.has(key), true)));  //is this thing in the set AND is this thing in the set AND is this thing in the set ...  if so come back true

// // console.log(
// //   entryArrays.map((keySet) => 
// //     requiredKeys.every(key => keySet.has(key))
// //   )
// // )

// console.log(numberValid);
