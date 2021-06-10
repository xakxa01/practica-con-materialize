// apis de user generator

// profesor 1
var pimg1 = document.querySelector('#pimg1');
fetch('https://randomuser.me/api/')
    .then(data => data.json())
    .then(data => {
        pimg1.innerHTML = `<img loading="lazy" src="${data.results[0].picture.large}" class="responsive-img circle hoverable">
                            <h5>${data.results[0].name.first} ${data.results[0].name.last}</h5>`;
    })

// profesor 2
var pimg2 = document.querySelector('#pimg2');
fetch('https://randomuser.me/api/')
    .then(data => data.json())
    .then(data => {
        pimg2.innerHTML = `<img loading="lazy"  src=" ${data.results[0].picture.large}" class="responsive-img circle hoverable">
                            <h5>${data.results[0].name.first} ${data.results[0].name.last}</h5>`;
    })

// profesor 3
var pimg3 = document.querySelector('#pimg3');
fetch('https://randomuser.me/api/')
    .then(data => data.json())
    .then(data => {
        pimg3.innerHTML = `<img loading="lazy" src="${data.results[0].picture.large}" class="responsive-img circle hoverable">
                            <h5 id="profesor3">${data.results[0].name.first} ${data.results[0].name.last} </h5>`;
    })