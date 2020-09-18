import React, { useState } from 'react';
import Form from './Form';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const NewPet = () => {
    const [ pet, setPet ] = useState({
        name: '',
        style: '',
        description: '',
        skills1: '',
        skills2: '',
        skills3: ''
    })

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        setPet({
            ...pet,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets", pet)
            .then(res => {
                if(res.data.errors){
                    setErrors(res.data.errors)
                } else {
                    navigate("/")
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <Link to="/">Back to Main</Link>
            <h3>Add New Pet</h3>
            <form onSubmit={ handleSubmit }>
                <Form pet={pet} errors={errors} handleChange={handleChange} action="create" />
            </form>
        </>
    )
}

export default NewPet
