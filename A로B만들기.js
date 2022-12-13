function solution(before, after) {
    if(before.split("").sort().join("") === after.split("").sort().join("")){
        return 1
    } else {
        return 0
    }
}

function solution(before, after) {
    return before.split("").sort().join("") === after.split("").sort().join("") ? 1 : 0
}
// 참고