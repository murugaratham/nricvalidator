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
  //short circuit evaulation
  if (idToCheck.length !== 9) {
    return false;
  }

  const { valid } = tryGetChecksum(idToCheck); // sum them up
  return valid;
};

export const generate = (partialSeedId?: string) => {
  console.log(partialSeedId);
  const legalStartingCharacters = ["S", "T", "F", "G", "M"];
  if (partialSeedId) {
    const hasLegalStartingCharacter = legalStartingCharacters.some((legalStartingCharacter) =>
      partialSeedId.charAt(0).toUpperCase().startsWith(legalStartingCharacter),
    );
    if (!hasLegalStartingCharacter) {
      throw new Error("Invalid start character");
    } else {
      const containsNumbersOnlyAfterFirst = !isNaN(Number(partialSeedId.substring(1, partialSeedId.length)));
      if (!containsNumbersOnlyAfterFirst) {
        throw new Error("Invalid seed id");
      }
    }
  }
  const startChar =
    (partialSeedId && partialSeedId.charAt(0)) || legalStartingCharacters[Math.floor(Math.random() * 4)];
  let generatedId: string[] = (partialSeedId && partialSeedId.substring(1, partialSeedId.length).split("")) || [];
  while (generatedId.length !== 7) {
    generatedId.push(Math.floor(Math.random() * 10) + "");
  }

  const { checksum } = tryGetChecksum(startChar + generatedId.join(""));
  console.log(`${startChar}${generatedId.join("")}${checksum}`);
  return `${startChar}${generatedId.join("")}${checksum}`.toUpperCase();
};
/**
 *
 * @param idDigits {string[]} identification number to check
 * @returns weight
 */
const getWeights = (idDigits: string[]): number => {
  let weights = [2, 7, 6, 5, 4, 3, 2]; // read: http://www.ngiam.net/NRIC/NRIC_numbers.pdf
  return idDigits
    .map((value, idx) => parseInt(value, 10) * weights[idx]) // multiply each digit with their respective weights
    .reduce((prev: number, idDigit: number) => prev + idDigit);
};
const tryGetChecksum = (idDigits: string): { checksum?: string; valid: boolean } => {
  // checksum tables
  const ST = ["J", "Z", "I", "H", "G", "F", "E", "D", "C", "B", "A"];
  const FG = ["X", "W", "U", "T", "R", "Q", "P", "N", "M", "L", "K"];
  const M = ["X", "W", "U", "T", "R", "Q", "P", "N", "J", "L", "K"];

  const id = idDigits.split("");
  let [startChar, ...idArray] = id;
  const endChar = idArray.length === 8 ? idArray.pop()!.toUpperCase() : "";
  //add offset by century prefix if required
  const weight = (offsetMap.get(startChar.toUpperCase()) || 0) + getWeights(idArray);
  const remainder = weight % 11;

  startChar = startChar.toUpperCase();
  if (startChar === "S" || startChar === "T") {
    return { checksum: ST[remainder], valid: ST[remainder] === endChar };
  } else if (startChar === "F" || startChar === "G") {
    return { checksum: FG[remainder], valid: FG[remainder] === endChar };
  } else if (startChar === "M") {
    return { checksum: M[remainder], valid: M[remainder] === endChar };
  } else {
    return { checksum: undefined, valid: false };
  }
};
