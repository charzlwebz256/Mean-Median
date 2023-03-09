// Calculates the sum of the values
function mean(arr){
    let sum = 0;
    for (let num of arr) {
        sum += num
    }
    return sum
}
const arr = [1, 2, 3, 4, 5,5,5,5,3,7,2,8];
console.log(mean(arr));

// calculates the mean of the values

function means(array){
    let sum = 0;
    for (let num of arr) {
        sum += num
    }
    return(sum/array.length);
}
const array = [1,2,3,4,5,6,7,8,9,10,11,12];
console.log(means(array));