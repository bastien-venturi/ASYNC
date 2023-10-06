

let section1 = document.querySelector(".section1");
let btn1 = document.createElement("button");
btn1.textContent = 'Push me!'
section1.appendChild(btn1);

btn1.addEventListener("click", function () {

    const fetchName = () => fetch("https://api.agify.io/?name=kelian");
    fetchName()
        .then((response) => response.json())
        .then((json) => {        
            for (const item of json) {
                console.log(item.age);
                console.log(item.count);
            }		
        })
        .catch((error) => {
            console.log("There was an error!", error);
        });
    });