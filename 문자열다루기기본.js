function solution(s) {
    var answer;
    if (s.length === 4 && s.length === 6){
        return false;
    }
    for (let i = 0; i < s.length; i++){
        if(isNaN(Number(s[i]))){
            return false;
        }
    }
    return true;
}
// 실패;;

function solution(s) {
    var answer;
    if (s.length === 4 && s.length === 6){
        return false;
    } else {
        return s.split("").every(a => !isNaN(a));
    }
} 
// 실패;;;;;;;

function solution(s) {
    var answer;
    if (s.length === 4 || s.length === 6){
        return s.split("").every(a => !isNaN(a));
    } else {
        return false;
    }
}
// 성공