import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const Dashboard = () => {
    const [ pets, setPets ] = useState([])
    const [ loaded, setLoaded ] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                setPets(res.data);
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <h3>These pets are looking for a good home</h3>
            <Link to="/new">Add new pet to the shelter</Link>
            {
                loaded ?
                <table>
                    <thead>
                        <tr>
                            <th>Pet Name</th>
                            <th>Pet Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pets.map((pet, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{ pet.name }</td>
                                        <td>{ pet.type }</td>
                                        <td>
                                            <Link to={`/pet/${pet._id}`}>Details</Link>
                                            |
                                            <Link to={`/pet/${pet._id}/edit`}>Edit</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                :
                ''
            }
        </>
    )
}

export default Dashboard
