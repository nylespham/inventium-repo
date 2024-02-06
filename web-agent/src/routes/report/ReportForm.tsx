import report from "../../assets/images/report.png"

export default function ReportForm(){
    return (
        <div className="container">
            <main>
                <div className="py-5 text-center">
                <img className="d-block mx-auto mb-4" src={report} alt="" width="72" height="57"/>
                <h2>Generate a new report</h2>
                <p className="lead">Please fill out the information below.</p>
                </div>

                <div className="col-md-12 col-lg-10">
                    <h4 className="mb-3">Billing address</h4>
                    <form className="needs-validation" noValidate>
                    <div className="row g-3">
                        <div className="col-sm-12">
                        <label htmlFor="firstName" className="form-label">Report's name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                        <div className="invalid-feedback">
                            Valid first name is required.
                        </div>
                        </div>

                        <div className="col-md-4">
                        <label htmlFor="country" className="form-label">Location to Saved</label>
                        <select className="form-select" id="country" required>
                            <option value="">Choose...</option>
                            <option>Google Drive</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid country.
                        </div>
                        </div>

                        <div className="col-md-4">
                        <label htmlFor="state" className="form-label">Type</label>
                        <select className="form-select" id="state" required>
                            <option value="">Choose...</option>
                            <option>Point of Sales</option>
                            <option>Inventory</option>
                            <option>Revenue</option>
                        </select>
                        <div className="invalid-feedback">
                            Please provide a valid state.
                        </div>
                        </div>

                        <div className="col-md-4">
                        <label htmlFor="state" className="form-label">Periods</label>
                        <select className="form-select" id="state" required>
                            <option value="">Choose...</option>
                            <option>Daily</option>
                            <option>Monthly</option>
                            <option>Quarterly</option>
                            <option>Yearly</option>
                        </select>
                        <div className="invalid-feedback">
                            Please provide a valid state.
                        </div>
                        </div>

                        <div className="col-md-4">
                        <label htmlFor="state" className="form-label">Select specific time</label>
                        <select className="form-select" id="state" required>
                            <option value="">Choose...</option>
                            <option>Daily</option>
                            <option>Monthly</option>
                            <option>Quarterly</option>
                            <option>Yearly</option>
                        </select>
                        <div className="invalid-feedback">
                            Please provide a valid state.
                        </div>
                        </div>

                    </div>

                    <hr className="my-4"/>

                    <button className="w-100 btn btn-primary btn-lg" type="submit">Proceed to Google SpreadSheet</button>
                    </form>
                </div>

            </main>
        </div>
    )
}