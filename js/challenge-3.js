function show_primes(number) {
  var prime_numbers = [];
  for (var n = 0; n <= number; n++) {
    if (verify_prime(n)){
      prime_numbers.push(n);
    }
  }
  return prime_numbers;
}

function verify_prime(number) {
  if (number > 1) {
    for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}
