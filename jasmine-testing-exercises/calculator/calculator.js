window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const initial_amount = document.getElementById("loan-amount");
  const initial_years = document.getElementById("loan-years");
  const initial_rate = document.getElementById("loan-rate");
  initial_amount.value = 10000;
  initial_years.value = 5;
  initial_rate.value = 3;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const user_input_values = getCurrentUIValues()
  updateMonthly(calculateMonthlyPayment(user_input_values));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const periodic_interest_rate = (values.rate/ 100) / 12;
  const number_of_payments = values.years * 12;
  
  const top_line = (values.amount * periodic_interest_rate)
  const bottom_line = 1 - ((1 + periodic_interest_rate) ** -number_of_payments);
  const monthly_payment = (top_line / bottom_line).toFixed(2);

  return monthly_payment
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const display_monthly_payment = document.getElementById("monthly-payment");
  display_monthly_payment.innerText = `$ ${monthly}`;
  // const string_monthly = `$ ${monthly}`;
  // display_monthly_payment.innerText = string_monthly;
  
}
