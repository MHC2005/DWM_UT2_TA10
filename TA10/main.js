function getSum(num){
    const sum = num.reduce((a,b) => a + b, 0);
    return sum;
}

console.log(getSum([1,2,3,4,5]));
