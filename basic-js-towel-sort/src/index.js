module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }  
    const startMatrix = matrix;
    const mainArray = [];


    for (let i = 0; i < startMatrix.length; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < startMatrix[i].length; j++) {
                mainArray.push(startMatrix[i][j]);
            }
        } else {
            const reverseMatrix = startMatrix[i].reverse();
            for (let j = 0; j < startMatrix[i].length; j++) {
                mainArray.push(reverseMatrix[j]);
            }
        }
    }
    return mainArray;
};
