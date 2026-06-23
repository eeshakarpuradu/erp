import Card from './Card';
import {useState, useMemo, useEffect} from 'react';
import {Link} from 'react-router-dom';
import api from './api'
import {gql} from '@apollo/client'
import {useQuery} from '@apollo/client/react'

const GET_EMPLOYEES = gql`
  query {
    users {
      data {
        id
        name
        email
        phone
      }
    }
}
`

function EmployeeList() { 

  //const [employees, setEmployees] = useState([])
  const [filterValue, setFilterValue] = useState("");
  //const [loading, setLoading] = useState(true)
  //const [error, setError] = useState(null) 
  //const [filteredUsers, setFilteredUsers] = useState(users);

  const {data, loading, error} = useQuery(GET_EMPLOYEES)
  const employees = data?.users?.data || []
  //useQuery replaces useState and useEffect and directly gives us the data . we can destructure accordingly

  function handleFilter(event){
    setFilterValue(event.target.value)
  }

  //api response form axios
  // useEffect(() => {
  //   api.get('/users')
  //     .then(response => setEmployees(response.data))
  //     .catch(err => setError(err.message))
  //     .finally(() => setLoading(false))
  // }, [])
 
  const filteredUsers =  useMemo(() => 
  {
        return employees.filter((user) => (
        //return(
          user.name.toLowerCase().includes(filterValue.toLowerCase()) ||
          // user.Role.toLowerCase().includes(filterValue.toLowerCase()) ||
          user.email.toLowerCase().includes(filterValue.toLowerCase()) ||
          // user.Department.toLowerCase().includes(filterValue.toLowerCase()
          user.phone.toLowerCase().includes(filterValue.toLowerCase())
        //)
      ))
    }, [employees, filterValue])

    if (loading) return <p>loading..</p>
    if (error) return <p>error..:{error.message}</p>

  return (
    <>
    <h2 className = "pro-name">Employee Manager</h2>
    <input type = "text" placeholder = "Search by name, role or department" onChange = {handleFilter}/>
    {/* <button onClick={handleSubmit}>Enter</button> */}
      {
        filteredUsers.map((user) => (
          <Card 
            key = {user.id}
            id = {user.id}
            name = {user.name}
            // Role = {user.Role}
            // Department = {user.Department}
            Email = {user.email}
            phone = {user.phone}
          />
        ))
      }
    </>
  );
}

export default EmployeeList;