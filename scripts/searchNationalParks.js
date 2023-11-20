
document.addEventListener("DOMContentLoaded", () => {       //calling locationsArray from locationData file                                                      
    const selectElement = document.getElementById('location')
    displayLocations(locationsArray)
    displayParkTypes(parkTypesArray); 

    selectElement.addEventListener('change', function(event){
        const selectedLocationID = this.value

        const selectedPark = nationalParksArray.find(park => park.LocationID === selectedLocationID)

        if(selectedPark) {
            displaySelectedParkInfo(selectedPark);
        }
    })
    
 })

function displayLocations(locationsArray){     //function to call loop through the arrays
    const selectElement = document.getElementById('location');

locationsArray.forEach(location => {
    const option = document.createElement('option');
    option.value = location.LocationID;
    option.text = location.LocationName;
    selectElement.appendChild(option);
   })

}

   //function displays locations in dropdown
   
   


function displayParkTypes(parkTypesArray) { //function to call loop through array
    const selectElement = document.getElementById('parkType');
    

    parkTypesArray.forEach(parkType => {
        const option = document.createElement('option');
        option.value = parkType;
        option.text = parkType;
        selectElement.appendChild(option);
    })
}

      

