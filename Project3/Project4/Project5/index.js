let items = []
const itemsDiv = document.getElementById("items")
const input = document.getElementById("itemInput")
const storageKey = "items"

function renderItems() {
  itemsDiv.innerHTML = null;
  for (const [idx, item] of Object.entries(items)) {


    const container = document.createElement("div")
    container.style.marginBottom = "10px"

    const text = document.createElement("p")
    text.style.display = "inline"
    text.style.marginRight = "5px"
    text.textContent = item;

    const button = document.createElement("button")
    button.textContent = "Delete"
    button.onclick = () => removeItems(idx)

    container.appendChild(text)
    container.appendChild(button)

    itemsDiv.appendChild(container)



  }
}

function loadItems() {

  const oldItems = localStorage.getItem(storageKey)
  if (oldItems) items = JSON.parse(oldItems)
  renderItems()

}

function saveItems() {

  const stringItems = JSON.stringify(items)
  localStorage.setItem(storageKey, stringItems) //setItem has key value pair only for the string type both of them
}


function addItem() {

  const value = input.value;
  if (!value) {
    alert("you cannot do this")
    return
  }
  items.push(value)
  renderItems()
  input.value = ""
  saveItems()

}

function removeItems(idx) {

  items.splice(idx, 1)
  renderItems()
  saveItems()

}

document.addEventListener("DOMContentLoaded", loadItems) //used to load this function as soon as the html file has been loaded 