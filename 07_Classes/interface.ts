interface ProductType{
    name: string,
    price: number,
    stock: number,
    offer?: boolean,
}

interface GiveId {
    getId: () => string;
}
class Product implements ProductType, GiveId{
    private id: string = String(Math.random() * 1000);

    constructor(public name: string, public price: number, public stock: number){
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    getId = () => this.id;
}

const iphone = new Product("Iphone 15 Pro", 150000, 200);
iphone.getId();