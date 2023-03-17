const express= require('express')
const lodash = require('lodash')
const app = express()
const port = 3000
const items = require('./data/itemList.js')

app.use('/assets', express.static('./client/assets'))
app.use('/pages', express.static('./client/pages'))
app.use(express.json())

app.listen(port, ()=>{
    console.log(`Serveur running on port: ${port}`);
})

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/client/index.html');
})

app.get('/item', (req, res)=>{
    res.send(items)
})

app.get('/item/:id', (req, res)=>{
    let id = req.params.id
    let item = lodash.find(items, (item)=>{
        return item.id == id;
    })
    res.send(item)
})

app.put('/item/:id', (req, res)=>{
    let id = req.params.id
    let index = lodash.findIndex(items, (item)=>{
        return item.id == id 
    })
    items[index] = req.body
    console.log(items);
    res.sendStatus(200)
})

app.delete('/item/:id', (req, res)=>{
    let id = req.params.id
    console.log('id a del: ' + id);
    let index = lodash.findIndex(items, (item)=>{
        return item.id == id
    })
    console.log('id deleted: ' + index);
    items.splice(index, 1)
    res.sendStatus(200)
})

app.post('/item', (req, res)=>{
    let newItem = req.body
    newItem.id = (items.length) + 1
    items.push(newItem)
    console.log(items[items.length - 1]);
    res.sendStatus(200)
})