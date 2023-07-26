import { useState } from "react"
import axios from "axios"
import { API_URL } from "../api/config"
import { Link, useNavigate } from "react-router-dom"


export default function AddUser() {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    })

    const { name, username, email, phone } = user

    function handleInputChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        await axios.post(`${API_URL}/user`, user)
        navigate("/")
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow text-center text-bg-dark">
                    <h2 className="text-center m-4">Register User</h2>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-3 text-center">
                            <label>
                                Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your name"
                                name="name"
                                value={name}
                                onChange={(e) => handleInputChange(e)}
                            />
                        </div>
                        <div className="mb-3 text-center">
                            <label>
                                Username
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your username"
                                name="username"
                                value={username}
                                onChange={(e) => handleInputChange(e)}
                            />
                        </div>
                        <div className="mb-3 text-center">
                            <label>
                                Email
                            </label>
                            <input
                                type={"email"}
                                className="form-control"
                                placeholder="Enter your email"
                                name="email"
                                value={email}
                                onChange={(e) => handleInputChange(e)}
                            />
                        </div>
                        <div className="mb-3 text-center">
                            <label>
                                Phone Number
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your phone number"
                                name="phone"
                                value={phone}
                                onChange={(e) => handleInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link to="/" className="btn btn-danger mx-2">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
