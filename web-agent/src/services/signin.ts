import axios from "axios";

export default function signin(username: string, password: string) {
    const response = axios.post("http://localhost:12000/api/users/signin", {
        email: username,
        password: password
    })
    console.log(response)
}