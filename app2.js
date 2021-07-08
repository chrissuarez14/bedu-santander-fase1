const forms=document.querySelectorAll(".signup-form") //identificar clase con .  busca toodos los alementos que tengan eso que escribi 


// console.log(forms);  
getTemplate=()=>{
    return fetch("./tempalte.html").then((response)=>response.text()) //Lanzas una peticion
 //lanzar funcion async para tener algo fetch. Si encuentra manda lo del then y si no lo del catch
}

const sendEmailToApi = (address, template) => {
    fetch(`https://bedu-email-sender-api.herokuapp.com/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address: address,
        template: template,
      }),
    })
      .then((results) => {
        console.log(results);
        document.getElementById("email").value = ""
        alert("E-mail send!!!")
      })
      .catch((error) => {
        console.error(error);
        document.getElementById("email").value = ""
        alert("Send failed")
      });
  };
  
  const sendEmail = (event) => {
    event.preventDefault();
    const email = event.target.querySelector("input").value;
    getTemplate()
      .then((template) => {
        sendEmailToApi(email, template);
      })
      .catch((error) => {
        console.log(error, "error al convertir el template.")
  




for(let i=0;i<forms.length;i++){
    

    forms[i].addEventListener("submit",sendEmail) //acion, que proceso hara 
}



//vainilla es javascript puro 
//Signo de peso buena practica, lo mayoria,referencia que contiene elemento de al interfaz cuando usas dom

//_variable privada que no se puede usar en otros archivos  al igual con $variable 

//var no improta donde declare se puede usar en toda la hoja, no da error da valor indefinido
//let existe de donde lo declares solo hacia abajo
//No implementar jquery solo saber que es
//y sola sin nada y=50 lo hace como var
//arrow function solo sirve hacia abajo no hacia arriba y el function si abajo o arriba, como let y var


//Buscar guias materialdesign recomendaciones de apps,bootstrap,figma
//Especialarse en algo
//Disenador te mando el disneo ux 