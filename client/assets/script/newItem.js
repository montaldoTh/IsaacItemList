import { Item } from "./item.class.js";
import { ItemService } from "./item.service.js";

let btn = document.querySelector('#add')
let itemService= new ItemService()

btn.addEventListener('click', ()=>{
    let name = document.querySelector('#name')
    let quote = document.querySelector('#quote')
    let description = document.querySelector('#description')
    let quality = document.querySelector('#quality')

    let newItem = new Item('', name.value, quote.value, description.value, quality.value)

    let adding = itemService.add(newItem)
    adding.then(()=>{
        name.value='',
        quote.value='',
        description.value='',
        quality.value=''
    })
})