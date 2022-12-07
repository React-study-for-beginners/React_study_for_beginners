//방법1
function solution(before, after) {
    const word = {};
    for(let i = 0; i<before.length; i++){
    word[before[i]] ? word[before[i]]++ : word[before[i]] = 1; 
    }
    
    for(let i = 0; i<after.length; i++){
        if(!word[after[i]] || word[after[i]] === 0){
            return 0;
        }
        
        word[after[i]]--;
    }
    return 1
}

//방법2
function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}