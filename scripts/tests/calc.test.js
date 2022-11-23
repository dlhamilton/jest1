const { TestScheduler } = require("jest");
const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });
        test("should return 0 for no parameters", () => {
            expect(addition()).toBe(0);
        });
        test("should return error for 42 + house", () => {
            expect(addition(42, "house")).toBe("Error");
        });
        test("should return -10 for 5 + -15", () => {
            expect(addition(5, -15)).toBe(-10);
        });
    });
    describe("Subtraction function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Division function", () => {

    });
})