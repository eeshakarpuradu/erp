//component imports
import Card from "./components/Card";
import Button from "./components/Button";
import './EmployeeTable.css';
import { formatKey } from "./Utilities";

export default function EmployeeTable() {

    const cardDetails = {
        totalEmployees: 12,
        active: 8,
        pending: 2,
        avgSalary: 79333
    }

    const tabs = ["All", "Engineering", "Sales", "Design"]

    const tableHead = ["Name", "Department", "Status", "Salary", "Joined"]
  
    // console.log(Object.entries(cardDetails));
    

    return (
        <div className="page-container">
            <div className="cards-container">
                {Object.entries(cardDetails).map((card) => {
                    console.log("Card", card)
                    return (
                    <Card key={card[0]} 
                        name={formatKey(card[0])}
                        data={card[1]}
                        empTable={true}
                    />
                )})}
            </div>

            <div className="tabs-container">
                {tabs.map((tab) => {
                    return (
                    <Button 
                        name={tab}
                    />
                )})}

            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            {tableHead.map((head, index) => {
                                return <th key={index}>{head}</th>;
                            })}
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
}