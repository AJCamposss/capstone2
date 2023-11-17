document.addEventListener("DOMContentLoaded", () => {
    
    displayLocations(locationsArray);
})

function displayLocations (locationsArray) {
    const locationsContainer = document.querySelector("#location")
    locationsContainer.innerHTML = "";

}
 
locationsArray.forEach(location => {
    const locationOption = document.createElement("optiion")
    locationOption.classList.add("location");
    locationOption.id = "location-" + location.id;
    
    locationsContainer.appendChild(locationOption)

    const locationOptionInfo = document.createElement("Option");
    locationOption.appendChild(locationOptionInfo)





})


