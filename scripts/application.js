document.addEventListener("DOMContentLoaded", () => {
    
    displayLocations(locationData);
})

function displayLocations (locationData) {
    const locationsContainer = document.querySelector("#location")
    locationsContainer.innerHTML = "";

}
 
locationData.forEach(location => {
    const locationOption = document.createElement("option")
    locationOption.classList.add("location");
    locationOption.id = "location-" + location.id;
    
    locationsContainer.appendChild(locationOption)

    const locationOptionInfo = document.createElement("Option");
    locationOption.appendChild(locationOptionInfo)



})


