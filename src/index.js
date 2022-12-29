module.exports = function reverse(n) {
    if (n < 0) {
        const x = n * -1;
        const str = String(x);
        const arr = Array.from(str).map(Number);
        const newArr = arr.reverse();
        const res = newArr.join("");
        const result = Number(res);

        return result;
    } else {
        const str = String(n);
        const arr = Array.from(str).map(Number);
        const newArr = arr.reverse();
        const res = newArr.join("");
        const result = Number(res);

        return result;
    }
};
