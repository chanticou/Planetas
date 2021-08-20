"use strict";

//CODIGO CAVIAR 
var againBTN = document.querySelector('.again');
var planetsName = document.querySelectorAll('.p-tierra');
var cuerposCelestes = [document.querySelector('.open-sol'), document.querySelector('.open-tierra'), document.querySelector('.open-venus'), document.querySelector('.open-luna'), document.querySelector('.open-jupiter'), document.querySelector('.open-saturno')]; //AUDIOS

var buttonsAudios = [document.querySelector('.button-audio-sol'), document.querySelector('.button-audio-mercurio'), document.querySelector('.button-audio-venus'), document.querySelector('.button-audio-tierra'), document.querySelector('.button-audio-luna'), document.querySelector('.button-audio-marte'), document.querySelector('.button-audio-jupiter'), document.querySelector('.button-audio-saturno')]; //Functions-------------------------------------------------------------------------------

var clickEvent = function clickEvent(e) {
  //Abro el popup
  var popUp = e.target.lastChild.previousElementSibling;
  popUp.style.visibility = 'visible';
};

var clickPlay = function clickPlay(e) {
  var play = e.target.lastChild.previousElementSibling;
  console.log('plaaayyyy');
  console.log(play);
}; //AddEventListener---------------------------------------------------------------------------
//cuerpos celestes


cuerposCelestes.forEach(function (cuerpo) {
  cuerpo.addEventListener('click', clickEvent);
}); //play buttons

buttonsAudios.forEach(function (buttonAudio) {
  buttonAudio.addEventListener('playing', clickPlay);
}); //Volver a empezar

againBTN.addEventListener('click', function () {
  planetsName.forEach(function (planets) {
    planets.style.visibility = 'hidden';
  });
});
/*


//audios
let audioSol=document.querySelector('.audio-sol')
let audioMercurio=document.querySelector('.audio-mercurio')
let audioVenus=document.querySelector('.audio-venus')
let audioTierra=document.querySelector('.audio-tierra')
let audioLuna=document.querySelector('.audio-luna')
let audioMarte=document.querySelector('.audio-marte')
let audioJupiter=document.querySelector('.audio-jupiter')
let audioSaturno=document.querySelector('.audio-saturno')


let audiosFunction = () => {
    audios.forEach(audio => {
       audios.play(audio)
    });
}


 */

/*

//AUDIOS
let audios = [
    document.querySelector('.audio-sol'),
    document.querySelector('.audio-mercurio'),
    document.querySelector('.audio-venus'),
    document.querySelector('.audio-tierra'),
    document.querySelector('.audio-luna'),
    document.querySelector('.audio-marte'),
    document.querySelector('.audio-jupiter'),
    document.querySelector('.audio-saturno')

];

    for(i=0; i<= audios.length; i++){
        console.log(audios[i])
       // audios[i].play()
    }*/

/*CODIGO 1°
const openSol = document.querySelector('.open-sol')
const openTierra = document.querySelector('.open-tierra')
const openVenus = document.querySelector('.open-venus')
const openLuna = document.querySelector('.open-luna')
const openJupiter = document.querySelector('.open-jupiter')
const openSaturno = document.querySelector('.open-saturno')

const modales = document.querySelectorAll('.p-tierra')

const button = document.createElement('button'); 

button.type = 'button'; 
button.innerText = 'X'; 



modales.forEach(modal => {
    modal.appendChild(button)
});



//SOL
openSol.addEventListener('click', e=>{
    //Abro el popup
    let popUp = e.target.lastChild.previousElementSibling;
    popUp.style.visibility='visible'
    closeBTN.style.visibility='visible';

})


//TIERRA
openTierra.addEventListener('click', e=>{
    //Abro el popup
    let popUp=e.target.lastChild.previousElementSibling;
    popUp.style.visibility='visible'
})



//VENUS
openVenus.addEventListener('click', e =>{
    //Abro el popup
    let popUp=e.target.lastChild.previousElementSibling;
    popUp.style.visibility='visible'
});



//LUNA
openLuna.addEventListener('click', e =>{
    //Abro el popup
    let popUp=e.target.lastChild.previousElementSibling;
    popUp.style.visibility='visible'
});


//JUPITER
openJupiter.addEventListener('click', e =>{
    //Abro el popup
    let popUp=e.target.lastChild.previousElementSibling;
    popUp.style.visibility='visible'
});


//SATURNO
openSaturno.addEventListener('click', e =>{
    //Abro el popup
    let popUp=e.target.lastChild.previousElementSibling;
    popUp.style.visibility='visible'
});





*/

