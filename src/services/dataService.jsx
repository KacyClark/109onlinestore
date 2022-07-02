let catalog = [
    {
        id: 1,      
        title: "Dog Collar",
        price: 15,
        imageUrl: "/images/cat.jpg",
        category: "accessories",
        discount: "10% off 2 items",
        inStock: 20
    },
    {
        id: 2,
        title: "Dog Leash",
        price: 20,
        imageUrl: "/images/cat.jpg",
        category:"accessories",
        discount: "10% off 2 items",
        inStock: 20
    },
    {
        id: 3,
        title: "Portable Poop Bags",
        price: 7,
        imageUrl: "/images/cat.jpg",
        category:"extras",
        discount: "10% off 2 items",
        inStock: 50
    },
    {
        id: 4,
        title: "Feeder Bowl",
        price: 12,
        imageUrl: "/images/cat.jpg",
        category:"extras",
        discount: "10% off 2 items",
        inStock: 30
    },
    {
        id: 5,
        title: "Water Bowl",
        price: 12,
        imageUrl: "/images/cat.jpg",
        category:"extras",
        discount: "10% off 2 items",
        inStock: 30
    },
    {
        id: 6,
        title: "2 cup Feed Scoop",
        price: 5,
        imageUrl: "/images/cat.jpg",
        category:"extras",
        discount: "10% off 2 items",
        inStock: 50
    },
    {
        id: 7,
        title: "Dog Bed",
        price: 20,
        imageUrl: "/images/cat.jpg",
        category:"accessories",
        discount: "10% off 2 items",
        inStock: 25
    },
    {
        id: 8,
        title: "Dog Blanket",
        price: 15,
        imageUrl: "/images/cat.jpg",
        category:"accessories",
        discount: "10% off 2 items",
        inStock: 35
    },
    {
        id: 9,
        title: "Dog Toy",
        price: 7,
        imageUrl: "/images/cat.jpg",
        category:"accessories",
        discount: "10% off 2 items",
        inStock: 40
    }]

    class DataService {
        getCatalog(){
            return catalog;
        }
    }
    
    export default DataService;