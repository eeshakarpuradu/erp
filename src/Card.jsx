import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Card({
    id = 0,
    name = "default name",
    // Role = "default role",
    // Department = "default department"
    Email = "xxx@gmail.com",
    phone = "default"
}) {
    return (
        <>
            
            <div className = "card-component">
                <h3>{name}</h3>
                {/* <p>{Role}</p>
                <p>{Department}</p> */}
                <p>{phone}</p>
                <p>{Email}</p>
                <Link to={`/employee/${id}`}>View Details</Link>
            </div>
        </>
    )
}
Card.propTypes = {
        id: PropTypes.number,
        name: PropTypes.string,
        // Role: PropTypes.string,
        // Department: PropTypes.string
        Email: PropTypes.string,
        phone: PropTypes.string
    }
export default Card