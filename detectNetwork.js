// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var prefixOne = parseInt(cardNumber.slice(0,1))
  var prefixTwo = parseInt(cardNumber.slice(0,2))
  var prefixThree = parseInt(cardNumber.slice(0,3))
  var prefixFour = parseInt(cardNumber.slice(0,4))
  // console.log(cardNumber)
  // || prefixOne === 52 || prefixOne === 53 || prefixOne === 54 || prefixOne === 55)
  if(prefixOne === 5 && cardNumber.length === 16) {
  	return "MasterCard";
  } else if((prefixTwo === 34 || prefixTwo === 37) && cardNumber.length === 15) {
  	return "American Express";
  } else if((prefixTwo === 38 || prefixTwo === 39) && cardNumber.length === 14) {
  	return "Diner's Club";
  } else if(prefixOne === 4 && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
  	return "Visa";
  } else if((prefixFour === 5018 || prefixFour === 5020 || prefixFour === 5038 || prefixFour === 6304) && (cardNumber.length >= 12 && cardNumber.length <= 19)) {
  	return "Maestro";
  } else if((prefixTwo === 65 || prefixFour === 6011 || prefixThree === 644 || prefixThree === 645 || prefixThree === 646 || prefixThree === 647 || prefixThree === 648 || prefixThree === 649) && (cardNumber.length === 16 || cardNumber.length === 19)) {
  	return "Discover";
  }
};


