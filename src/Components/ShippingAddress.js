import { useState } from 'react';

function ShippingAddress({shippingInfo, updateCallback}) {

    const [shippingAddress, setShippingAddress] = useState(shippingInfo);

    const updateShippingAddress = (event) => {
        setShippingAddress(event.target.value);
        updateCallback(event.target.value);
    }


    return (
        <div>
            <div className="row">
                <label htmlFor="shippingAddress">Shipping Address</label>
            </div>
            <div className="row pt-2">
                <textarea value={shippingAddress} id="shippingAddress" cols="30" rows="10" onChange={updateShippingAddress}></textarea>
            </div>
        </div>

    )
}

export default ShippingAddress;