/*MODALES
const modalSol = document.querySelector('.modal-sol')
const modalJupiter = document.querySelector('.modal-jupiter')
const modalTierra = document.querySelector('.modal-tierra')
const modalVenus = document.querySelector('.modal-venus')
const modalMercurio = document.querySelector('.modal-mercurio')
const modalLuna = document.querySelector('.modal-luna')
const modalSaturno = document.querySelector('.modal-saturno')

//Buttons

const btnSol = document.querySelector('.open-sol')
const btnJupiter = document.querySelector('.open-jupiter')
const btnTierra = document.querySelector('.open-tierra')
const btnVenus = document.querySelector('.open-venus')
const btnMercurio = document.querySelector('.open-mercurio')
const btnLuna = document.querySelector('.open-luna')
const btnSaturno = document.querySelector('.open-saturno')




/*
let audioSol=document.querySelector('.audio-sol')
let audioMercurio=document.querySelector('.audio-mercurio')
let audioVenus=document.querySelector('.audio-venus')
let audioTierra=document.querySelector('.audio-tierra')
let audioLuna=document.querySelector('.audio-luna')
let audioMarte=document.querySelector('.audio-marte')
let audioJupiter=document.querySelector('.audio-jupiter')
let audioSaturno=document.querySelector('.audio-saturno')
*/

/*CLOSE
const btnClose = document.querySelectorAll('.close')

btnSol.addEventListener('click', ()=>{
    modalSol.style.visibility = 'visible';
    

})


btnJupiter.addEventListener('click', ()=>{
    modalJupiter.style.visibility = 'visible';
})




btnTierra.addEventListener('click', ()=>{
    modalTierra.style.visibility = 'visible';
})



btnMercurio.addEventListener('click', ()=>{
    modalMercurio.style.visibility = 'visible';
})



btnSaturno.addEventListener('click', ()=>{
    modalSaturno.style.visibility = 'visible';
})



btnLuna.addEventListener('click', ()=>{
    modalLuna.style.visibility = 'visible';
})



btnVenus.addEventListener('click', ()=>{
    modalVenus.style.visibility = 'visible';
})





*/

/*

openBTN.forEach(btn => {
    btn.addEventListener('click', () => {

        if (btn === modalSol) {

            modalSol.style.visibility = 'visible';
        } else if (btn === modalJupiter) {
            modalJupiter.style.visibility = 'visible';
        }
    })
})


*/

/*
const openModal=()=>{
    modalSol.style.visibility = 'visible';
}



openBTN.forEach(btn=>{
    btn.addEventListener('click',openModal)
  
});

*/

/*




const openModales = (e) =>{
    modales.forEach(modal=>{
        e.target.modal.style.visibility='visible'
    })
}


openBTN.forEach(btn=>{
    btn.addEventListener('click', openModales)
})

/*
openBTN.forEach(btn => {
    btn.addEventListener('click', openModales)
    });

*/

/*
openBTN.forEach(btn=>{
    btn.addEventListener('click',()=>{
        // BUSCO EL MODAL QUE LE CORRESPONDE AL ELEMENTO QUE HIZO CLICK
        let modal = "";
        
        // MUESTRO EL MODAL
        modal.style.visibility='visible';
    });
});*/