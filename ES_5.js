function fibonacci(n) {
    var fibSeq = [0, 1];
    for (var i = 2; i < n; i++) {
        fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
    }
    return fibSeq;
}

console.log('The Fibonacci Sequence is:');
console.log(fibonacci(10));
