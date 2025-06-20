// Code your solutions in this file

//  returns an array of thank you messages for each name provided to the function
function writeCards(names, event) {
  return names.map(name => 
    `Thank you, ${name}, for the wonderful ${event} gift!`
  );
}

const thankYouMessages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(thankYouMessages);

// invokes console.log once for each number, counting down from the number provided to zero
// logs each number when counting down, starting from the number provided
function countDown(startNumber) {
  while (startNumber >= 0) {
    console.log(startNumber);
    startNumber--;
  }
}

countDown(4);

