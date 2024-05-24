const zeroMatrix = require('./zeroMatrix');

describe('zeroMatrix', () => {
    test('sets row and column to zero for a 3x3 matrix with a single zero', () => {
        const matrix = [
            [1, 2, 3],
            [4, 0, 6],
            [7, 8, 9]
        ];
        const expected = [
            [1, 0, 3],
            [0, 0, 0],
            [7, 0, 9]
        ];
        zeroMatrix(matrix);
        expect(matrix).toEqual(expected);
    });

    test('sets row and column to zero for a 3x3 matrix with multiple zeros', () => {
        const matrix = [
            [0, 2, 3],
            [4, 5, 6],
            [7, 8, 0]
        ];
        const expected = [
            [0, 0, 0],
            [0, 5, 0],
            [0, 0, 0]
        ];
        zeroMatrix(matrix);
        expect(matrix).toEqual(expected);
    });

    test('sets row and column to zero for a 2x2 matrix with a single zero', () => {
        const matrix = [
            [1, 0],
            [3, 4]
        ];
        const expected = [
            [0, 0],
            [3, 0]
        ];
        zeroMatrix(matrix);
        expect(matrix).toEqual(expected);
    });

    test('does not change matrix without zeros', () => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        const expected = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        zeroMatrix(matrix);
        expect(matrix).toEqual(expected);
    });

    test('handles an empty matrix', () => {
        const matrix = [];
        const expected = [];
        zeroMatrix(matrix);
        expect(matrix).toEqual(expected);
    });

    test('handles a matrix with no zero elements', () => {
        const matrix = [
            [1, 2],
            [3, 4]
        ];
        const expected = [
            [1, 2],
            [3, 4]
        ];
        zeroMatrix(matrix);
        expect(matrix).toEqual(expected);
    });

    test('handles a 4x4 matrix with zeros', () => {
        const matrix = [
            [1, 2, 3, 4],
            [5, 6, 0, 8],
            [9, 10, 11, 12],
            [0, 14, 15, 16]
        ];
        const expected = [
            [0, 2, 0, 4],
            [0, 0, 0, 0],
            [0, 10, 0, 12],
            [0, 0, 0, 0]
        ];
        zeroMatrix(matrix);
        expect(matrix).toEqual(expected);
    });

    test('handles a 1x1 matrix with zero', () => {
        const matrix = [
            [0]
        ];
        const expected = [
            [0]
        ];
        zeroMatrix(matrix);
        expect(matrix).toEqual(expected);
    });

    test('handles a 1x1 matrix without zero', () => {
        const matrix = [
            [1]
        ];
        const expected = [
            [1]
        ];
        zeroMatrix(matrix);
        expect(matrix).toEqual(expected);
    });
});
