function solution(n) {
    let answer = 1; // 피자판 수
    while ((answer * 6) % n !== 0){ // 모두 같은 수의 피자 조각을 먹어야함
        answer++;   // 남은 조각이 0이 아니라면 피자판 수 늘림
    }
    return answer;
}