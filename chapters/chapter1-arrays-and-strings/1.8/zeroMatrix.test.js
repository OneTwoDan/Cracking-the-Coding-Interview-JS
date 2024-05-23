const { zeroMatrix } = require('./zeroMatrix');

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
        expect(zeroMatrix(matrix)).toEqual(expected);
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
        expect(zeroMatrix(matrix)).toEqual(expected);
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
        expect(zeroMatrix(matrix)).toEqual(expected);
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
        expect(zeroMatrix(matrix)).toEqual(expected);
    });

    test('handles an empty matrix', () => {
        const matrix = [];
        const expected = [];
        expect(zeroMatrix(matrix)).toEqual(expected);
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
        expect(zeroMatrix(matrix)).toEqual(expected);
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
        expect(zeroMatrix(matrix)).toEqual(expected);
    });

    test('handles a 1x1 matrix with zero', () => {
        const matrix = [
            [0]
        ];
        const expected = [
            [0]
        ];
        expect(zeroMatrix(matrix)).toEqual(expected);
    });

    test('handles a 1x1 matrix without zero', () => {
        const matrix = [
            [1]
        ];
        const expected = [
            [1]
        ];
        expect(zeroMatrix(matrix)).toEqual(expected);
    });
});
const zeroMatrix = require('./zeroMatrix'); // Asegúrate de importar tu función correctamente

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
        expect(zeroMatrix(matrix)).toEqual(expected);
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
        expect(zeroMatrix(matrix)).toEqual(expected);
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
        expect(zeroMatrix(matrix)).toEqual(expected);
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
        expect(zeroMatrix(matrix)).toEqual(expected);
    });

    test('handles an empty matrix', () => {
        const matrix = [];
        const expected = [];
        expect(zeroMatrix(matrix)).toEqual(expected);
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
        expect(zeroMatrix(matrix)).toEqual(expected);
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
        expect(zeroMatrix(matrix)).toEqual(expected);
    });

    test('handles a 1x1 matrix with zero', () => {
        const matrix = [
            [0]
        ];
        const expected = [
            [0]
        ];
        expect(zeroMatrix(matrix)).toEqual(expected);
    });

    test('handles a 1x1 matrix without zero', () => {
        const matrix = [
            [1]
        ];
        const expected = [
            [1]
        ];
        expect(zeroMatrix(matrix)).toEqual(expected);
    });
});
