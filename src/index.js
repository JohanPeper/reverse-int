module.exports = function reverse(n) {
    n = n.toString().split('');
    n = n.filter((v) => { return v != '-' });
    n = n.reverse().join('');
    return n;
}
