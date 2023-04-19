const vitrine = document.querySelector(".vitrine___wrapper")
const addBtn = document.querySelector(".addBn") 
// const delBtn = document.querySelector(".delBn") doc classlist contains delBtn
// const favBtn = document.querySelector(".favBn") doc classlist contains favBtn
let id = 0; 
class Base {
    constructor()
    {
        this.id = id+1,
        this.isDeleted = false,
        this.createdAt = new Date,
        this.modifiedAt = new Date
    }
}
class Car extends Base{
    constructor(engine,gearBox,ban,price,image,km,litre,brand,model,year)
    {
        this.engine = engine,
        this.gearBox = gearBox,
        this.ban = ban,
        this.price = price,
        this.image = image,
        this.km = km,
        this.litre = litre,
        this.brand = brand,
        this.model = model,
        this.year = year
    }
}
function newCar(){
    let newCar=new Car()
}

const cars =[]
