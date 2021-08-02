let openBTN = document.querySelectorAll('.open');
let modal = document.querySelectorAll('.modal-content');
let closeBTN = document.querySelectorAll('.close');

console.log(`openBTN${openBTN}`)

console.log(`modal${modal}`)

console.log(`closeBTN${closeBTN}`)


/*
for (i = 0; i <= openBTN.length; i++) {
    openBTN.addEventListener('click', () => {
        modal.style.display = 'contents'
        closeBTN.style.visibility = 'visible'
    })
}


 closeBTN.style.visibility = 'visible'


*/




const eventoClick = () =>{
    modal.forEach(modales=>{
        modales.style.visibility = 'visible'
    })
   
}


openBTN.forEach(boton=>{
    boton.addEventListener('click', eventoClick)
});

/*
for (i = 0; i <= openBTN.length; i++) {

    openBTN.addEventListener('click', () => {
        modal.style.display = 'contents'
        closeBTN.style.visibility = 'visible'
    })
};*/

/*
boton.addEventListener('click',() => {
    modal.style.display = 'none'
    closeBTN.style.visibility = 'hidden'
});





})*/