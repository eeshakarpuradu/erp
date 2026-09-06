import './UpdateDetailsPopUp.css';

export default function UpdateDetailsPopUp(
    {
        open=false,
        handleClose=() => {}
    }
)
{
    if (!open) return null;
    return(
        <>
            <div className="modal-overlay" onClick={() => handleClose()}>
                <div className="modal-content">
                    <button onClick={() => handleClose()} className='close-icon'>X</button>
                    <p>Update details popup</p>
                </div>
            </div>
        </>
    )
}

