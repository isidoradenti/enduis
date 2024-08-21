const operations = {
  '+': a => +a
};

// Example usage
console.log(operations['+']('42')); // Converts the string '42' to the number 42
console.log(operations['+'](42));   // Returns the number 42 (no change)
console.log(operations['+']('-42')); // Converts the string '-42' to the number -42
console.log(operations['+']('abc')); // Attempts to convert 'abc' to a number, resulting in NaN (Not-a-Number)
