function fun1() {
  a = 10;
}

function fun2() {
  while (a < 3) {
    console.log(a++);
  }
}

function fun3() {
  console.log(`a = ${a}`);
}

var a = 0;
fun1();
fun2();
fun3();
