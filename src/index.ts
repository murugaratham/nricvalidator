// checksum tables
const ST = ["J", "Z", "I", "H", "G", "F", "E", "D", "C", "B", "A"];
const FG = ["X", "W", "U", "T", "R", "Q", "P", "N", "M", "L", "K"];
const M = ["X", "W", "U", "T", "R", "Q", "P", "N", "J", "L", "K"];
let weights = [2, 7, 6, 5, 4, 3, 2]; // read: http://www.ngiam.net/NRIC/NRIC_numbers.pdf
//why? look @ http://www.ngiam.net/NRIC/NRIC_numbers.pdf deeper.
const offsetMap = new Map([
  ["T", 4],
  ["G", 4],
  ["M", 3],
]);

/**
 *
 * @param idToCheck {string} identification number to check
 * @returns {boolean} validation results
 */
export const validate = (idToCheck: string): boolean => {
  if (idToCheck.length !== 9) {
    //short circuit evaulation
    return false;
  }
  const id = idToCheck.toUpperCase().split("");
  const [startChar, ...idArray] = id;
  const endChar = idArray.pop();

  let weight: number = idArray
    .map((value, idx) => parseInt(value, 10) * weights[idx]) // multiply each digit with their respective weights
    .reduce((prev: number, idDigit: number) => prev + idDigit); // sum them up

  const remainder = (offsetMap.get(startChar) || 0 + weight) % 11;

  if (startChar === "S" || startChar === "T") {
    return endChar === ST[remainder];
  } else if (startChar === "F" || startChar === "G") {
    return endChar === FG[remainder];
  } else if (startChar === "M") {
    return endChar === M[remainder];
  }
  return false;
};

export const generate = (): string => {
  const startChar = ["S", "F", "G", "M"][Math.floor(Math.random() * 4)];
  let generatedId = [];
  while (generatedId.length !== 7) {
    generatedId.push(Math.floor(Math.random() * 10) + "");
  }
  let weight: number = generatedId
    .map((value, idx) => parseInt(value, 10) * weights[idx]) // multiply each digit with their respective weights
    .reduce((prev: number, idDigit: number) => prev + idDigit); // sum them up

  const remainder = (offsetMap.get(startChar) || 0 + weight) % 11;
  let endChar = "";
  if (startChar === "S" || startChar === "T") {
    endChar = ST[remainder];
  } else if (startChar === "F" || startChar === "G") {
    endChar = FG[remainder];
  } else if (startChar === "M") {
    endChar = M[remainder];
  }
  return startChar + generatedId.join("") + endChar;
};
