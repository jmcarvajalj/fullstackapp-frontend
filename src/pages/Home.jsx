import { useState, useEffect } from "react"
import axios from "axios"
import { API_URL } from "../api/config";
import { Link } from "react-router-dom";

export default function Home() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])

    async function loadUsers() {
        const result = await axios.get(`${API_URL}/users`)
        setUsers(result.data)
    }

    async function deleteUser(id) {
        const accepted = window.confirm("Do you want to delete this user?")
        if (accepted) {
            await axios.delete(`${API_URL}/user/${id}`)
            loadUsers()
        }
    }

    return (
        <div className="container">
            <div className="py-4" id="table-container">
                <table className="table table-bordered shadow text-center table-dark table-striped" id="table">
                    <thead>
                        <tr>
                            <th scope="col">User ID</th>
                            <th scope="col">Username</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            users.map((user, index) => (
                                <tr key={index}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.username}</td>
                                    <td>
                                        <Link to={`/viewUser/${user.id}`} className="btn btn-primary mx-1">View User Details</Link>
                                        <Link to={`/editUser/${user.id}`} className="btn mx-1 btn-light">Edit User</Link>
                                        <button
                                            onClick={() => deleteUser(user.id)}
                                            className="btn btn-danger mx-1">Delete User</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
