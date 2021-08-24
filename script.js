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
//PART 2 optimized
const inputList = data.trim().split("\n\n");
const requiredKeys = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]; 
const entryObjects = inputList.map((entry) => 
  entry
    .replace(/\n/g, " ")
    .split(" ")
    .map(keyValuePair => keyValuePair.split(":"))
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {})
);

const checkInRange = (numString, min, max) => {
  const num = parseInt(numString);
  return min <= num && num <= max;
}

const completenessCheck = (obj) => requiredKeys.every(key => obj[key]);
const validityCheck = ({ byr, iyr, eyr, hgt, hcl, ecl, pid }) => {
  const byrCheck = checkInRange(byr, 1920, 2002);
  const iyrCheck = checkInRange(iyr, 2010, 2020);
  const eyrCheck = checkInRange(eyr, 2020, 2030);
  const hgtCheck = /^(?:(?:(?:59|6[0-9]|7[0-6])in)|(?:(?:1[5-8][0-9]|19[0-3])cm))$/.test(hgt);
  const hclCheck = /^#[0-9a-f]{6}$/.test(hcl);
  const eclCheck = /^(?:amb|blu|brn|gry|grn|hzl|oth)$/.test(ecl);
  const pidCHeck = /^\d{9}$/.test(pid);
  
  const results = {byrCheck, iyrCheck, eyrCheck, hgtCheck, hclCheck, eclCheck, pidCHeck};
  // console.log(results);
  // console.log(Object.values(results).every(bool => bool));
  return (byrCheck && iyrCheck && eyrCheck && hgtCheck && hclCheck && eclCheck && pidCHeck);
};

const validPassports = entryObjects.filter(entry => completenessCheck(entry) && validityCheck(entry)).length;

console.log(validPassports);

// PART 2
const inputList = data.trim().split("\n\n");
const requiredKeys = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]; 
const entryObjects = inputList.map((entry) => 
  entry
    .replace(/\n/g, " ")
    .split(" ")
    .map(keyValuePair => keyValuePair.split(":"))
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {})
);
//for each object
//check if all the required fields are there

//validations needed:
// byr (Birth Year) - four digits; at least 1920 and at most 2002.
// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
// hgt (Height) - a number followed by either cm or in:
// If cm, the number must be at least 150 and at most 193.
// If in, the number must be at least 59 and at most 76.
// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
// pid (Passport ID) - a nine-digit number, including leading zeroes.
// cid (Country ID) - ignored, missing or not.

const checkInRange = (numString, min, max) => {
  const num = parseInt(numString);
  return min <= num && num <= max;
}

const completenessCheck = (obj) => requiredKeys.every(key => obj[key]);
const validityCheck = ({ byr, iyr, eyr, hgt, hcl, ecl, pid }) => {
  const byrCheck = checkInRange(byr, 1920, 2002);
  const iyrCheck = checkInRange(iyr, 2010, 2020);
  const eyrCheck = checkInRange(eyr, 2020, 2030);
  
  const hgtPattern = /^(\d+)(cm|in)$/;
  let hgtCheck = false;
  if(hgtPattern.test(hgt)) {
    const [_, numString, unit] = hgt.match(hgtPattern);
    const num = parseInt(numString);
    hgtCheck = ((unit === "cm" && checkInRange(numString, 150,193)) || (unit === 'in' && checkInRange(numString, 59, 76)));
  };
  
  const hclCheck = /^#[0-9a-f]{6}$/.test(hcl);
  const eclCheck = /^(?:amb|blu|brn|gry|grn|hzl|oth)$/.test(ecl);
  const pidCHeck = /^\d{9}$/.test(pid);
  
  const results = {byrCheck, iyrCheck, eyrCheck, hgtCheck, hclCheck, eclCheck, pidCHeck};
  return (byrCheck && iyrCheck && eyrCheck && hgtCheck && hclCheck && eclCheck && pidCHeck);
};
console.log(entryObjects.filter(entry => completenessCheck(entry) && validityCheck(entry)).length);

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PART 1
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
