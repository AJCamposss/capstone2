document.addEventListener("DOMContentLoaded", () => {
    displayMountains(mountainsArray)
})

function displayMountains(mountainsArray) {

    mountainsArray.forEach(mountain => {
        addMountain(mountain)
    })
}

function addMountain(mountain) {
    const selectElement = document.getElementById('mountain');
    const option = document.createElement('option')
    option.value = mountain;
    option.text = mountain.name;
    selectElement.appendChild(option)
}
