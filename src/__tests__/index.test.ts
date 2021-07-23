import { validate } from "../index";

describe("Validate S identification no", () => {
  it("Valid S id should return true", () => {
    //arrange
    const arrangedId = "s3000514g";
    //act
    const result = validate(arrangedId);
    //assert
    expect(result).toBe(true);
  });
  it("Invalid S id should return false", () => {
    //arrange
    const arrangedId = "s2000514g";
    //act
    const result = validate(arrangedId);
    //assert
    expect(result).toBe(false);
  });
});
describe("Validate T identification no", () => {
  it("Valid T id should return true", () => {
    //arrange
    const arrangedId = "T1863655C";
    //act
    const result = validate(arrangedId);
    //assert
    expect(result).toBe(true);
  });
  it("Invalid T id should return false", () => {
    //arrange
    const arrangedId = "T1863655D";
    //act
    const result = validate(arrangedId);
    //assert
    expect(result).toBe(false);
  });
});
describe("Validate F identification no", () => {
  it("Valid F id should return true", () => {
    //arrange
    const arrangedId = "F8359118T";
    //act
    const result = validate(arrangedId);
    //assert
    expect(result).toBe(true);
  });
  it("Invalid F id should return false", () => {
    //arrange
    const arrangedId = "F8359118Z";
    //act
    const result = validate(arrangedId);
    //assert
    expect(result).toBe(false);
  });
});
describe("Validate G identification no", () => {
  it("Valid G id should return true", () => {
    //arrange
    const arrangedId = "G4231313R";
    //act
    const result = validate(arrangedId);
    //assert
    expect(result).toBe(true);
  });
  it("Invalid G id should return false", () => {
    //arrange
    const arrangedId = "G4231313Z";
    //act
    const result = validate(arrangedId);
    //assert
    expect(result).toBe(false);
  });
});
describe("Validate M identification no", () => {
  it("Valid M id should return true", () => {
    //arrange
    const arrangedId = "M1234567K";
    //act
    const result = validate(arrangedId);
    //assert
    expect(result).toBe(true);
  });
  it("Invalid M id should return false", () => {
    //arrange
    const arrangedId = "M1234567Z";
    //act
    const result = validate(arrangedId);
    //assert
    expect(result).toBe(false);
  });
});
describe("Validate invalid identification no", () => {
  it("blank id should return false", () => {
    //arrange
    const arrangedId = "";
    //act
    const result = validate(arrangedId);
    //assert
    expect(result).toBe(false);
  });
  it("very long id should return false", () => {
    //arrange
    const arrangedId = "zzzasdasdasdasd";
    //act
    const result = validate(arrangedId);
    //assert
    expect(result).toBe(false);
  });
  it("very short id should return false", () => {
    //arrange
    const arrangedId = "zz1";
    //act
    const result = validate(arrangedId);
    //assert
    expect(result).toBe(false);
  });
  it("unknown prefix should return false", () => {
    //arrange
    const arrangedId = "K3000514G";
    //act
    const result = validate(arrangedId);
    //assert
    expect(result).toBe(false);
  });
});
