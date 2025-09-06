export function Add(numbers) {
  if (numbers === "") return 0;
  if (numbers.includes(",")) {
    const nums = numbers.split(",");
    return parseInt(nums[0]) + parseInt(nums[1]);
  }
  return parseInt(numbers);
}