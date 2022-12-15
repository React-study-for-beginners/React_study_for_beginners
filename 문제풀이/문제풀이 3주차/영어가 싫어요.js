//처음에 푼 방법
function solution(numbers) {
  const numberName = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  let result = "";
  let string = "";
  for (let i = 0; i < numbers.length; i++) {
    string += numbers[i];
    if (numberName.hasOwnProperty(string)) {
      result += numberName[string];
      string = "";
    }
  }

  return +result;
}

//새로 푼 방법
function solution(numbers) {
  const numberName = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  numberName.forEach((e, i) => {
    numbers = numbers.replaceAll(e, i);
  });

  return +numbers;
}
