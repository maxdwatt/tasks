import { debug } from "console";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const fal: number[] = [];
    const len = numbers.length;
    if (len > 1) {
        fal.push(numbers[0]);
        fal.push(numbers[numbers.length - 1]);
    }
    if (len === 1) {
        fal.push(numbers[0]);
        fal.push(numbers[0]);
    }
    return fal;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((t: number): number => t * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ints = numbers.map((s: string): number =>
        isNaN(Number(s)) ? 0 : +s
    );
    return ints;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const rdollars = amounts.map((s: string): string =>
        s[0] === "$" ? s.substring(1) : s
    );
    const intAmounts = rdollars.map((a: string): number =>
        isNaN(Number(a)) ? 0 : +a
    );
    return intAmounts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const isQuestion = (s: string): boolean => s[s.length - 1] !== "?";
    const noQ = messages.filter(isQuestion);
    const shout = noQ.map((a: string): string =>
        a[a.length - 1] === "!" ? a.toUpperCase() : a
    );
    return shout;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const isShort = (s: string): boolean => s.length < 4;
    const shortOnly = words.filter(isShort);
    return shortOnly.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const notRuthGaterBinsburg = (s: string): boolean =>
        s !== "red" && s !== "green" && s !== "blue";
    const nRBG = colors.filter(notRuthGaterBinsburg);
    if (nRBG.length === 0) {
        return true;
    }
    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    let math = sum + "=";
    if (addends.length === 0) {
        math = math + "0";
    } else {
        math = math + addends.join("+");
    }
    return math;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    return [];
}
