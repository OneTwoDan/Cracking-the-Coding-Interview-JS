// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

function zeroMatrix(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return;

    const rows = matrix.length;
    const cols = matrix[0].length;
    let rowZero = false;
    let colZero = false;

    // Determine if the first row or first column have any zeros
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) {
            colZero = true;
            break;
        }
    }

    for (let j = 0; j < cols; j++) {
        if (matrix[0][j] === 0) {
            rowZero = true;
            break;
        }
    }

    // Use the first row and column to mark zeros
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Set matrix elements to zero based on marks
    for (let i = 1; i < rows; i++) {
        if (matrix[i][0] === 0) {
            for (let j = 1; j < cols; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    for (let j = 1; j < cols; j++) {
        if (matrix[0][j] === 0) {
            for (let i = 1; i < rows; i++) {
                matrix[i][j] = 0;
            }
        }
    }

    // Set the first row and column to zero if needed
    if (rowZero) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }

    if (colZero) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }
}

module.exports = zeroMatrix;