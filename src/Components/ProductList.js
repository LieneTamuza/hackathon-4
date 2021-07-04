import { NavLink, useLocation } from 'react-router-dom';
import cat1 from '../Assets/Images/cats1.JPG';
import cat2 from '../Assets/Images/cats2.JPG';
import cat3 from '../Assets/Images/cats3.JPG';
import cat4 from '../Assets/Images/cats4.JPG';
import cat5 from '../Assets/Images/cats5.JPG';
import landscape6 from '../Assets/Images/landscape6.JPG';
import landscape4 from '../Assets/Images/landscape4.JPG';
import flowers2 from '../Assets/Images/flowers2.JPG';
import flowers4 from '../Assets/Images/flowers4.jpg';
import mug1 from '../Assets/Images/Mugs/mug1.png';
import mug4 from '../Assets/Images/Mugs/mug4.png';
import tshirtFlowers from '../Assets/Images/Tshirts/tshirt2-1.png';
import tshirtLandscapes from '../Assets/Images/Tshirts/tshirt4-1.png';
import tshirtCats from '../Assets/Images/Tshirts/tshirt3-1.png';


const productsArray = [
    {
        image: landscape6,
        name: 'Mountain view',
        price: '19.99 EUR',
        productId: '100',
        categoryId: 'Landscapes'
    },
    {
        image: mug4,
        name: 'Mountain view - mug',
        price: '7.99 EUR',
        productId: '101',
        categoryId: 'Landscapes'
    },
    {
        image: tshirtLandscapes,
        name: 'Pull-over Mountains',
        price: '28.99 EUR',
        productId: '202',
        categoryId: 'Landscapes'
    },
    {
        image: landscape4,
        name: 'River view',
        price: '18.99 EUR',
        productId: '102',
        categoryId: 'Landscapes'
    },
    {
        image: flowers2,
        name: 'Flowers 1',
        price: '12.99 EUR',
        productId: '103',
        categoryId: 'Flowers'
    },
    {
        image: mug1,
        name: 'Flowers - mug',
        price: '9.99 EUR',
        productId: '104',
        categoryId: 'Flowers'
    },
    {
        image: flowers4,
        name: 'Flowers - Iris',
        price: '13.99 EUR',
        productId: '105',
        categoryId: 'Flowers'
    },
    {
        image: tshirtFlowers,
        name: 'Flowers on Shirt',
        price: '15.99 EUR',
        productId: '205',
        categoryId: 'Flowers'
    },
    {
        image: cat2,
        name: 'Cat in a dress',
        price: '10.99 EUR',
        productId: '106',
        categoryId: 'Cats'
    },
    {
        image: cat3,
        name: 'Staring cat',
        price: '11.99 EUR',
        productId: '107',
        categoryId: 'Cats'
    },
    {
        image: cat4,
        name: 'Hellow human',
        price: '12.99 EUR',
        productId: '108',
        categoryId: 'Cats'
    },
    {
        image: tshirtCats,
        name: 'Tshirt - Cat',
        price: '17.99 EUR',
        productId: '208',
        categoryId: 'Cats'
    },
    {
        image: cat5,
        name: 'Ginger cat',
        price: '13.99 EUR',
        productId: '109',
        categoryId: 'Cats'
    },
]

let productsToShow = [];

function ProductList() {

    let location = useLocation();
    console.log(location)

    if (location.pathname === "/categories/Landscapes") {
        productsToShow = productsArray.filter(product => product.categoryId === "Landscapes")
    } else if (location.pathname === "/categories/Flowers") {
        productsToShow = productsArray.filter(product => product.categoryId === "Flowers")
    } else {
        productsToShow = productsArray.filter(product => product.categoryId === "Cats")
    }


    return (
        <div className="container">
            <div className="row mb-5">
                {productsToShow.map((product) => {
                    return (
                        <div className="col ">
                            <div className="card">
                                <NavLink to={{
                                        pathname:`/categories/${product.categoryId}/${product.productId}`,
                                    }} className="nav-link">
                                    <img src={product.image} className="card-img-top img-fluid rounded" alt="..." />
                                </NavLink>
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductList;