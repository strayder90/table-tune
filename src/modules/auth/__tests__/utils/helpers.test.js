import {sum} from '../../utils/helpers.js';

describe('sum function', () => {
    test('correctly adds two numbers', () => {
        const result = sum(2, 3);

        expect(result).toBe(5);
    });
});
