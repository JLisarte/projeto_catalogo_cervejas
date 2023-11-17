async function buscaProduto(currentPage, itemsPerPage) {
  try {
    const url = `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${itemsPerPage}`

    const response = await fetch(url)
    const beers = await response.json()

    console.log(beers)
    return beers
  } catch (error) {
    console.error("Error! ", error)
    return []
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  const tbody = document.querySelector("#tbody")
  const select = document.querySelector("#select")

  const cerveja = await buscaProduto(1, 5)

  cerveja.forEach((element) => {
    const newTr = document.createElement("tr")
    const newTdTitle = document.createElement("td")
    newTdTitle.id = "id_title"
    const newPTitle = document.createElement("p")
    const newTdDescripition = document.createElement("td")
    newTdDescripition.id = "id_description"
    const newPText = document.createElement("p")
    const newTdImg = document.createElement("td")
    newTdImg.id = "id_img"
    const urlImg = document.createElement("img")

    newPTitle.textContent = element.name
    newPText.textContent = element.description
    urlImg.src = element.image_url

    newTr.appendChild(newTdTitle)
    newTdTitle.appendChild(newPTitle)
    newTr.appendChild(newTdDescripition)
    newTdDescripition.appendChild(newPText)
    newTr.appendChild(newTdImg)
    newTdImg.appendChild(urlImg)
    tbody.appendChild(newTr)
  })

  select.addEventListener("change", async (e) => {
    const value = e.target.value
    const cerveja = await buscaProduto(1, value)

    tbody.innerHTML = ""

    cerveja.forEach((element) => {
      const newTr = document.createElement("tr")
      const newTdTitle = document.createElement("td")
      newTdTitle.id = "id_title"
      const newPTitle = document.createElement("p")
      const newTdDescripition = document.createElement("td")
      newTdDescripition.id = "id_description"
      const newPText = document.createElement("p")
      const newTdImg = document.createElement("td")
      newTdImg.id = "id_img"
      const urlImg = document.createElement("img")

      newPTitle.textContent = element.name
      newPText.textContent = element.description
      urlImg.src = element.image_url

      newTr.appendChild(newTdTitle)
      newTdTitle.appendChild(newPTitle)
      newTr.appendChild(newTdDescripition)
      newTdDescripition.appendChild(newPText)
      newTr.appendChild(newTdImg)
      newTdImg.appendChild(urlImg)
      tbody.appendChild(newTr)
    })
  })
})

