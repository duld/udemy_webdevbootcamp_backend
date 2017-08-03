var scores = [90, 98, 89, 100, 100, 86, 94]; // 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49]; // 68

function average(nums){
    var total = nums.reduce(function(sum, n){
        return sum += n;
    }, 0);
    
    return Math.round(total / nums.length);
}

console.log(average(scores));
console.log(average(scores2));