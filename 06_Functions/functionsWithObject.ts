// type for the getdata() function product parameter
type GetDataType = (product: ProductType) => void;

const getData: GetDataType = (product) => {
    // product.id = "kdkfjad"; // cannot assign to the id as it is read-only......
    console.log(product);
}


// type for the product argument
interface ProductType {
    name: string,
    stock: number,
    price: number,
    image_url: string,
    readonly id: string,
};
 
const prod1: ProductType = {
    name: "Detergent",
    stock: 200,
    price: 34,
    image_url: "https://photo.com",
    id: "lalluid",
}

getData(prod1);