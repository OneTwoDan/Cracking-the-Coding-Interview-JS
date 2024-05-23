// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

function rotateMatrix(matrix) {
    const size = matrix.length;

    for (let row = 0; row < size; row++) {
        for (let col = row; col < size; col++) {
            [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
        }
    }

    for (let row = 0; row < size; row++) {
        matrix[row].reverse();
    }

    return matrix;
}

module.exports = { rotateMatrix }