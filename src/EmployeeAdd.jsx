import {useNavigate} from 'react-router-dom';
import {gql} from '@apollo/client'
import {useMutation} from '@apollo/client/react'
import { ADD_EMPLOYEE, GET_EMPLOYEES } from './graphql/employeeqm.js'
import { useState } from 'react';


export default function EmployeeAdd() {

    const navigate = useNavigate()

    const [newEmployee, setNewEmployee] = useState({
        name: '',
        email: '',
        phone: ''
    })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(null)

    //valiadting the form
    const validate = () => {
        const newErrors = {};
        if (!newEmployee.name) newErrors.name = "Name is required"

        if (!newEmployee.email) {
            newErrors.email = "email is required"
        } else if (!/\S+@\S+\.\S+/.test(newEmployee.email) ) {
            newErrors.email = "enter proper email format"}

        if (!newEmployee.phone) {
            newErrors.phone = "phone no is required"
        } else if ((newEmployee.phone).length != 10) {newErrors.phone = "phone no length should be 10"}

        return newErrors
    }

    const [createUser, {loading,error}] = useMutation(ADD_EMPLOYEE)

    function handleChange(event){
        const {value, id} = event.currentTarget
        setNewEmployee(prevEmployee => ({
            ...prevEmployee, [id]: value
        }))
        setErrors(prevError => ({
            ...prevError, [id]: ''
        })) //clear errors for the field
    }

    async function handleSubmit(event){
        event.preventDefault()

        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0){
            setErrors(validationErrors)
        } else {
            console.log("form submitted", newEmployee)
            // alert("new emp added")

            const employeeToSubmit = newEmployee
            setSubmitted(employeeToSubmit);


            setNewEmployee({
                name: '',
                email: '',
                phone: ''
            });

            setErrors({});

            try {
                await createUser({
                    variables: {
                        // input: {
                        //     name: newEmployee.name,
                        //     email: newEmployee.email,
                        //     phone: newEmployee.phone
                        // }
                        name: newEmployee.name,
                        username: newEmployee.name,
                        email: newEmployee.email,
                        phone: newEmployee.phone
                    },
                    refetchQueries: [{query: GET_EMPLOYEES}]
                })
                navigate('/') //goes to employee list only when new user gets added
            } catch(err) {}
        } 
    }


    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className='add-emp-form'>
                <p>Form</p>
                <button onClick={() => navigate('/')}>Back</button>
            </div>
            <div>
                <label>Name</label>
                <input type="text" 
                       value = {newEmployee.name} onChange = {handleChange} required
                       id="name"
                       disabled = {loading}>
                </input>
                {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
                <br></br>
                <br></br>
                <label>Email</label>
                <input type="text" 
                       value = {newEmployee.email} onChange = {handleChange} required
                       id="email"
                       disabled = {loading}>
                </input>
                {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
                <br></br>
                <br></br>
                <label>Phone</label>
                <input type="text" 
                       value = {newEmployee.phone} onChange = {handleChange}  required
                       id="phone" 
                       disabled = {loading}>
                </input>
                {errors.phone && <p style={{color: 'red'}}>{errors.phone}</p>}
                <br></br>
                <br></br>
                {error && <p style={{color: 'red'}}>{error.message}</p>}

                <button type='submit' disabled = {loading}>
                    {loading ? "Adding employee...": "Submit"}
                </button>
            </div>
        </form>
            {submitted && (
                <div>
                    <p>new employee</p>
                    <p>Name: {submitted.name}</p>
                    <p>Email: {submitted.email}</p>
                    <p>Phone: {submitted.phone}</p>
                </div>  
            )}
        </>
    )
}

