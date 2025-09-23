// date du trajet, spécifier une date par défaut
const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2025-07-01";
console.log(dateControl.value); // prints "2025-07-01"
console.log(dateControl.valueAsNumber); // prints 1751328000000, a JavaScript timestamp (ms)
// date d'aujourd'hui
const date = new Date ();

console.log(date.toString());