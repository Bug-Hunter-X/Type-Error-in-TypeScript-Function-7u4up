function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

let result1 = add(1, 2); // Correct

let result2 = add(1, <number>"2"); // Type Assertion

let value: any = "2";
let result3: number;

if(isNumber(value)){
  result3 = add(1, value);
}else{
  result3 = add(1, 0); //Handle the error
}
console.log(result1, result2, result3); // Correct