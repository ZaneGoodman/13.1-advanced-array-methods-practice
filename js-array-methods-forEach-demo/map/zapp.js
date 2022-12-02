const numbers = [21,37,64,99, 142];
const negatives = numbers.map(function(num){
    return num * -1;
});

const doubles = numbers.map(function(num) {
    console.log(num * 2);
});

const todos = [
{
    id      : 1,
    text    : "Walk the dog",
    priority: "high"
},
{
    id      : 2,
    text    : "Walk the Chickens",
    priority: "medium"
},{
    id      : 3,
    text    : "feed the cat",
    priority: "low"
},{
    id      : 4,
    text    : "put out the fire in my garage",
    priority: "very high"
},
];

const todoText = todos.map(function(todo){
    return todo.text;
})


const links = Array.from(document.querySelectorAll('a'));
const urls = links.map(function(a) {
    return a.href;
})


function myMap(arr, callBack) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
    const val = callBack(arr[i], i, arr)
    newArr.push(val)
        
    }
    return newArr;
}
  
const priorityMap = myMap(todos, function(todo){
    return todo.priority;
})

const repeatedStrings = myMap(['a','b','c','d','e'], function(str, idx){
    return str.repeat(idx)
})