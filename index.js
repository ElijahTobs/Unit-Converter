const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.querySelector(".length")
const volumeEl = document.querySelector(".volume")
const massEl = document.querySelector(".mass")

lengthEl.innerHTML = `<h4>Length (Metre/Feet)</h4>`
volumeEl.innerHTML = `<h4>Volume (Litres/Gallons)</h4>`
massEl.innerHTML = `<h4>Mass (Kilograms/Pounds)</h4>`

convertBtn.addEventListener("click", function(){
  lengthEl.innerHTML += `
    <p>
      ${inputEl.value} metres = ${(inputEl.value * 3.28084).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value * 0.3048).toFixed(3)} metres
    </p>
  `
  volumeEl.innerHTML += `
    <p>
      ${inputEl.value} litre = ${(inputEl.value * 0.264172).toFixed(3)} gallon | ${inputEl.value} gallon = ${(inputEl.value * 3.78541).toFixed(3)} litre
    </p>
  `

  massEl.innerHTML += `
    <p>
      ${inputEl.value} kilos = ${(inputEl.value * 2.20462).toFixed(3)} pound | ${inputEl.value} pound = ${(inputEl.value * 0.453592).toFixed(3)} kilos
    </p>
  `
})


