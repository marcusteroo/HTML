const formulario = document.getElementById("form");
formulario.addEventListener("submit",(event)=>{
    event.preventDefault();
    for(let i=0;i<event.target.length;i++){
        console.log(event.target[i].value)
    }
} )