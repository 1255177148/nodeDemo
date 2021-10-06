/**
 * 加法
 * @param a
 * @param b
 * @returns {*}
 */
function add(a, b) {
    return a + b;
}

/**
 * 减法
 * @param a
 * @param b
 * @returns {number}
 */
function sub(a, b) {
    return a - b;
}

/**
 * 乘法
 * @param a
 * @param b
 * @returns {number}
 */
function mul(a, b) {
    return a * b;
}

/**
 * 除法
 * @param a
 * @param b
 * @returns {number}
 */
function del(a, b) {
    return a / b;
}

module.exports = {
    add,
    sub,
    mul,
    del
}