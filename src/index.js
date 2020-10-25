module.exports = function reverse(n) {
    const arr = Math.abs(n).toString().split("");
    let newarr = [];
    for (let i = arr.length - 1; 0 <= i; i--) {
        newarr.push(arr[i]);
    }

    return Number(newarr.join(""));
};