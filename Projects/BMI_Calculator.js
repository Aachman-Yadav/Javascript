//*Form hai isliye input field ki jagah pura form hi select karna padega 

//* This use case will go you empty value as this will not load when we press button, but it is loaded when the page is loaded...
// const height = parseInt(document.querySelector('#height').value) 


const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value) //* Hamesha string values return karta hai input field..

  const weight = parseInt(document.querySelector("#weight").value)

  const results = document.querySelector("#results");
  if(height === '' || height <= 0 || isNaN(height) ){
    results.innerHTML = `Please give a valid height ${height} !`
  }

  else if(weight === '' || weight <= 0 || isNaN(weight) ){
    results.innerHTML = `Please give a valid weight ${weight} !`
  }

  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`
  }

}) //* Kyuki form hai na toh usko toh submit hi karenge na...
