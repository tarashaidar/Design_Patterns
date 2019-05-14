class Fibonacci {
    constructor(number) {
    this.index = number;
    this.currentNumber = 1;
    this.counter()
  }
  
  counter() {
    let previousNumber = 1;
    let i = 3;
    while (this.index >= i) {
        let nextNumber = previousNumber + this.currentNumber;
        previousNumber = this.currentNumber;
        this.currentNumber = nextNumber;
        i++;
    }
    return this.currentNumber;
  }
}

class Iterator{
    constructor(currentValue){
        this.currentValue = currentValue;
    }

    current(){
        const fibonacci = new Fibonacci(this.currentValue)
        return `Current fibonacci number: ${fibonacci.currentNumber}`;
    }

    next(){
        const fibonacci = new Fibonacci(this.currentValue + 1)
        return `Next fibonacci number: ${fibonacci.currentNumber}`;
    }

    prev(){
        const fibonacci = new Fibonacci(this.currentValue - 1)
        return `Previous fibonacci number: ${fibonacci.currentNumber}`;
    }

    key(){
        const fibonacci = new Fibonacci(this.currentValue)
        return `Current fibonacci index: ${fibonacci.index}`;
    }

    rewind(){
        this.currentValue = 0;
        const fibonacci = new Fibonacci(this.currentValue);
        return `Current fibonacci number: ${fibonacci.currentNumber}`;
    }
}

const iterator = new Iterator(7);
console.log(iterator.current())
console.log(iterator.next())
console.log(iterator.prev())
console.log(iterator.key())
console.log(iterator.rewind())
