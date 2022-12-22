function solution(numbers) {
    const array = [...numbers];
    const average = array.reduce((a, b) => a + b) / array.length;
    
    return average;
}

// reduce 함수, 초기 값 전달 > 배열 요소들 순차적 전달, 총 합 도출