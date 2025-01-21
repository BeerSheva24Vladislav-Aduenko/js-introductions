const zeroCode = "0".charCodeAt(0);
const aCode = "a".charCodeAt(0);
const nineCode = "9".charCodeAt(0);
export function myParseIntRadix(strNum, radix) {
  //converting from string to number taking in consideration different number systems
  //radix is number of digits in the number system
  //radix is any number from 2 to 36 (0123456789... <all letters>)
  //if radix is undefined the digital number system is implied
  //examples: myParseIntRadix("10",8) -> 8;
  //myParseIntRadix("f",36) -> 15;
  //myParseIntRadix("z",36) -> 35;
  //myParseIntRadix("3",2) -> NaN;
  //myParseIntRadix("10103",2) -> 10;

  let res = NaN;
  let sign = 1;
  let actualRadix = getActualRadix(radix);
  if (strNum != null && strNum != undefined && !isNaN(actualRadix)) {
    let index = 0;
    strNum = strNum.toString();
    strNum = strNum.trim();
    strNum = strNum.toLowerCase();
    ({ sign, index } = signProcessing(strNum, index, sign));
    res = convertProcessing(index, strNum, res, radix);
  }
  return (res *= sign);
}
export function myParseInt(strNum) {
  return myParseIntRadix(strNum, 10);
}
function convertProcessing(index, strNum, res, radix) {
  if (index < strNum.length && !isNaN(getDigit(strNum[index], radix))) {
    res = 0;
    let running = true;
    while (index < strNum.length && running) {
      let digit = getDigit(strNum[index], radix);
      if (isNaN(digit)) {
        running = false;
      } else {
        res = res * radix + digit;
        index++;
      }
    }
  }
  return res;
}

function signProcessing(strNum, index, sign) {
  if (strNum[0] == "-") {
    index++;
    sign = -1;
  } else if (strNum[0] == "+") {
    index++;
  }
  return { index, sign };
}

function getDigit(digitStr, radix) {
  const code = digitStr.charCodeAt(0);
  const base = code > nineCode ? aCode - 10 : zeroCode;
  const res = code - base;
  return res > -1 && res < radix ? res : NaN;
}

export function myToStringFromIntNumber(num) {
  //TODO returns string presentation of the given number
  //if number has type of string the string should contain a number matching the parseInt syntax
  //examples:
  //myToStringFromIntNumber(12.35) -> returns "12"
  //myToStringFromIntNumber("12.35") -> returns "12"
  //myToStringFromIntNumber() -> rerurns "" (empty string)
  //myToStringFromIntNumber(-12) -> returns"-12"
  //myToStringFromIntNumber(+12) -> returns "12"
  //myToStringFromIntNumber("") -> returns "" (empty string)
  //myToStringFromIntNumber("a1") -> returns "" (empty string)
  //Disallowed the following operations:
  //ToString() using
  //operator + with string like "" + ;

  let res = "";
  let intPart = Math.trunc(num);
  let isNegative = intPart < 0;
  intPart = Math.abs(intPart);
  const digits = "0123456789";

  while (intPart > 0) {
    let digit = intPart % 10;
    res = digits[digit] + res;
    intPart = Math.floor(intPart / 10);
  }

  return isNegative ? "-" + res : res;
}

function getActualRadix(radix) {
  let actualRadix = 10;
  if (radix !== undefined) {
    actualRadix = radix > 1 && radix < 37 ? radix : NaN;
  }
  return actualRadix;
}

const MIN_CODE = 32;
const MAX_CODE = 126;
const N_CODES = MAX_CODE - MIN_CODE + 1;

function getActualShift(code, shift, isShift) {
  const actualShift = isShift ? code - MIN_CODE : MAX_CODE - code;
  return (actualShift + shift) % N_CODES;
}

function shiftUnshiftOneChar(code, shift, isShift) {
  const actualShift = getActualShift(code, shift, isShift);
  return isShift ? MIN_CODE + actualShift : MAX_CODE - actualShift;
}

export function stringShift(str, shift) {
  //TODO
  //each character code inside string is increased on the shift value 'a' shifted on 3 will result character 'd'
  //'9' shifted on 2 will result ';'
  //if shifting causes exiting out of printable ASCII character there will by cycling from the begining
  //if the 'shift' is either a negative number or not a number the given string should be returned with no updating
  // stringShift("Hello", 3) -> "Khoor"
  // stringShift("~Z4", 3) -> '"]7"
  // const ASCII_START = 32;
  // const ASCII_END = 126;
  // const ASCII_RANGE = ASCII_END - ASCII_START + 1;
  // if (typeof shift !== "number" || shift < 0) {
  //   return str;
  // }
  // let result = "";
  // for (let i = 0; i < str.length; i++) {
  //   let charCode = str.charCodeAt(i);
  //   if (charCode >= ASCII_START && charCode <= ASCII_END) {
  //     charCode = ASCII_START + ((charCode - ASCII_START + shift) % ASCII_RANGE);
  //   }
  //   result += String.fromCharCode(charCode);
  // }
  // return result;
}

export function stringUnshift(str, unshift) {
  //TODO
  //each character code inside string is decreased on the unshift value 'd' unshifted on 3 will result character 'a'
  //';' ushifted on 2 will result '9'
  //if ushifting causes exiting out of printable ASCII character there will be cycling from the end
  //if the 'ushift' is either a negative number or not a number the given string should be returned with no updating
  // stringUnshift("Khoor", 3) -> "Hello"
  // stringUnhift("]7", 3) -> "~Z"
  // const ASCII_START = 32;
  // const ASCII_END = 126;
  // const ASCII_RANGE = ASCII_END - ASCII_START + 1;
  // if (typeof unshift !== "number" || unshift < 0) {
  //   return str;
  // }
  // let result = "";
  // for (let i = 0; i < str.length; i++) {
  //   let charCode = str.charCodeAt(i);
  //   if (charCode >= ASCII_START && charCode <= ASCII_END) {
  //     charCode =
  //       ASCII_START +
  //       ((charCode - ASCII_START - unshift + ASCII_RANGE) % ASCII_RANGE);
  //   }
  //   result += String.fromCharCode(charCode);
  // }
  // return result;
}
