import { numberLetters } from "../functions/functions";

describe("Functions", () => {
  test("Should by defined:", () => {
    expect(numberLetters("Привет")).toBeDefined();
  });

  test("Should compare all elements:", () => {
    expect(numberLetters("Привет")).toEqual(6);
  });

  test("Should check for the content:", () => {
    expect(numberLetters("Привет")).not.toContain(0);
  });
});
