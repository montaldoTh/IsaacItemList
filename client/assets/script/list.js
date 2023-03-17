import { ItemService } from "./item.service.js";

let table = document.querySelector('#itemList')
const itemService = new ItemService()
let list = itemService.getAll(table)