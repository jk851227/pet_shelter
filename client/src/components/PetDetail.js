import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const PetDetail = props => {
    const { id } = props;
    const [ pet, setPet ] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                if(res.data == null){
                    navigate("/")
                }
                setPet(res.data)
            })
            .catch(err => console.log(err))
    })

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(navigate("/"))
            .catch(err => console.log(err))
    }

    return (
        <>
            <Link to="/">Back to Main</Link>
            <h2>Details about: {pet.name}</h2>
            <button onClick={ deleteHandler }>Adopt {pet.name}</button>
            <div>
                <h3>Pet type: <span>{pet.type}</span></h3>
                <h3>Description: <span>{pet.type}</span></h3>
                <h3>
                    Skills:
                    <ul>
                        <li>{pet.skill1}</li>
                        <li>{pet.skill2}</li>
                        <li>{pet.skill3}</li>
                    </ul>
                </h3>
                
            </div>
        </>
    )
}

export default PetDetail
