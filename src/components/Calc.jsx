function add(a, b) {
  let sum = a + b;
  return sum;
}
function minus(a, b) {
  let subs = a - b;
  return subs;
}
function mult(a, b) {
  let sum = a * b;
  return sum;
}
function div(a, b) {
  let sum = a / b;
  sum= sum.toFixed(2)
  return sum;
}

export {add,minus,mult,div};