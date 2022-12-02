const colors = ['teal', 'cyan', 'peach', 'purple'];

colors.forEach(function(val, i) {
    const caps = val.toUpperCase();
    console.log(`at index ${i}, ${caps}`)
});


const prices = [30.99, 19.99, 2.5, 99.0]

let total = 0;
prices.forEach(function(price){
    total += price;
});
console.log(total)






function forEach(arr, callback) {
    for(let i=0; i < arr.length; i++){
            callback(arr[i], i, arr)

    }
return undefined; 
};


forEach(colors, function(color, i, arr){
    console.log(color.toUpperCase(), 'at index of:', i, arr)
})