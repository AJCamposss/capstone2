
document.addEventListener("DOMContentLoaded", () => {
    displayLocations(locationsArray);
    displayParkTypes(parkTypesArray);

    const locationSelect = document.getElementById('location'); // Get the select element for locations

    
        

        const selectedPark = nationalParksArray.find(park => park.LocationName === selectedLocationName);

        if (selectedPark) {
            displaySelectedParkInfo(selectedPark);
        }
    });


function displayLocations(locationsArray) {
    const selectElement = document.getElementById('location');

    locationsArray.forEach(location => {
        const option = document.createElement('option');
        option.value = location;
        option.text = location;
        selectElement.appendChild(option);
    });
}

function displayParkTypes(parkTypesArray) {
    const selectElement = document.getElementById('parkType');

    parkTypesArray.forEach(parkType => {
        const option = document.createElement('option');
        option.text = parkType;
        selectElement.appendChild(option);
    });
}

function displaySelectedParkInfo(selectedPark) {
    const parkInfoElement = document.getElementById('parkInfo');
    parkInfoElement.querySelector("span").innerText = selectedPark.LocationName
      
}
  