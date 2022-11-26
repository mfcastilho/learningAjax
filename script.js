//https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome

window.addEventListener("load", () =>{
  const states = document.querySelector("#states");
  
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
    .then(statesReturned => {
      return statesReturned.json();
    })
    .then(statesFormated => {  

      for(let i = 0; i<statesFormated.length;i++){
        states.innerHTML += `<li>${statesFormated[i].nome}</li>`;
      }
      
    })
    .catch(error => {
      states.innerHTML += `<li>${error}</li>`;
    });


});
