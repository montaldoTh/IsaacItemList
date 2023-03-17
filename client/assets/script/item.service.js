import { Item } from "./item.class.js";

export class ItemService{
    constructor(){}

    getAll(target){
        let headers = new Headers()
        let option = {
            headers: headers, 
            method: 'GET'
        }
        return fetch('/item', option)
        .then((res)=>{
            if(res.ok){
                return res.json();
            }
        })
        .then((response)=>{
            response.forEach(item =>{
                let cellule = document.createElement('tr')
                let name = document.createElement('td')
                let icon = document.createElement('td')
                let img = document.createElement('img')
                let detailsCol = document.createElement('td')
                let details = document.createElement('a')
                let delCol = document.createElement('td')
                let del = document.createElement('button')
                let detailsIcon = document.createElement('i')
                detailsIcon.classList.add('fa-solid', 'fa-magnifying-glass')
                let delIcon = document.createElement('i')
                delIcon.classList.add('fa-solid', 'fa-trash')
                details.setAttribute('href', './pages/details.html#' + item.id)
                details.classList.add('btn', 'btn-success')
                details.appendChild(detailsIcon)
                detailsCol.appendChild(details)
                del.classList.add('btn', 'btn-danger')
                del.addEventListener('click', ()=>{
                    this.delete(item.id)
                })
                del.appendChild(delIcon)
                delCol.appendChild(del)
                img.setAttribute('src', `${item.icon}`)
                img.style.width="65px"
                name.innerText = item.name
                icon.appendChild(img)
                cellule.appendChild(name)
                cellule.appendChild(icon)
                cellule.appendChild(detailsCol)
                cellule.appendChild(delCol)
                target.appendChild(cellule)
            })
        })
    }
    get(id){
        let headers = new Headers()
        let option = {
            headers: headers,
            method: "GET",
        }
        return fetch('/item/' + id, option)
        .then((res)=>{
            if(res.ok){
                return res.json();
            }
        })
        .then((response)=>{
            let obj = new Item(response.id, response.name, response.icon, response.quote, response.description, response.quality)
            return obj
        })
        .catch((err) => {
            console.log(err);
        })
    }
    edit(item){
        let option = {
            method: 'PUT',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(item)
        }
        return fetch('/item/' + item.id, option)
        .then((res)=>{
            if(res.ok){
                console.log(res.status);
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    add(item){
        let option = {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(item)
        }
        return fetch('/item', option)
        .then((res)=>{
            if(res.ok){
                console.log(res.status);
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    delete(id){
        let headers = new Headers
        let option = {
            method: 'DELETE',
            headers: headers
        }
        return fetch('/item/' + id, option)
        .then((res)=>{
            if(res.ok){
                console.log(res.status);
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}