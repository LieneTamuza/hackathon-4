import { useState } from 'react';

function BillingAddress({billingInfo, updateCallback}) {

    const [billingAddress, setBillingAddress] = useState(billingInfo);

    const updateBillingAddress = (event) => {
        setBillingAddress(event.target.value);
        updateCallback(event.target.value);
    }


    return (
        <div>
            <div className="row">
                <label htmlFor="billingAddress">Billing Address</label>
            </div>
            <div className="row pt-2">
                <textarea value={billingAddress} id="billingAddress" cols="30" rows="10" onChange={updateBillingAddress}></textarea>
            </div>
        </div>

    )
}

export default BillingAddress;