function howManyHundreds(a) {
  var number = a;
  var math = a % 100;
  var outcome = number - math;
  return outcome / 100;
}
