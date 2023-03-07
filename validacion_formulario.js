/* INTENTO 1 DE VALIDACION DE DATOS
const nombre =document.getElementsByName("name");

const email =document.getElementsByName("emai");

const form =document.getElementById("form");

const parrafo =document.getElementById("warning");

const boton =document.getElementById("boton");

form.addEventListener('submit', evento=>{
    
    console.log("Entre al js");

    evento.preventDefault();

    let alerta="";
    let regexemail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let entro=false;

    parrafo.innerHTML="";

    if(nombre.values.length<3){
        console.log("El nombre es muy corto "+nombre.values.length);
        warning+='El nombre no es valido <br>';
        entro=true;
    }

    if(!regexemail.test(email.values)){
        console.log("El email no es valido"+email.values);
        warning+='El email no es valido <br>';
        entro=true;
    }

    if(entro){
        console.log("Entro: "+entro)
        parrafo.innerHTML=warning

    }else{
        console.log("Entro: "+entro)
        parrafo.innerHTML="OK"
    }

})*/


/* INTENTO 2 DE VALIDACION DE DATOS
    FALTA COMPLETAR VALIDACION DE TELEFONO
var nombre=document.getElementById('name');

var mail=document.getElementById('email');

var tel=document.getElementById('tel');

var error= document.getElementById('warning');

error.style.color='red';

function enviar_formulario(){
    console.log("Formulario enviado correctamente");

    var mensajesError=[];

    let regexemail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let regextel= 

    if(nombre.value===null || nombre.value===''){
        mensajesError.push('Ingresa tu nombre');
    }

    if(mail.value===null || mail.value===''){
        mensajesError.push('Ingresa tu email');
    }

    if(!regexemail.test(mail.value)){
        console.log("El email no es valido"+mail.value);
        mensajesError.push('El email no es valido');
        
    }

    if(tel.value===null || tel.value===''){
        mensajesError.push('Ingresa tu telefono');
    }

    if(!regextel.test(tel.value)){
        mensajesError.push('El telefono no es valido');
    }

    error.innerHTML= mensajesError.join('<br>');

    return false;


}/*

/* 
INTENTO 3 DE VALIDACION DE DATOS
*/ 
/*
const form=document.getElementById('form');

const nombre=Document.getElementById('name');

const email=document.getElementById('email');

const tel=document.getElementById('tel');

form.addEventListener('submit', e=>{
    e.preventDefault();

    validateInputs();
});

validateInputs= () =>{
    const nameValue=nombre.value.tr
};
*/