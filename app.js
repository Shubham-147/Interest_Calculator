document.querySelector('#loan-form').addEventListener('submit',function(e) {
  
  event.preventDefault();
  document.querySelector('.results').style.display ='none'
  document.getElementById('loading').style.display ='block'
  
  setTimeout(calculateResult,2000)
  //  calculateResult(e);
})

function calculateResult(event) {
  const amount = document.querySelector('#amount');
  const rate = document.querySelector('#interest');
  const time = document.querySelector('#years');
  const monthly = document.querySelector('#monthly-payment');
  const total = document.querySelector('#total-payment');
  const interest = document.querySelector('#total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(rate.value/100/12);
  const calculatedPayments = parseFloat(years.value)*12

  const x = Math.pow(1+calculatedInterest,calculatedPayments)
  const monthlypay = (principal*x*calculatedInterest)/(x-1)
  if (isFinite(monthlypay)) {
    monthly.value = monthlypay.toFixed(2)
    total.value = (monthlypay * calculatedPayments).toFixed(2)
    interest.value = ((monthlypay * calculatedPayments) - principal).toFixed(2)
    document.querySelector('.results').style.display ='block'
  }
  else
  {
    showError("Please Check Your Numbers")
  }
  document.getElementById('loading').style.display ='none'
} 

function showError(msg) {
  const errorDiv = document.createElement('div')
  errorDiv.className ="alert alert-danger"
  errorDiv.appendChild(document.createTextNode(msg))

  const card = document.querySelector('.card')
  const heading = document.querySelector('.heading')

  card.insertBefore(errorDiv,heading)
  setTimeout(clearError,3000)

}
function clearError() {
  document.querySelector('.alert').remove()
}