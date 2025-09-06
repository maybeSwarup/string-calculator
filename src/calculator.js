export function Add(numbers) {
  if (numbers === "") return 0;
  if (numbers.includes(",")) {
    const nums = numbers.split(",");
    return nums.reduce((sum, num) => sum + parseInt(num), 0);
  }
  return parseInt(numbers);
}