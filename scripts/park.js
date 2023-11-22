document.addEventListener('DOMContentLoaded', () => {
    stateDropdown();
    parkTypeDropdown();
    parkFilter(); 

    let stateSelect = document.querySelector('#state-dropdown');
    stateSelect.addEventListener('change', parkFilter);

    let parkTypeSelect = document.querySelector('#parkTypeDropdown');
    parkTypeSelect.addEventListener('change', parkFilter);
}); 

function parkTypeDropdown() {
    const parkTypeDropdown = document.getElementById("parkTypeDropdown");

    if (!parkTypeDropdown) return; 

    parkTypesArray.forEach(type => {
        const option = new Option(type);
        parkTypeDropdown.add(option);
    });

}

function stateDropdown() {
    const stateDropdown = document.querySelector('#state-dropdown');

    if (!stateDropdown) return; 

    locationsArray.forEach(state => {
        const option = new Option(state);
        stateDropdown.add(option);
    });
}

function parkFilter() {
    
    const stateSelected = document.querySelector('#state-dropdown').value;
    const parkTypeSelected = document.querySelector('#parkTypeDropdown').value;
    
    filteredParks = nationalParksArray;

   if (stateSelected !== 'showAll') {
    filteredParks = filteredParks.filter(park => park.State === stateSelected);
   } if (parkTypeSelected !== 'showAll') {
    filteredParks = filteredParks.filter(park => park.LocationName.includes(parkTypeSelected));
   } 

   displayParks(filteredParks)
}

function displayParks(filteredParks) {
    const parksContain = document.querySelector('#content');
    parksContain.classList.add("text-center"); 

    parksContain.innerText = ''; 

    filteredParks.forEach(parkFilter => {
        displayPark(parkFilter, parksContain);
    });
}

function displayPark(parkFilter, parksContain) {
    
    const parkCard = document.createElement('div'); 
    parkCard.classList.add('card') 
    parkCard.id = parkFilter.LocationID; 

    parksContain.appendChild(parkCard); 

    
    const parkCardBody = document.createElement('div');
    parkCardBody.classList.add('card-body'); 
    parkCard.appendChild(parkCardBody); 

    
    const parkName = document.createElement('h5'); 
    parkName.classList.add('card-title'); 
    parkName.innerText = parkFilter.LocationName;
    parkCardBody.appendChild(parkName); 

    
    const parkLocation = document.createElement('h6'); 
    parkLocation.classList.add('card-subtitle'); 
    parkLocation.innerText = parkFilter.State; 
    parkCardBody.appendChild(parkLocation);
}