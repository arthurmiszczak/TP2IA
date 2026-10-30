document.body.innerHTML = "";
var maVariableGlobal = 2;
let maVariableLocal = 3;
const MACONSTANTE = "coucou";

const div1 = document.createElement('div');
div1.textContent = "exo1 " + maVariableGlobal + " " + MACONSTANTE + " " + maVariableLocal;
document.body.appendChild(div1);









document.body.innerHTML = "";

const input1 = document.createElement('input');
const input2 = document.createElement('input');
const bouton1 = document.createElement('button');
bouton1.textContent = "Additionner";

document.body.appendChild(input1);
document.body.appendChild(input2);
document.body.appendChild(bouton1);

bouton1.onclick = () => {
  const somme = Number(input1.value) + Number(input2.value);
  console.log("La somme est :", somme);
};