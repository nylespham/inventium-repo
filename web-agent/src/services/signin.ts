import axios from "axios";

const signin = async(username: string, password: string) => {
    const response = await axios.post("http://localhost:12000/api/users/signin", {
        email: username,
        password: password
    })
    return response

}

export { signin }