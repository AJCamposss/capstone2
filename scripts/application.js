
document.addEventListener("DOMContentLoaded", () => {
    //calling locationsArray from locationData file
    displayLocations(locationsArray);
    displayParkTypes(parkTypesArray);
})

function displayLocations(locationsArray){     //function to call/loop through the arrays

locationsArray.forEach(location => {
    addLocation(location);
   });


}

function addLocation(location) {    //function displays locations in dropdown
    const selectElement = document.getElementById('location');
    const option = document.createElement('option');
    option.value = location;
    option.text = location;
    selectElement.appendChild(option);
}

function displayParkTypes(parkTypesArray) {

    parkTypesArray.forEach()
}






