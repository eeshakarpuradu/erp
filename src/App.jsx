import {Routes, Route} from 'react-router-dom'
import EmployeeList from './EmployeeList.jsx'
import EmployeeDetail from './EmployeeDetail.jsx'
import EmployeeAdd from './EmployeeAdd.jsx'
import Navbar from './Navbar.jsx'

function App() {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path="/" element= {<EmployeeList />} />
            <Route path="/employee/:id" element= {<EmployeeDetail />} />
            <Route path="/add" element= {<EmployeeAdd />} />
        </Routes>
        </>
    )
}

export default App