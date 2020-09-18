import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Form from './Form';

const EditPet = props => {
    const { id } = props;
    const [ pet, setPet ] = useState({
        name: '',
        style: '',
        description: '',
        skills1: '',
        skills2: '',
        skills3: ''
    })
    const [ errors, setErrors ] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                if(res.data == null){
                    navigate("/")
                } else {
                    setPet(res.data)
                }
            })
            .catch(err => console.log(err))
    }, [])

    const handleChange = e => {
        setPet({
            ...pet,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.patch(`http://localhost:8000/api/pets/${id}`, pet)
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
            <h3>Edit this pet</h3>
            <form onSubmit={handleSubmit} >
                <Form pet={pet} errors={errors} handleChange={handleChange} action="edit" />
            </form>
        </>
    )
}

export default EditPet
