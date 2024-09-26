
function generaterandomNumber () {
let randomNumber  = Math.random() *10; //Door dit weet de computer dat het een getal tussen de 1 en de 10 is
console.log (randomNumber); // Je ziet door dit het getal dat door de computer gegenereerd is in de console
} 
generaterandomNumber();
const buttonOpniew = document.querySelector('ButtonOpnieuw');
const buttonHoger = document.querySelector('buttonHoger');
const buttonLager = document.querySelector('buttonLager');
const numberDiv = document.querySelector('Numberbutton');
numberDiv.innerHTML = 'nummer is' + randomNumber;

buttonOpniew.addEventListener('click',function() {

})
buttonHoger.addEventListener('click',function(){
})




