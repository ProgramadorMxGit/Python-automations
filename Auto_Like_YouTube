var buttons = document.getElementsByClassName("yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-s yt-spec-button-shape-next--icon-button yt-spec-button-shape-next--override-small-size-ico

for (var i = 0; i < buttons.length; i++) {
  // Verificar si la posición es par, pares = like, inpar = dislike
  if (i % 2 === 0) {
    // Agregar un tiempo de espera de 3 segundos antes de ejecutar el evento onclick
    setTimeout(function(button) {
      button.onclick();
    }, i * 3000, buttons[i]);
  }
}
