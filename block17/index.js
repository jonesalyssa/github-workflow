// Complete the Numbers class below
// the constructor has already been provided

class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }

  count() {
    return this.data.length;
  }

  printNumbers() {
    console.log(this.data);
  }

  odds() {
    let odds = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] % 2 !== 0) {
        odds.push(this.data[i]);
      }
    }
    return odds;
  }

  evens() {
    let evens = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] % 2 === 0) {
        evens.push(this.data[i]);
      }
    }
    return evens;
  }

  sum() {
    return this.data.reduce((sum, number) => sum + number, 0);
  }

  product() {
    return this.data.reduce((product, number) => product * number, 1);
  }

  greaterThan(target) {
    let great = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] > target) {
        great.push(this.data[i]);
      }
    }
    return great;
  }

  howMany(target) {
    let many = 0;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === target) {
        many++;
      }
    }
    return many;
  }
}

//Prompt the user for a list of integers separated by commas
const str = prompt("enter numbers", "1,2,3,4,5");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers // does not like this for some reason
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number
