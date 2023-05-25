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
      ${inputEl.value} metres = ${inputEl.value * 3.28084} feet | ${inputEl.value} feet = ${inputEl.value * 0.3048} metres
    </p>
  `
})


