export class StringCalculator {
  constructor() {
    this.callCount = 0;
  }

  Add(numbers) {
    this.callCount++;
    
    if (numbers === "") return 0;
    
    let nums = [];
    
    if (numbers.startsWith("//")) {
      let delimiter, numbersPart;
      
      if (numbers.startsWith("//[")) {
        // Handle delimiters of any length: //[delimiter]\n
        const endBracket = numbers.indexOf("]");
        delimiter = numbers.substring(3, endBracket);
        numbersPart = numbers.substring(endBracket + 2);
      } else {
        // Handle single character delimiter: //;\n
        delimiter = numbers[2];
        numbersPart = numbers.substring(4);
      }
      
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
    
    return nums.reduce((sum, num) => {
      const parsedNum = parseInt(num);
      return parsedNum > 1000 ? sum : sum + parsedNum;
    }, 0);
  }

  GetCalledCount() {
    return this.callCount;
  }
}

// Keep the function export for backward compatibility with existing tests
export function Add(numbers) {
  const calculator = new StringCalculator();
  return calculator.Add(numbers);
}