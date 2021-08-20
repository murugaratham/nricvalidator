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
  let weights = [2, 7, 6, 5, 4, 3, 2]; // read: http://www.ngiam.net/NRIC/NRIC_numbers.pdf
  let weight: number = idArray
    .map((value, idx) => parseInt(value, 10) * weights[idx]) // multiply each digit with their respective weights
    .reduce((prev: number, idDigit: number) => prev + idDigit); // sum them up

  //why? look @ http://www.ngiam.net/NRIC/NRIC_numbers.pdf deeper.
  const offsetMap = new Map([
    ["T", 4],
    ["G", 4],
    ["M", 3],
  ]);

  const offset = offsetMap.get(startChar) || 0; // set default offset 0 if not within map

  const remainder = (offset + weight) % 11;

  // checksum tables
  const ST = ["J", "Z", "I", "H", "G", "F", "E", "D", "C", "B", "A"];
  const FG = ["X", "W", "U", "T", "R", "Q", "P", "N", "M", "L", "K"];
  const M = ["X", "W", "U", "T", "R", "Q", "P", "N", "J", "L", "K"];

  if (startChar === "S" || startChar === "T") {
    return endChar === ST[remainder];
  } else if (startChar === "F" || startChar === "G" || startChar === "M") {
    return endChar === FG[remainder];
  } else if (startChar === "M") {
    return endChar === M[remainder];
  }
  return false;
};
