export function Add(numbers) {
  if (numbers === "") return 0;
  
  let nums = [];
  
  if (numbers.startsWith("//")) {
    const delimiter = numbers[2];
    const numbersPart = numbers.substring(4);
    nums = numbersPart.split(delimiter);
  } else if (numbers.includes(",") || numbers.includes("\n")) {
    nums = numbers.split(/[,\n]/);
  } else {
    nums = [numbers];
  }
  
  const negatives = nums.filter(num => parseInt(num) < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }
  
  return nums.reduce((sum, num) => sum + parseInt(num), 0);
}