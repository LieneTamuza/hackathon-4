import { NavLink } from 'react-router-dom';
import cat1 from '../Assets/Images/cats1.JPG';
import cat2 from '../Assets/Images/cats2.JPG';
import cat3 from '../Assets/Images/cats3.JPG';
import cat4 from '../Assets/Images/cats4.JPG';
import cat5 from '../Assets/Images/cats5.JPG';

const productsArray = [
    {
        image: cat1,
        name: 'Product 1',
        price: '9.99 EUR',
        productId: '100',
        categoryId: '1'
    },
    {
        image: cat2,
        name: 'Product 2',
        price: '10.99 EUR',
        productId: '101',
        categoryId: '1'
    },
    {
        image: cat3,
        name: 'Product 3',
        price: '11.99 EUR',
        productId: '102',
        categoryId: '1'
    },
    {
        image: cat4,
        name: 'Product 4',
        price: '12.99 EUR',
        productId: '103',
        categoryId: '2'
    },
    {
        image: cat5,
        name: 'Product 5',
        price: '13.99 EUR',
        productId: '104',
        categoryId: '2'
    },
    {
        image: cat1,
        name: 'Product 1',
        price: '9.99 EUR',
        productId: '105',
        categoryId: '2'
    },
    {
        image: cat2,
        name: 'Product 2',
        price: '10.99 EUR',
        productId: '106',
        categoryId: '3'
    },
    {
        image: cat3,
        name: 'Product 3',
        price: '11.99 EUR',
        productId: '107',
        categoryId: '3'
    },
    {
        image: cat4,
        name: 'Product 4',
        price: '12.99 EUR',
        productId: '108',
        categoryId: '3'
    },
    {
        image: cat5,
        name: 'Product 5',
        price: '13.99 EUR',
        productId: '109',
        categoryId: '3'
    },
]

function ProductList() {

    return (
        <div className="container">
            <div className="row mb-5">
                {productsArray.map((product) => {
                    return (
                        <div className="col ">
                            <div className="card" style={{ width: "200px" }}>
                                <NavLink to="/categories/category/product" className="nav-link">
                                    <img src={product.image} className="card-img-top rounded" alt="..." />
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