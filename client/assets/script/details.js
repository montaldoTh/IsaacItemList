import { ItemService } from "./item.service.js";
import { Item } from "./item.class.js";

let id = window.location.hash.substring(1)
let itemService = new ItemService

let title = document.querySelector('.title h2')
let nameCont = document.querySelector('#name')
let icon = document.querySelector('#icon')
let quoteCont = document.querySelector('#quote')
let descriptionCont = document.querySelector('#description')
let qualityCont = document.querySelector('#quality')

let item = itemService.get(id)
item.then((obj)=>{
    title.innerText= obj.name
    icon.setAttribute('src',obj.icon)
    nameCont.value= obj.name
    quoteCont.value= obj.quote
    descriptionCont.value= obj.description
    qualityCont.value= obj.quality

    let modif = document.querySelector('#modif')
    modif.addEventListener('click', ()=>{
        let editdItem = new Item(obj.id, nameCont.value, obj.icon, quoteCont.value, descriptionCont.value, qualityCont.value)
        itemService.edit(editdItem)
    })
})
