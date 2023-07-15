import React, { useState } from 'react';
import styles from './form.module.css';
import validator from './validation';
const Form = (props) => {
    const {login}=props
    const [userData, SetUserData] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({})

    const handleSubmit=(e)=>{
        e.preventDefault()
        login(userData)

    }

    const handleChange = (e) => {
        setErrors(validator({ ...userData, [e.target.name]: e.target.value }))
        SetUserData({ ...userData, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <form onSubmit= {handleSubmit}>
                <div>
                    <label >Email</label>
                    <input type="text" value={userData.email} name='email' onChange={handleChange} />
                    {errors.e1 && <p>{errors.e1} </p>}
                    {errors.e2 && <p>{errors.e2} </p>}
                    {errors.e3 && <p>{errors.e3} </p>}
                </div>
                
                    <label >Password</label>
                    <input type="text" value={userData.password} name='password' onChange={handleChange} />
                    {errors.p1 && <p>{errors.p1} </p>}
                    {errors.p2 && <p>{errors.p2} </p>}
                
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default Form