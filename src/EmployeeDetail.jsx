import {useParams, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from './api'
import {gql} from '@apollo/client'
import {useQuery} from '@apollo/client/react'
import {GET_EMPLOYEE} from './graphql/employeeqm.js'
// const users = [
//     {
//       id:1,
//       name: "eesha",
//       Role: "Frontend Engineer",
//       Department: "Engineering"
//     },
//     {
//       id:2,
//       name: "tabby",
//       Role: "UX researcher",
//       Department: "Design"
//     },
//     {
//       id:3,
//       name: "khyathi",
//       Role: "Product Manager",
//       Department: "Product"
//     },
//     {
//       id: 4,
//       name: "sriram",
//       Role: "Embedded Engineer",
//       Department: "Engineering"
//     }
//   ]

function EmployeeDetail() {
    // $id: ID!  means: variable named id, type ID, required (! = required)
    const {id} = useParams(); //returns a string 
    const navigate = useNavigate()
    // const [user, setUser] = useState([])
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null)

    const {data, loading, error} = useQuery(GET_EMPLOYEE, {
        variables: {id},
    })

    const user = data?.user || {}

    // const user = users.find(u => u.id === Number(id))
    //id is going to be a string. convert it into a integer


    // useEffect(() => {
    //   api.get(`/users/${id}`)
    //     .then(response => setUser(response.data))
    //     .catch(err => setError(err.message))
    //     .finally(() => setLoading(false))
    // }, [id])

    //if(!user) return <p>employee not found</p>
    if (loading) return <p>loading..</p>
    if (error) return <p>error..:{error.message}</p>

    return (
        <>
            <div className='employee-info'>
                <button onClick={() => navigate('/')}>Back</button>
                <p>ID: {user.id}</p>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
            </div>
        </>
    )
}

export default EmployeeDetail