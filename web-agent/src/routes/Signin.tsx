import { signin } from "../services/signin"
import { useState } from "react"

export default function Signin(){
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    async function handleLogin(e: any) {
        const res = await signin(formData.username, formData.password)
        console.log(res)
    }
    return (
    <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabIndex={-1} role="dialog" id="modalSignin">
        <div className="modal-dialog" role="document">
            <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
                <h1 className="fw-bold mb-0 fs-2">Sign into your Inventium</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body p-5 pt-0">
                <form className="" onSubmit={handleLogin}>
                <div className="form-floating mb-3">
                    <input className="form-control rounded-3" id="floatingInput" placeholder="name@example.com"
                    onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                    <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password"
                    onChange={(e) => setFormData({...formData, username: e.target.value})}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign in</button>
                <small className="text-body-secondary">By clicking Sign in, you agree to the terms of use.</small>
                <hr className="my-4"/>
                </form>
            </div>
            </div>
        </div>
    </div>
    )
}