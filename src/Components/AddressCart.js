import { useState } from 'react';
import BillingAddress from './BillingAddress';
import ShippingAddress from './ShippingAddress';

function AddressCart() {

    const [shippingDetails, setShippingDetails] = useState('foo');
    const [billingDetails, setBillingDetails] = useState('bar');

    const updateShippingDetails = (value) => {
        setShippingDetails(value);
    }
    const updateBillingDetails = (value) => {
        setBillingDetails(value);
    }
    

    return (
        <div className='row mt-4 justify-content-evenly'>
            <div className="col-5">
                <ShippingAddress shippingInfo={shippingDetails} updateCallback={updateShippingDetails}/>
            </div>
            <div className="col-5">
                <BillingAddress billingInfo={billingDetails}  updateCallback={updateBillingDetails}/>
            </div>
        </div>

    )
}

export default AddressCart;