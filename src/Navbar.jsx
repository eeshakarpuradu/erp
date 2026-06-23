import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav>
                <Link to="/">ERP</Link>
                <Link to={'/add'}>+ Add</Link>
            </nav>
        </>
    )
}