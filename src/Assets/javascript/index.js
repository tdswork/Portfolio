const mode = document.getElementById("Mode");
const html = document.documentElement;

function aplicarTemaSalvo() {
  const temaSalvo = localStorage.getItem("modo-tema");

  if (temaSalvo === "claro") {
    html.classList.add("light");
    mode.classList.remove("fa-sun");
    mode.classList.add("fa-moon");
  } else {
    html.classList.remove("light");
    mode.classList.remove("fa-moon");
    mode.classList.add("fa-sun");
  }
}

aplicarTemaSalvo();

mode.addEventListener("click", () => {
  html.classList.toggle("light");

  const temaAtual = html.classList.contains("light") ? "claro" : "escuro";
  localStorage.setItem("modo-tema", temaAtual);

  mode.classList.toggle("fa-sun");
  mode.classList.toggle("fa-moon");
});
