import inventory from "../../assets/images/inventory.png"

export default function Import(props: any){
    return (
        <div className="container">
        <main>
            <div className="py-5 text-center">
                <img className="d-block mx-auto mb-4" src={inventory} alt="" width="72" height="57"/>
                <h2>{props.heading}</h2>
            </div>

        <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your cart</span>
            <span className="badge bg-primary rounded-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                <h6 className="my-0">Product name</h6>
                <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                <h6 className="my-0">Second product</h6>
                <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">$8</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                <h6 className="my-0">Third item</h6>
                <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
            </li>
            </ul>
        </div>
        <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Source Information</h4>
            <form className="needs-validation" noValidate>
            <div className="row g-3">
                <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">Entity name</label>
                <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                <div className="invalid-feedback">
                    Valid first name is required.
                </div>
                </div>

                <div className="col-12">
                <label htmlFor="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                </div>
                </div>

                <div className="col-12">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required/>
                <div className="invalid-feedback">
                    Please enter your shipping address.
                </div>
                </div>

                <div className="col-12">
                <label htmlFor="address2" className="form-label">Address 2 <span className="text-body-secondary">(Optional)</span></label>
                <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
                </div>

                <div className="col-md-5">
                <label htmlFor="country" className="form-label">Country</label>
                <select className="form-select" id="country" required>
                    <option value="">Choose...</option>
                    <option>Vietnam</option>
                </select>
                <div className="invalid-feedback">
                    Please select a valid country.
                </div>
                </div>

                <div className="col-md-4">
                <label htmlFor="state" className="form-label">Province</label>
                <select className="form-select" id="state" required>
                    <option value="">Choose...</option>
                    <option>Ho Chi Minh</option>
                </select>
                <div className="invalid-feedback">
                    Please provide a valid state.
                </div>
                </div>

                <div className="col-md-3">
                <label htmlFor="zip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="zip" placeholder="" required/>
                <div className="invalid-feedback">
                    Zip code required.
                </div>
                </div>
            </div>

            <hr className="my-4"/>

            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="save-info"/>
                <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
            </div>

            <hr className="my-4"/>

            <h4 className="mb-3">Product</h4>

            <div className="my-3">
                <div className="form-check">
                <input id="credit" name="paymentMethod" type="radio" className="form-check-input" required/>
                <label className="form-check-label" htmlFor="credit">Condensed Milk</label>
                </div>
                <div className="form-check">
                <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required/>
                <label className="form-check-label" htmlFor="debit">Coffee</label>
                </div>
                <div className="form-check">
                <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required/>
                <label className="form-check-label" htmlFor="paypal">Fresh Milk</label>
                </div>
            </div>

            <div className="row gy-3">
                <div className="col-md-4">
                <label htmlFor="cc-name" className="form-label">Quantity</label>
                <input type="text" className="form-control" id="cc-name" placeholder="" required/>
                <div className="invalid-feedback">
                    Quantity is required
                </div>
                </div>

                <div className="col-md-4">
                <label htmlFor="cc-number" className="form-label">Units</label>
                <input type="text" className="form-control" id="cc-number" placeholder="" required/>
                <div className="invalid-feedback">
                    Units are required
                </div>
                </div>

                <div className="col-md-4">
                <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
                <div className="invalid-feedback">
                    Expiration date required
                </div>
                </div>
            </div>

            <hr className="my-4"/>

            <button className="w-100 btn btn-primary btn-lg" type="submit">Submit</button>
            </form>
        </div>
        </div>
    </main>
    </div>
    )
}