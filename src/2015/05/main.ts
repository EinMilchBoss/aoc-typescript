import fs from 'node:fs';

import * as util from '../../util';

export function countVowels(line: string): number {
    const vowels = ['a', 'i', 'u', 'e', 'o'];
    let vowelCount = 0;
    line.split('').forEach((char) => {
        if (vowels.includes(char)) {
            ++vowelCount;
        }
    });
    return vowelCount;
}

export function hasLetterAdjacent(line: string, minTimes = 2): boolean {
    for (let i = 0; i <= line.length - minTimes; ++i) {
        const window = line.slice(i, i + minTimes);
        if (window[0] === window[1]) {
            return true;
        }
    }
    return false;
}

export function includesSome(line: string, parts: string[]): boolean {
    return parts.some((part) => line.includes(part));
}

export function containsCharPairTwice(line: string): boolean {
    const pairSize = 2;

    const charPairsToLastIndexOfPair: Map<string, number> = new Map();
    for (let i = 0; i <= line.length - pairSize; ++i) {
        const charPair = line.slice(i, i + pairSize);

        if (
            charPairsToLastIndexOfPair.has(charPair) &&
            charPairsToLastIndexOfPair.get(charPair) !== i
        ) {
            return true;
        }
        charPairsToLastIndexOfPair.set(charPair, i + 1);
    }
    return false;
}

export function containsRepeatingCharWithSeparatorChar(line: string): boolean {
    const windowSize = 3;
    for (let i = 0; i <= line.length - windowSize; ++i) {
        const window = line.slice(i, i + windowSize);
        if (window[0] === window[2]) {
            return true;
        }
    }
    return false;
}

export function solveFirst(input: string): number {
    const naughtyParts = ['ab', 'cd', 'pq', 'xy'];

    let niceStringCount = 0;
    input.split('\n').forEach((line) => {
        if (
            countVowels(line) >= 3 &&
            hasLetterAdjacent(line) &&
            !includesSome(line, naughtyParts)
        ) {
            ++niceStringCount;
        }
    });

    return niceStringCount;
}

export function solveSecond(input: string): number {
    let niceStringCount = 0;
    input.split('\n').forEach((line) => {
        if (
            containsCharPairTwice(line) &&
            containsRepeatingCharWithSeparatorChar(line)
        ) {
            ++niceStringCount;
        }
    });

    return niceStringCount;
}

function main() {
    const input = fs
        .readFileSync(util.getResource('2015', '05', 'input.txt'), 'utf8')
        .toString();

    console.log(`First: ${solveFirst(input)}`);
    console.log(`Second: ${solveSecond(input)}`);
}

main();
