const  palavras = ["carambola", "abacaxi", "ciriguela", "guavira", "pitanga", "lichia", "banana", "caju"];
const segredo =
  palavras[Math.floor(Math.random() * palavras.length)];
const letrasE = [];
const letrasC = [];

document.addEventListener("keydown", (evento) => {
  const cod = evento.keyCode;
  if (isLetra(cod)) {
    const letra = evento.key;
    if (letrasE.includes(letra)) {
      alertLetra();
    } else {
      if (segredo.includes(letra)) {
        letrasC.push(letra);
      } else {
        letrasE.push(letra);
      }
    }
    attJogo();
  }
});

function attJogo() {
  mostrarLetrasE();
  mostrarLetrasC();
  desenho();
  check();
}

function mostrarLetrasE() {
  const div = document.querySelector(".setorLetrasE");
  div.innerHTML = "<h3>Letras incorretas</h3>";
  letrasE.forEach((letra) => {
    div.innerHTML += `<span>${letra}</span>`;
  });
}

function mostrarLetrasC() {
  const setor = document.querySelector(".setorSegredo");
  setor.innerHTML = "";
  segredo.split("").forEach((letra) => {
    if (letrasC.includes(letra)) {
      setor.innerHTML += `<span>${letra}</span>`;
    } else {
      setor.innerHTML += `<span>_</span>`;
    }
  });
}

function check() {
  let aviso = "";
  const setor = document.querySelector(".setorSegredo");
  const corpo1 = document.querySelectorAll(".corpo");

  if (letrasE.length === corpo1
    .length) {
    aviso = "Fim de jogo! Você perdeu!";
  }

  if (segredo === setor.innerText) {
    aviso = "Parabéns! Você ganhou!";
  }

  if (aviso) {
    document.querySelector("#aviso").innerHTML = aviso;
    document.querySelector(".setorMensagem").style.display = "flex";
  }
}

function desenho() {
  const corpo1
   = document.querySelectorAll(".corpo");
  for ( i = 0; i < letrasE.length; i++) {
    corpo1[i].style.display = "block";
  }
}

function alertLetra() {
  const aviso = document.querySelector(".alertLetra");
  aviso.classList.add("show");
  setTimeout(() => {
    aviso.classList.remove("show");
  }, 1000);
}

function isLetra(cod) {
  return cod >= 65 && cod <= 90;
}

function recomecar() {
  window.location.reload();
}
