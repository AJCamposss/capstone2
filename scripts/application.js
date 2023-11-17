document.addEventListener("DOMContentLoaded", () => {
    displayLocations(locationsArray)
})
  

function displayLocations (locationsArray) {
    if('content' in document.createElement('form')) {
        const locationsContainer = document.querySelector('#content')

        locationsContainer.innerHTML = "";

        locationsContainer.forEach (location => {
            addLocation (location, locationsContainer)
        })

    }

}


