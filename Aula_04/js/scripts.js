const nome = document.getElementById("name").value;
const email = document.getElementById("email").value;
const dataNsc = document.getElementById("data-nascimento").value;
const fixo = document.getElementById("fixo").value;
const cel = document.getElementById("celular").value;

document.getElementById("aluno").addEventListener("click", toggleView("aluno"));
document.getElementById("professor").addEventListener("click", toggleView("professor"));

function toggleView(tipo) {
    const area = document.getElementById("area");
    const latter = document.getElementById("latter");
    const matricula = document.getElementById("matricula");
    const curso = document.getElementById("curso");

    console.log(tipo);
}