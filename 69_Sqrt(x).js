/* -------------LeetCode---------Using Binary Search----- */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0 || x === 1) {
        return x;
    }
    let left = 1;
    let right = x/2;
    let sqrt = 0;

    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        var square = mid * mid;
        if (square === x) {
            sqrt = mid;
            break;
        } else if (square > x) {
            right = mid - 1;

        } else {
            sqrt = mid;
            left = mid + 1
        }
    }
    return sqrt;
};