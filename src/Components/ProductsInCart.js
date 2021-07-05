import landscape6 from '../Assets/Images/landscape6.JPG';

function ProductsInCart() {


    return (
        <div>
            <li className="list-group-item header text-center pt-4" id="cart-header">
                <div className="row py-0 d-flex align-items-center">
                    <div className="col-lg-4 d-lg-inline d-none">
                        <div className="row">
                            <div className="col-12">
                                <p className="lead">Product</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row d-flex align-items-center">
                            <div className="col d-md-inline d-none">
                                <p className="lead">Quantity</p>
                            </div>
                            <div className="col d-md-inline d-none">
                                <p className="lead">Price per unit</p>
                            </div>
                            <div className="col d-md-inline d-none">
                                <p className="lead">Total price</p>
                            </div>
                            <div className="col">

                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="list-group-item cart-element">
                <div className="row align-items-center text-center">
                    <div className="col-lg-4 pb-3">
                        <div className="row">
                            <a className="cart-link" href="./product_indoor1.html">
                                <div className="col-12">
                                    <img src={landscape6}
                                        className="cart-img img-fluid rounded" alt="" />
                                </div>
                                <div className="col-12 fst-italic pt-2">
                                    Mountain view
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-8 pb-3 cart-item">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-3 counter-element">
                                <div className="input-group">
                                    <span className="input-group-btn">
                                        <button className="btn btn-minus" type="button">-</button>
                                    </span>
                                    <input type="text" className="form-control text-center quantity" value="1" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-pluss" type="button">+</button>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <span className="d-md-none text-muted">Price per unit: </span>
                                <span className="single-price">19.99</span> EUR
                            </div>
                            <div className="col-md-3">
                                <span className="d-md-none text-muted">Total price: </span>
                                <span className="total-price">19.99</span> EUR
                            </div>
                            <div className="col-md-3">
                                <button type="button" className="btn remove-button green-button">Remove from
                                    cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="list-group-item cart-element">
                <div className="row align-items-center text-center">
                    <div className="col-lg-4 pb-3">
                        <div className="row">
                            <a className="cart-link" href="./product_indoor1.html">
                                <div className="col-12">
                                    <img src={landscape6}
                                        className="cart-img img-fluid rounded" alt="" />
                                </div>
                                <div className="col-12 fst-italic pt-2">
                                    Mountain view
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-8 pb-3 cart-item">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-3 counter-element">
                                <div className="input-group">
                                    <span className="input-group-btn">
                                        <button className="btn btn-minus" type="button">-</button>
                                    </span>
                                    <input type="text" className="form-control text-center quantity" value="1" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-pluss" type="button">+</button>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <span className="d-md-none text-muted">Price per unit: </span>
                                <span className="single-price">19.99</span> EUR
                            </div>
                            <div className="col-md-3">
                                <span className="d-md-none text-muted">Total price: </span>
                                <span className="total-price">19.99</span> EUR
                            </div>
                            <div className="col-md-3">
                                <button type="button" className="btn remove-button green-button">Remove from
                                    cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </div>
        
    )
}

export default ProductsInCart;