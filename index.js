const form = document.querySelector('.form')

const burger = document.querySelector('.burger')
const burger__btn = document.querySelector('.burger__btn')

let popup = () =>{
    form.classList.toggle('active')
}
let popout = () =>{
    form.classList.toggle('cancel')
}
let toggleBurger = () =>{
    burger.classList.toggle('active')
    burger__btn.classList.toggle('active')
}

