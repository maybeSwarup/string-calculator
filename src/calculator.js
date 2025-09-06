export function Add(numbers) {
  if (numbers === "") return 0;
  if (numbers.includes(",") || numbers.includes("\n")) {
    const nums = numbers.split(/[,\n]/);
    return nums.reduce((sum, num) => sum + parseInt(num), 0);
  }
  return parseInt(numbers);
}