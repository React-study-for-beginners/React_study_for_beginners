const add = (a, b) => a + b;
const sub = (a, b) => a - b;

module.exports = {  // module.exports 모듈 단위로 내보내기
    moduleName: "calc module",
    add: add,
    sub: sub,
};