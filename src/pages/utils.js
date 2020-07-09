export function add(a, b) {
  return a+b;
}

function sum() {
  let arr = Array.from(arguments)
  console.log( arr, arguments);
}
sum(1,2,3)