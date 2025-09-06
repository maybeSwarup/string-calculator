export function Add(numbers) {
  if (numbers === "") return 0;
  
  if (numbers.startsWith("//")) {
    const delimiter = numbers[2];
    const numbersPart = numbers.substring(4);
    const nums = numbersPart.split(delimiter);
    return nums.reduce((sum, num) => sum + parseInt(num), 0);
  }
  
  if (numbers.includes(",") || numbers.includes("\n")) {
    const nums = numbers.split(/[,\n]/);
    return nums.reduce((sum, num) => sum + parseInt(num), 0);
  }
  return parseInt(numbers);
}