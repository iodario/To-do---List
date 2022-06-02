const personas = [];
const turno_agenda = [];

let formulario = document.getElementById("formulario");

class Persona {
    constructor(nombre, apellido, email, edad, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.edad = parseInt(edad);
        this.dni = parseInt(dni);
        
    }
    solicitar_datos_turno() {
    }
}




formulario.onsubmit = (e) => {

    e.preventDefault();
    const inputs = e.target.children;
    personas.push
      (new
        Persona({ nombre: inputs[0].value, apellido: inputs[1].value,  email: inputs[2].value, edad: inputs[3].value,  dni: inputs[4].value }));
    
    // mostrarEstudiantes(estudiantes);
    // const btnEstudiantes = document.getElementsByClassName('btnEstudiante');
    // for (const boton of btnEstudiantes) {
    //   boton.onclick = (e) => {
    //     const seleccionado = estudiantes.find(obj => obj.id == e.target.id);
    //     let notificacion = document.createElement("h6");
    //     notificacion.innerHTML = `Nombre ${seleccionado.nombre} -
    // Edad ${seleccionado.edad}`;
    //     salida.prepend(notificacion);
    //     salida.prepend(notificacion);
//       }
//     }

alert(inputs[0].value);

   }
  
  
  function mostrarEstudiantes(estudiantes) {
    salida.innerHTML = '';
    for (const estudiante of estudiantes) {
    let divEstudiante = document.createElement("div");
    divEstudiante.innerHTML = `<h2>${estudiante.nombre}</h2>
    <p>${estudiante.edad} / ${estudiante.curso} </p>
    <button id='${estudiante.id}' class='btnEstudiante'>Seleccionar</button>`
    salida.appendChild(divEstudiante);
    }
    }
    const salida = document.createElement("div");
    document.body.appendChild(formulario);
    document.body.appendChild(salida);
  
  
  
