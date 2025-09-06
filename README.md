# String Calculator (TDD Kata)

A Node.js implementation of the String Calculator TDD Kata. This project demonstrates Test-Driven Development (TDD) practices with comprehensive test coverage and incremental feature development.

## Assignment Overview

This implementation follows the String Calculator Kata requirements from [osherove.com/kata](http://osherove.com/kata), built using Node.js and Jest testing framework.

## Features Implemented

✅ **Basic Operations**

- Empty string returns 0
- Single number returns that number
- Two numbers return their sum
- Unknown number of comma-separated numbers

✅ **Delimiter Support**

- Support for newline (`\n`) as delimiter
- Custom single-character delimiters (`//;\n1;2`)
- Delimiters of any length (`//[***]\n1***2***3`)
- Multiple delimiters (`//[*][%]\n1*2%3`)
- Multiple delimiters with length > 1 (`//[***][%%]\n1***2%%3`)

✅ **Error Handling**

- Throws exception for negative numbers with message "negatives not allowed: [negatives]"
- Handles multiple negative numbers in error message

✅ **Advanced Features**

- Ignores numbers greater than 1000
- Tracks method call count with `GetCalledCount()`
- Class-based implementation with public methods

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/maybeSwarup/string-calculator
cd string-calculator

# Install dependencies
npm install

# Run tests
npm test
```

## Usage

### Basic Usage

```javascript
import { Add, StringCalculator } from "./src/calculator.js";

// Using the function directly
console.log(Add("1,2,3")); // 6
console.log(Add("1\n2,3")); // 6
console.log(Add("//;\n1;2;3")); // 6

// Using the class for call tracking
const calculator = new StringCalculator();
calculator.Add("1,2");
console.log(calculator.GetCalledCount()); // 1
```

### Supported Input Formats

- `""` → 0
- `"1"` → 1
- `"1,2"` → 3
- `"1,2,3,4,5"` → 15
- `"1\n2,3"` → 6
- `"//;\n1;2;3"` → 6
- `"//[***]\n1***2***3"` → 6
- `"//[*][%]\n1*2%3"` → 6
- `"//[***][%%]\n1***2%%3"` → 6

### Error Cases

- `"1,-2,3"` → throws "negatives not allowed: -2"
- `"1,-2,-3"` → throws "negatives not allowed: -2, -3"
- Numbers > 1000 are ignored: `"2,1001"` → 2

## TDD Process

This project was developed following strict Test-Driven Development principles:

1. **Red**: Write a failing test
2. **Green**: Write minimal code to make it pass
3. **Refactor**: Improve code while keeping tests green

Each feature was implemented incrementally with individual commits showing the TDD cycle. The commit history demonstrates the evolution of the code through each test and implementation step.

## Project Structure

```
string-calculator/
├── src/
│   └── calculator.js          # Main StringCalculator implementation
├── tests/
│   └── calculator.test.js     # Jest test suite
├── package.json               # Node.js project configuration
├── jest.config.js            # Jest configuration for ES modules
├── .gitignore                # Git ignore patterns
└── README.md                 # This file
```

## Testing

The project uses Jest for testing with ES modules support. All tests are located in the `tests/` directory.

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## Development Notes

This implementation was created for demonstrating:

- Strong TDD practices with incremental development
- Clean, readable code with proper error handling
- Comprehensive test coverage
- Professional Git commit history
- Modern JavaScript/Node.js best practices

---
