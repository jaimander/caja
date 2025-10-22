let puertaIzq = document.getElementById("puertaIzq");
let puertaDer = document.getElementById("puertaDer");
let puertaArr = document.getElementById("puertaArr");
let puertaAba = document.getElementById("puertaAba");

let chapaIzq = document.getElementById("chapaIzq");
let chapaDer = document.getElementById("chapaDer");

puertaIzq.classList.add("cerrar");
puertaDer.classList.add("cerrar");
puertaArr.classList.add("cerrar");
puertaAba.classList.add("cerrar");

puertaIzq.onclick = function () {
  if (puertaIzq.classList.contains("abrir")) {
    puertaIzq.classList.remove("abrir");
    puertaIzq.classList.add("cerrar");
  } else {
    puertaIzq.classList.remove("cerrar");
    puertaIzq.classList.add("abrir");
  }
};

puertaDer.onclick = function () {
  if (puertaDer.classList.contains("abrir")) {
    puertaDer.classList.remove("abrir");
    puertaDer.classList.add("cerrar");
  } else {
    puertaDer.classList.remove("cerrar");
    puertaDer.classList.add("abrir");
  }
};

puertaArr.onclick = function () {
  if (puertaArr.classList.contains("abrir")) {
    puertaArr.classList.remove("abrir");
    puertaArr.classList.add("cerrar");
  } else {
    puertaArr.classList.remove("cerrar");
    puertaArr.classList.add("abrir");
  }
};

puertaAba.onclick = function () {
  if (puertaAba.classList.contains("abrir")) {
    puertaAba.classList.remove("abrir");
    puertaAba.classList.add("cerrar");
  } else {
    puertaAba.classList.remove("cerrar");
    puertaAba.classList.add("abrir");
  }
};
