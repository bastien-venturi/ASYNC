let section1 = document.querySelector(".section1");
let btn1 = document.createElement("button");
btn1.textContent = 'Push me!';
section1.appendChild(btn1);

btn1.addEventListener("click", function () {

    const fetchName = () => fetch("https://api.zippopotam.us/BE/1000");
    fetchName()
        .then((response) => response.json())
        .then((json) => {        
            console.log(json);

            let postcode = document.createElement('ul');
            let country = document.createElement('li');
            let abbrev = document.createElement('li');

            postcode.textContent = "Post code: " + json["post code"];
            country.textContent = "Country: " + json.country;
            abbrev.textContent = "Country Abbreviation: " + json["country abbreviation"];

            section1.appendChild(postcode);
            section1.appendChild(country);
            section1.appendChild(abbrev);
        })
        .catch((error) => {
            console.log("There was an error!", error);
        });
});
