
document.addEventListener("DOMContentLoaded", () => {

    displayLocations(locationsArray);
})

function displayLocations(locationsArray){


locationsArray.forEach(locations => {
    addLocations(locations);

   });

}

function addLocations(locations) {
    const selectElement = document.getElementById('location');
    const option = document.createElement('option');
    option.value = location;
    option.text = location;
    selectElement.appendChild(option);
}








