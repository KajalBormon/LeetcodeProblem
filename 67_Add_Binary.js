/* ------------Practice Code---------- */
/* const a = "110";
const b = "111";

const bin1 = parseInt(a,2);
const bin2 = parseInt(b,2);

const result = bin1 + bin2;

console.log(result.toString(2)); */



/* ------------LeetCode--------- */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const bin1 = parseInt(a,2);
    const bin2 = parseInt(b,2);
    const result = bin1 + bin2;
    return result.toString(2);
};