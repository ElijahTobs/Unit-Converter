const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.querySelector(".length")
const volumeEl = document.querySelector(".volume")
const massEl = document.querySelector(".mass")

lengthEl.innerHTML = `<h4>Length (Metre/Feet)</h4>`
volumeEl.innerHTML = `<h4>Volume (Litres/Gallons)</h4>`
massEl.innerHTML = `<h4>Mass (Kilograms/Pounds)</h4>`

convertBtn.addEventListener("click", function(){
  let num = inputEl.value
  if (num){
    lengthEl.innerHTML = `
      <h4>Length (Metre/Feet)</h4>
      <p>
        ${num} metres = ${(num * 3.28084).toFixed(3)} feet | ${num} feet = ${(num * 0.3048).toFixed(3)} metres
      </p>
    `
    volumeEl.innerHTML = `
      <h4>Volume (Litres/Gallons)</h4>
      <p>
        ${num} litre = ${(num * 0.264172).toFixed(3)} gallon | ${num} gallon = ${(num * 3.78541).toFixed(3)} litre
      </p>
    `
    massEl.innerHTML = `
      <h4>Mass (Kilograms/Pounds)</h4>
      <p>
        ${num} kilos = ${(num * 2.20462).toFixed(3)} pound | ${num} pound = ${(num * 0.453592).toFixed(3)} kilos
      </p>
    `
  }
  

})

