export class Item{
    id;
    name;
    icon;
    quote;
    description;
    quality;

    constructor(id, name, icon, quote, description, quality){
        this.id = id
        this.name = name
        this.icon = icon
        this.quote = quote
        this.description = description
        this.quality = quality
    }

    get id(){
        return this.id
    }
    get name(){
        return this.name
    }
    get icon(){
        return this.icon
    }
    get quote(){
        return this.quote
    }
    get description(){
        return this.description
    }
    get quality(){
        return this.quality
    }

    set id(x){
        this.id = x
    }
    set name(x){
        this.name = x
    }
    set icon(x){
        this.icon = x
    }
    set quote(x){
        this.quote = x
    }
    set description(x){
        this.description = x
    }
    set quality(x){
        this.quality = x
    }
}