let section1 = document.querySelector(".section1");

let abbrevcountinput = document.createElement('input');
abbrevcountinput.type = 'text';
abbrevcountinput.id = 'abbrevcountinput';
abbrevcountinput.placeholder = 'Enter abbreviation country';
section1.appendChild(abbrevcountinput);

let postalCodeInput = document.createElement('input');
postalCodeInput.type = 'text';
postalCodeInput.id = 'postalCodeInput';
postalCodeInput.placeholder = 'Enter postal code';
section1.appendChild(postalCodeInput);

let btn1 = document.createElement("button");
btn1.textContent = 'Push me!';
section1.appendChild(btn1);

btn1.addEventListener("click", function () {

    const enteredabbrevcount = abbrevcountinput.value;
    const enteredpostalcode = postalCodeInput.value;

    const fetchName = () => fetch(`https://api.zippopotam.us/${enteredabbrevcount}/${enteredpostalcode}`);
    fetchName()
        .then((response) => response.json())
        .then((json) => {        
            console.log(json);

            let postcode = document.createElement('ul');
            let country = document.createElement('li');
            let abbrev = document.createElement('li');
            let state = document.createElement('li');
            let city = document.createElement('li');
            let long = document.createElement('li');
            let lat = document.createElement('li');
            let abbrevstate = document.createElement('li');


            postcode.textContent = "Post code: " + json["post code"];
            country.textContent = "Country: " + json.country;
            abbrev.textContent = "Country Abbreviation: " + json["country abbreviation"];
            state.textContent = "State: " + json.places[0].state;
            abbrevstate.textContent = "Abbreviation state: " + json.places[0]["state abbreviation"];
            city.textContent = "city: " + json.places[0]["place name"];
            long.textContent = "Longitute: " + json.places[0].longitude
            lat.textContent = "latitude: " + json.places[0].latitude
            
            
            

            while (section1.firstChild) {
                section1.removeChild(section1.firstChild);
            }

            section1.appendChild(abbrevcountinput);
            section1.appendChild(postalCodeInput); 
            section1.appendChild(postcode);
            section1.appendChild(country);
            section1.appendChild(abbrev);
            section1.appendChild(state);
            section1.appendChild(abbrevstate);
            section1.appendChild(city);
            section1.appendChild(long);
            section1.appendChild(lat);
        })
        .catch((error) => {
            console.log("There was an error!", error);
        });
});

// chatgpt


// const section1 = document.querySelector(".section1");

// const createInputElement = (type, id, placeholder) => {
//   const inputElement = document.createElement('input');
//   inputElement.type = type;
//   inputElement.id = id;
//   inputElement.placeholder = placeholder;
//   return inputElement;
// };

// const abbrevcountInput = createInputElement('text', 'abbrevcountinput', 'Enter abbreviation country');
// const postalCodeInput = createInputElement('text', 'postalCodeInput', 'Enter postal code');

// const addButton = document.createElement("button");
// addButton.textContent = 'Push me!';
// section1.appendChild(abbrevcountInput);
// section1.appendChild(postalCodeInput);
// section1.appendChild(addButton);

// addButton.addEventListener("click", function () {
//   const enteredAbbrevCount = abbrevcountInput.value;
//   const enteredPostalCode = postalCodeInput.value;

//   const fetchLocationData = () => fetch(`https://api.zippopotam.us/${enteredAbbrevCount}/${enteredPostalCode}`);

//   fetchLocationData()
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const locationInfo = data.places[0];
//       const ul = document.createElement('ul');

//       ul.innerHTML = `
//         <li>Post code: ${data['post code']}</li>
//         <li>Country: ${data.country}</li>
//         <li>Country Abbreviation: ${data['country abbreviation']}</li>
//         <li>State: ${locationInfo.state}</li>
//         <li>Abbreviation state: ${locationInfo['state abbreviation']}</li>
//         <li>City: ${locationInfo['place name']}</li>
//         <li>Longitude: ${locationInfo.longitude}</li>
//         <li>Latitude: ${locationInfo.latitude}</li>
//       `;

//       // Clear existing content and display location info
//       while (section1.firstChild) {
//         section1.removeChild(section1.firstChild);
//       }
//       section1.appendChild(abbrevcountInput);
//       section1.appendChild(postalCodeInput);
//       section1.appendChild(ul);
//     })
//     .catch((error) => {
//       console.error("There was an error!", error);
//       // Display an error message on the page
//       const errorElement = document.createElement('p');
//       errorElement.textContent = "Error: Unable to fetch location data.";
//       section1.appendChild(errorElement);
//     });
// });
