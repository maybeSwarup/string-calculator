export class StringCalculator {
  constructor() {
    this.callCount = 0;
  }

  Add(numbers) {
    this.callCount++;
    
    if (numbers === "") return 0;
    
    let nums = [];
    
    if (numbers.startsWith("//")) {
      let delimiters = [], numbersPart;
      
      if (numbers.startsWith("//[")) {
        // Handle multiple delimiters: //[delim1][delim2]\n
        const endOfDelimiters = numbers.lastIndexOf("]");
        const delimiterSection = numbers.substring(2, endOfDelimiters + 1);
        numbersPart = numbers.substring(endOfDelimiters + 2);
        
        // Extract all delimiters from [delim1][delim2] format
        const delimiterRegex = /\[([^\]]+)\]/g;
        let match;
        while ((match = delimiterRegex.exec(delimiterSection)) !== null) {
          delimiters.push(match[1]);
        }
      } else {
        // Handle single character delimiter: //;\n
        delimiters = [numbers[2]];
        numbersPart = numbers.substring(4);
      }
      
      // Split by all delimiters
      let splitResult = [numbersPart];
      for (const delimiter of delimiters) {
        const newSplit = [];
        for (const part of splitResult) {
          newSplit.push(...part.split(delimiter));
        }
        splitResult = newSplit;
      }
      nums = splitResult;
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