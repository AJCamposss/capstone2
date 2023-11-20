document.addEventListener("DOMContentLoaded", () => {
    const selectElement = document.getElementById('mountain');
    displayMountains(mountainsArray);

    selectElement.addEventListener('change', function() {
        const selectedMountainName = this.value; // This gets the mountain name that is selected from dropdown

        // This is to find the selected mountain from our mountainsArray
        const selectedMountain = mountainsArray.find(mountain => mountain.name === selectedMountainName);

        if (selectedMountain) {
            displaySelectedMountainInfo(selectedMountain);
        }
    });
});

function displayMountains(mountainsArray) { //this function loops through array and finds 
    const selectElement = document.getElementById('mountain');

    mountainsArray.forEach(mountain => {
        const option = document.createElement('option');
        option.text = mountain.name;
        selectElement.appendChild(option);
    });
}

function displaySelectedMountainInfo(selectedMountain) {
    const mountainInfoElement = document.getElementById('mountainInfo');
    
    // Display information about the selected mountain in 'mountainInfo' element
    mountainInfoElement.querySelector("p").innerText = `Name: ${selectedMountain.name}`
    
}