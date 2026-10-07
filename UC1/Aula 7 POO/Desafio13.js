let nums = [2, 4, 6, 8, 10];
let todosPares = true;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 !== 0) {
    todosPares = false;
    break;
  }
}

console.log(todosPares);
