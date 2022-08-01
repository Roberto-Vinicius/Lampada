function on() {
    document.getElementById("lampada").src = "imagens/on.jpg";
}

function off() {
    document.getElementById("lampada").src = "imagens/off.jpg";
}

function blink() {
  setTimeout(() => {
    document.getElementById("lampada").src = "imagens/off.jpg";
  }, 500);
  document.getElementById("lampada").src = "imagens/on.jpg";
}