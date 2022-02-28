/* Crie 5 objetos nesse formato
{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,
a pessoa deve ser maior de idade e brasileira para ser aprovada.
*/
const personOne = {nome: "Selma", idade:"17", sexo:"Feminino", profissão: "Programadora", nacionalidade:"argentina"}
if(personOne.idade >= 18 && personOne.nacionalidade === "Brasileira" || personOne.nacionalidade === "Brasileira"){
    console.log("Você passou no processo.")
} else {
    console.log("Você não passou no processo.")
}