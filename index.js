function myIntParse(str) {
  let sign = 1;
  let result = 0;
  let i = 0;

  str = str.trim();

  str[0] === "-" ? (sign = -1) : (sign = 1);

  if (i >= str.length || !isNumber(str[i])) {
    return NaN;
  }

  for (; i < str.length; i++) {
    if (isNumber(str[i])) {
      result = result * 10 + Number(str[i]);
    } else {
      break;
    }
  }
  return sign * result;
}

function isNumber(char) {
  return char >= "0" && char <= "9";
}

// Тесты
console.log(myIntParse("123")); // 123
console.log(myIntParse("-123")); // -123
console.log(myIntParse("abc")); // NaN
console.log(myIntParse("")); // NaN
console.log(myIntParse("123fd")); // 123
console.log(myIntParse("+42")); // 42
console.log(myIntParse("   42")); // 42
console.log(myIntParse("42abc")); // 42
console.log(myIntParse("abc42")); // NaN
console.log(myIntParse("   ")); // NaN
console.log(myIntParse("9007199254740992")); // 9007199254740992
