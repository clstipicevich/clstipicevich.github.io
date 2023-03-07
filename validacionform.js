const formulario=document.getElementById('formulario');

const inputs=document.querySelectorAll('#formulario input')

const expresiones ={
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
	asunto: /^[a-zA-Z0-9_.+-]$/ // Letras, espacios y espacios, pueden llevar acentos.
} 

const campos={
    nombre: false,
    email: false,
    telefono: false,
    asunto: false
}

const validarFormulario = (e) =>{
    switch (e.target.name) {
        case "nombre":
            if (expresiones.nombre.test(e.target.value)) {
                document.getElementById('group_nombre').classList.remove('hero_group-incorrecto');

                document.querySelector('#group_nombre .hero_input-error').classList.remove('hero_input-error-activo');

                campos['nombre']=true;
            } else {
                document.getElementById('group_nombre').classList.add('hero_group-incorrecto');

                document.querySelector('#group_nombre .hero_input-error').classList.add('hero_input-error-activo');

                campos['nombre']=false;
            }            
        break;    
        
        case "email":
        
            if (expresiones.email.test(e.target.value)) {
                document.getElementById('group_email').classList.remove('hero_group-incorrecto');

                document.querySelector('#group_email .hero_input-error').classList.remove('hero_input-error-activo');

                campos['email']=true;
            } else {
                document.getElementById('group_email').classList.add('hero_group-incorrecto');

                document.querySelector('#group_email .hero_input-error').classList.add('hero_input-error-activo');

                campos['email']=false;
            }
        break;    
        
        case "telefono":
            if (expresiones.telefono.test(e.target.value)) {
                document.getElementById('group_telefono').classList.remove('hero_group-incorrecto');

                document.querySelector('#group_telefono .hero_input-error').classList.remove('hero_input-error-activo');

                campos['telefono']=true;
            } else {
                document.getElementById('group_telefono').classList.add('hero_group-incorrecto');

                document.querySelector('#group_telefono .hero_input-error').classList.add('hero_input-error-activo');

                campos['telefono']=false;
            }
         break;        
        
            
    }
}


inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    
});

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
 
    const terminos=document.getElementById('terminos');
    if (campos.nombre && campos.email && campos.telefono && terminos.checked) {
        formulario.reset();
        console.log('envio')

        document.getElementById('hero_mensaje-enviar').classList.add('hero_mensaje-enviar-activo')

        setTimeout(()=>{
            
        document.getElementById('hero_mensaje-enviar').classList.remove('hero_mensaje-enviar-activo')
        }, 5000);
    }else{
        document.getElementById('hero_mensaje').classList.add('hero_mensaje-activo');
    }
});

