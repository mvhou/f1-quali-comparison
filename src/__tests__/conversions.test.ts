import * as conv from '../conversions'
import { testInOut } from '../test-utilities/utils'
import { stringToMs, msToString } from '../test-utilities/conversion-tests'

describe('string to ms conversion', () => {
    stringToMs.forEach((t:testInOut) => {
        test(`conv.toMs(${t.input})`, () => {
            expect(conv.toMs(t.input)).toStrictEqual(t.output);
        });
    });
});

describe('ms to string conversion', () => {
    msToString.forEach((t:testInOut) => {
        test(`conv.toString(${t.input})`, () => {
            expect(conv.toString(t.input)).toStrictEqual(t.output);
        });
    });
});
