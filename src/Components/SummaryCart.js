import { useState } from "react";
import AddressCart from "./AddressCart";
import BillingAddress from "./BillingAddress";
import ShippingAddress from "./ShippingAddress";

function SummaryCart() {

    // const [shippingDetails, setShippingDetails] = useState();
    // const [billingDetails, setBillingDetails] = useState();

    // const updateShippingDetails = (value) => {
    //     setShippingDetails(value);
    // }
    // const updateBillingDetails = (value) => {
    //     setBillingDetails(value);
    // }

    return (
        <div className="row">
            <div className="col-4">
                <AddressCart/>
            </div>

        </div>
    )
}

export default SummaryCart;