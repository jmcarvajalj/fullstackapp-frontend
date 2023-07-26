import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../api/config"
import axios from "axios"

export default function ViewUser() {

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    })

    const { id } = useParams()

    useEffect(() => {
        loadUser()
    }, [])

    async function loadUser() {
        const result = await axios.get(`${API_URL}/user/${id}`)
        setUser(result.data)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow text-center text-bg-dark">
                    <h2 className="text-center m-4 text-bg-dark">User Details</h2>
                    <div className="card text-bg-dark">
                        <div className="card-header text-bg-dark">
                            Details of user with ID {user.id}
                            <ul className="list-group list-group-flush text-bg-dark">
                                <li className="list-group-item text-bg-dark">
                                    <b>Name: </b>
                                    {user.name}
                                </li>
                                <li className="list-group-item text-bg-dark">
                                    <b>Username: </b>
                                    {user.username}
                                </li>
                                <li className="list-group-item text-bg-dark">
                                    <b>Email: </b>
                                    {user.email}
                                </li>
                                <li className="list-group-item text-bg-dark">
                                    <b>Phone Number: </b>
                                    {user.phone}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>
                </div>
            </div>
        </div>
    )
}
