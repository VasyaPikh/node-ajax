const { userInfo } = require("os");
const { json } = require("stream/consumers");

const usersInfo = "http://localhost:8000/";

const x = document.querySelector('button');

x.addEventListener('click', function show() {
    const xhr = new XMLHttpRequest();

    xhr.open('Get', userInfo);
    xhr.responseType = 'json';
    xhr.onload = ()=>{
        if (xhr.status != 200) {
            alert(`Error ${xhr.status}: $xhr.statusText`);
        } else {
            let rex = xhr.response;
            let i = xhr.lenght -1;
            while(res[i]){
                x.insertAdjacentHTML(
                    'afterend',
                    `<div class ='user'>
                       <p class = "num">User id ${res[i].id}</p>
                       <p>Name: ${res[i].first.name} </p>
                       <p>LastName: ${res[i].last.name} </p>
                       <p>Email: ${res[i].email} </p> </div>
                       <p><img src='${res[i].photo}'></div>`    
                )
                i--;
            }
        };
    }
    
    xhr.send();
},{once: true} )