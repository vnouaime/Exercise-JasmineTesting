
it('should calculate the monthly rate correctly', function () {
  // ...
  const inputs = { amount: 30000, years: 4, rate: 4.5};
  expect(calculateMonthlyPayment(inputs)).toEqual('684.10');
});


it("should return a result with 2 decimal places", function() {
  // ..
});

/// etc
