import React from 'react'

const Form = (props) => {
    const { pet, errors, handleChange, action } = props;
    return (
        <>
            <div>
                <label htmlFor="name">Pet Name: </label>
                <input type="text" name="name" onChange={ handleChange } value={ pet.name }/>
                {
                    errors.name ?
                    <p>{errors.name.message}</p>
                    :
                    ''
                }
            </div>
            <div>
                <label htmlFor="type">Pet Type: </label>
                <input type="text" name="type" onChange={ handleChange } value={ pet.type }/>
                {
                    errors.type ?
                    <p>{errors.type.message}</p>
                    :
                    ''
                }
            </div>
            <div>
                <label htmlFor="description">Pet Description: </label>
                <input type="text" name="description" onChange={ handleChange } value={ pet.description }/>
                {
                    errors.description ?
                    <p>{errors.description.message}</p>
                    :
                    ''
                }
            </div>
            <hr/>
            <h3>Skills (Optional)</h3>
            <div>
                <label htmlFor="skill1">Skill 1</label>
                <input type="text" name="skill1" onChange={ handleChange } value={ pet.skill1 }/>
            </div>
            <div>
                <label htmlFor="skill2">Skill 2</label>
                <input type="text" name="skill2" onChange={ handleChange } value={ pet.skill2 }/>
            </div>
            <div>
                <label htmlFor="skill3">Skill 3</label>
                <input type="text" name="skill3" onChange={ handleChange } value={ pet.skill3 }/>
            </div>
            {
                action === "create" ?
                <button type="submit">Add Pet</button>
                :
                <button type="submit">Edit Pet</button>

            }
        </>
    )
}

export default Form
