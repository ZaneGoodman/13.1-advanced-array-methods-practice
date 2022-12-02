const words = [
	'immunoelectrophoretically',
	'rotavator',
	'tsktsk',
	'psychophysicotherapeutics',
	'squirrelled',
	'crypt',
	'uncopyrightable',
	'cysts',
	'pseudopseudohypoparathyroidism',
	'unimaginatively'
];


const longWords = words.filter(function(word){
    return word.length >= 20
})


const cOrUWords = words.filter(function(w){
   return  w[0] === "u" || w[0] === "c";
});




const containsVowel = function(word) {
    for(let char of word) {
        if(isVowel(char)) return true;
    }
    return false;
}

const isVowel = function(char) {
   return "aeiou".indexOf(char) != -1;
}


const containVowels = words.filter(containsVowel);
const noVowels = words.filter(function(word){
    return !containsVowel(word);
})

// map and filter

const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');

const checked = Array.from(allCheckboxes).filter(function(box){
	return box.checked;
})

const completedItems = checked.map(function(checkbox){
    return checkbox.parentElement.innerText;
})

function extractCompletedTodos() {
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    return Array.from(allCheckboxes).filter(function(box){
	return box.checked;
    })
    .map(function(checkbox){
        return checkbox.parentElement.innerText;
    })
};


function myFilter(arr, callBack) {
    const filteredArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(callBack(arr[i], i, arr))
        filteredArr.push(arr[i]);
    }
    return filteredArr;
}


const shorties = myFilter(words, function(word){
    return word.length <= 10;
})

const everyOtherWord = myFilter(words, function(word, i){
    return i % 2 === 0 
})