window.onload 

const locations = "locationsArray";



    const selectElement = document.getElementById('location');

locations.forEach (function (location) {
    const option = document.createElement('option');
    option.value = location;
    option.text = location;
    selectElement.appendChild(option);
 })











