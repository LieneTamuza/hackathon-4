import AddressCart from "../Components/AddressCart";
import ProductsInCart from "../Components/ProductsInCart";
import SummaryCart from "../Components/SummaryCart";


function CartPage() {

    return (

        <div className="container">

            <div className="row mt-5">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="products-tab" data-bs-toggle="tab" data-bs-target="#products" type="button" role="tab" aria-controls="products" aria-selected="true">Products</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="address-tab" data-bs-toggle="tab" data-bs-target="#address" type="button" role="tab" aria-controls="address" aria-selected="false">Address</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="summary-tab" data-bs-toggle="tab" data-bs-target="#summary" type="button" role="tab" aria-controls="summary" aria-selected="false">Summary</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="products" role="tabpanel" aria-labelledby="products-tab">
                    <ProductsInCart />
                    </div>
                    <div className="tab-pane fade" id="address" role="tabpanel" aria-labelledby="address-tab">
                    <AddressCart />
                    </div>
                    <div className="tab-pane fade" id="summary" role="tabpanel" aria-labelledby="summary-tab">
                    <SummaryCart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage;