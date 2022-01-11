module.exports = function reverse(n) {
    let arr = n.toString().split("");
    (arr[0] === '-') ? arr.shift(): null;
    return +(arr.reverse().join(''));
};
