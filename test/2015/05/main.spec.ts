import assert from 'node:assert';
import fs from 'node:fs';

import * as uut from '../../../src/2015/05/main';
import * as util from '../../../src/util';

suite('2015-05-main', () => {
    let example: string;

    suiteSetup(() => {
        example = fs.readFileSync(util.getResource('2015', '05', 'example.txt'), 'utf8').toString();
    });

    test('countVowels', () => {
        assert.strictEqual(uut.countVowels('aiueo'), 5);
        assert.strictEqual(uut.countVowels('a123a'), 2);
        assert.strictEqual(uut.countVowels('hllwrld'), 0);
    });

    test('hasLetterAdjacent', () => {
        assert(!uut.hasLetterAdjacent('abcde'));
        assert(uut.hasLetterAdjacent('aa'));
        assert(uut.hasLetterAdjacent('abccde'));
        assert(uut.hasLetterAdjacent('abbcdde'));
        assert(uut.hasLetterAdjacent('aabb'));
    });

    test('includesSome', () => {
        assert(!uut.includesSome('abcde', []));
        assert(!uut.includesSome('abcde', ['xy']));
        assert(uut.includesSome('abcde', ['bc']));
        assert(uut.includesSome('abcde', ['de']));
        assert(uut.includesSome('abcde', ['bc', 'de']));
        assert(uut.includesSome('abcde', ['abcde', 'bc', 'de']));
    });

    test('solveFirst', () => {
        assert.deepEqual(uut.solveFirst(example), 2);

        assert(true);
    });

    test('solveSecond', () => {
        assert(true);
    });
});