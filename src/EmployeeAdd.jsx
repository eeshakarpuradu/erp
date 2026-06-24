import {useNavigate} from 'react-router-dom';
import {gql} from '@apollo/client'
import {useMutation} from '@apollo/client/react'
import { ADD_EMPLOYEE, GET_EMPLOYEES } from './graphql/employeeqm.js'
import { useState } from 'react';


export default function EmployeeAdd() {

    const navigate = useNavigate()

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [phone, setPhone] = useState('')

    const [newEmployee, setNewEmployee] = useState({
        name: '',
        email: '',
        phone: ''
    })

    function handleChange(event){
        const {value, id} = event.currentTarget
        setNewEmployee(prevEmployee => ({
            ...prevEmployee, [id]: value
        }))
    }

    function handleSubmit(){}


    return (
        <>
            <div className='add-emp-form'>
                <p>Form</p>
                <button onClick={() => navigate('/')}>Back</button>
            </div>
            <div>
                <label>Name</label>
                <input type="text" value = {newEmployee.name} onChange = {handleChange} id="name">
                </input>
                <br></br>
                <br></br>
                <label>Email</label>
                <input type="text" value = {newEmployee.email} onChange = {handleChange} id="email">
                </input>
                <br></br>
                <br></br>
                <label>Phone</label>
                <input type="text" value = {newEmployee.phone} onChange = {handleChange} id="phone">
                </input>
                <br></br>
                <br></br>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <div>
                <p>new employee</p>
                <p>Name: {newEmployee.name}</p>
                <p>Email: {newEmployee.email}</p>
                <p>Phone: {newEmployee.phone}</p>
            </div>
        </>
    )
}

// src/pages/AddEmployee.jsx
// import { useState }           from 'react'
// import { useMutation }        from '@apollo/client'
// import { useNavigate }        from 'react-router-dom'
// import { Box, TextField,
//          Button, Typography,
//          Alert }              from '@mui/material'
// import { ADD_EMPLOYEE,
//          GET_EMPLOYEES }      from './graphql/employeeqm.js'

// export default function AddEmployee() {
//   const navigate = useNavigate()

//   // form state — one useState per field
//   const [name,       setName]       = useState('')
//   const [role,       setRole]       = useState('')
//   const [department, setDepartment] = useState('')

//   // mutation hook
//   const [addEmployee, { loading, error }] = useMutation(ADD_EMPLOYEE)

//   async function handleSubmit(e) {
//     e.preventDefault()

//     // basic guard — don't submit if fields are empty
//     if (!name || !role || !department) return

//     try {
//       await addEmployee({
//         variables: { name, role, department },
//         refetchQueries: [{ query: GET_EMPLOYEES }], // re-runs the list query
//       })
//       navigate('/employees')  // only runs if mutation succeeded
//     } catch (err) {
//       // error is already captured in the `error` object from useMutation
//       // the catch just prevents an unhandled promise rejection
//       console.error(err)
//     }
//   }

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit}
//       sx={{
//         p: 4,
//         maxWidth: 480,
//         display: 'flex',
//         flexDirection: 'column',
//         gap: 2,
//       }}
//     >
//       <Typography variant="h5">Add Employee</Typography>

//       <TextField
//         label="Name"
//         value={name}
//         onChange={e => setName(e.target.value)}
//         required
//         disabled={loading}
//       />
//       <TextField
//         label="Role"
//         value={role}
//         onChange={e => setRole(e.target.value)}
//         required
//         disabled={loading}
//       />
//       <TextField
//         label="Department"
//         value={department}
//         onChange={e => setDepartment(e.target.value)}
//         required
//         disabled={loading}
//       />

//       {/* only shows if mutation failed */}
//       {error && (
//         <Alert severity="error">{error.message}</Alert>
//       )}

//       <Box sx={{ display: 'flex', gap: 1 }}>
//         <Button
//           type="submit"
//           variant="contained"
//           disabled={loading}
//         >
//           {loading ? 'Saving…' : 'Add Employee'}
//         </Button>
//         <Button
//           variant="outlined"
//           disabled={loading}
//           onClick={() => navigate('/employees')}
//         >
//           Cancel
//         </Button>
//       </Box>
//     </Box>
//   )
// }
