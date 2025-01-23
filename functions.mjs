export function myBind(thisArg) {
  const sourceFun = this;
  const res =  function() {
      return sourceFun.apply(thisArg, arguments)
  }
  return res;
}