import './UpdateDetailsPopUp.css';

export default function UpdateDetailsPopUp(
    {
        open=false,
        handleClose=() => {},
        details
    }
)
{
    console.log("details", details)
    if (!open) return null;

    // function handleChange() {}
    // const [updateEmployees, setUpdateEmployees] = useState

    return(
        <>
            <div className="modal-overlay">
                <div className="modal-content">
                    <button onClick={() => handleClose()} className='close-icon'>X</button>
                    <p>Update details popup</p>
                    <div>
                        <label>Name: </label>
                        <input type='text'
                                value={details.name}
                                // onChange={handleChange}
                                id='name'>
                        </input>
                        <br />
                        <br />
                        <label>Email: </label>
                        <input type='text'
                                value={details.email}
                                // onChange={handleChange}
                                id='name'>
                        </input>
                        <br />
                        <br />
                        <label>Phone: </label>
                        <input type='text'
                                value={details.phone}
                                // onChange={handleChange}
                                id='name'>
                        </input>
                        <br />
                        <br />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

