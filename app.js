let eye = document.querySelector(`#eye`);
let input = document.querySelector(`#inu`);
let cross = document.querySelector(`#cross`)
eye.addEventListener(`click`,function(){
    eye.classList.add(`active`);
    input.type = (`text`);
    cross.classList.add(`bro`);
    
    
});
cross.addEventListener(`click`,function(){
    
    eye.classList.remove(`active`);
    cross.classList.remove(`bro`);
    input.type = (`password`);
    
});
let body = document.querySelector(`body`)

let icon = document.querySelector(`.icon`);
icon.addEventListener(`click`,function(){
    body.classList.toggle(`bg`);
    icon.classList
})
