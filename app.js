// https://restcountries.com/v3.1/name/

let tableCountry = document.getElementById("cardCountry");

let cardBody = ""


fetch("https://restcountries.com/v3.1/all")
.then((res)=>res.json())
.then(data=>{
    data.forEach(element => {
        cardBody+= 
        `<div class="card card-padding mb-lg-1 mb-md-4 mb-sm-6" style="width: 18rem;">
            <img src="${element.flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.name.common}</h5>
                <p class="card-text">${element.name.official}</p>
                <p class="card-text">${element.region}</p>
                <p class="card-text">${element.timezones}</p>
                <a href="${element.maps.googleMaps}" class="btn btn-primary">Go to map</a>
            </div>
        </div>`
        
    });

    tableCountry.innerHTML = cardBody

})
function searchCountry(){
    let inputName = document.getElementById("userInput").value;
    console.log(inputName);
    let flagImg = document.getElementById("flagImg")
    let name = document.getElementById("c_name")
    let officialName = document.getElementById("c_Off_Name")
    let region = document.getElementById("c_Reigon")
    let timezones = document.getElementById("c_Time")
    let map = document.getElementById("c-map")

    //console.log(name);
    fetch(`https://restcountries.com/v3.1/name/${inputName}`)
        .then((res)=>res.json())
        .then(data=>{
            data.forEach(obj => {
                flagImg.src = obj.flags.png
                name.innerText =  obj.name.common
                officialName.innerText = obj.name.official
                region.innerText = obj.region
                timezones.innerText = obj.timezones
                map.href = obj.maps.googleMaps
        });
        
    })

}