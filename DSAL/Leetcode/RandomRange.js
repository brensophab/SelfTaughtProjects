function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin+1) + myMin);
    // Only change code above this line
  }
console.log(randomRange(1, 10))
console.log("Max number is 10")