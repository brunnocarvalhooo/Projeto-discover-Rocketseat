function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // if (html.classList.contains("Light")) {
  //   html.classList.remove("Light")
  // } else {
  //   html.classList.add("Light")
  // }

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-alt.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  //setar o atributo alt com um novo texto para o modo dark e light
  const img2 = document.querySelector("#profile alt")

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Foto de Brunno Carvalho para o tema light")
  } else {
    img.setAttribute("alt", "Foto de brunno Carvalho para o tema dark")
  }
}
