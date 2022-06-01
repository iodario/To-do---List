//Identificar el elemento titulo y modifico su contenido con un string.

let encuento_titulo = document.getElementById("titulo");
titulo.textContent = "Lista de tareas";


//Identifico el elemento lista. Creo un Array, pusheo 3 elementos de tipo string 
// y los muestro en el elemento recorriendo el arreglo . 

let listaEncontrada = document.getElementById("todoList") ;

let arreglo_items = [];
arreglo_items.push("Sacar el perro");
arreglo_items.push("Cocinar");
arreglo_items.push("Dormir");
arreglo_items.push("Lavar la ropa");
arreglo_items.push("Tender la ropa");

for (const item of arreglo_items) {
        
    // let elemento = document.createElement("li");
    // elemento.textContent = item;
    // listaEncontrada.appendChild(elemento);
       
    // elemento.addEventListener("click",()=>{
    //     alert("detectamos el click");
    // })
     
    mostrar_item(item)
     
}


// creamos una funcion que se llama adentro del for
function mostrar_item(ingreso){
    let element = document.createElement("li");
    element.textContent = ingreso; 
    listaEncontrada.appendChild(element);
    

    element.addEventListener("click",()=>{
        if (element.style.textDecoration === 'line-through') {
            element.style.textDecoration = 'none';
        }else{
            element.style.textDecoration = 'line-through';
        }
    })
}



let input = document.querySelector("#todo");

//------funcionalidad cuando apreto Enter
input.addEventListener("keypress",(e)=>{

    if (e.keyCode === 13){
        agregar_item_ok()     
    }    
})

//------funcionalidad cuando apreto el boton Agregar
let boton_agregar = document.querySelector('#addTodo');
boton_agregar.addEventListener("click", (e)=>{
    agregar_item_ok()
})


// factorizamos creando una funcion para no repetir codigo
function agregar_item_ok(){
    if(input.value.trim() != ""){
    mostrar_item(input.value);
    arreglo_items.push(input.value);
    input.value = "";
    }
}

//funcionalidad eliminar ultimo registro >>> no funciona, PREGUNTAR
let boton_eliminar = document.querySelector("#delTodo");
boton_eliminar.addEventListener("click", (e)=>{
    eliminar_item()
})

function eliminar_item(){
    let beto = arreglo_items.pop()
    
}




// function eliminar_item(){
//     arreglo_items.pop()
//     for (const item of arreglo_items) {
//         mostrar_item()        
//     }
// }









