function show_odd_even(number) {
  var numbers = [];
  for (var cont = verify_odd_even(number); cont < number; cont+=2) {
    numbers.push(cont);
  }
  return numbers;
}

function verify_odd_even(number) {
  if (number % 2 === 0) {
    return 0;
  }
  return 1;
}
