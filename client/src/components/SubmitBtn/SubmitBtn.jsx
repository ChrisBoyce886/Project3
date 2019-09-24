import React from 'react'

const SubmitBtn = (props) => {
    return (
        <div>
            <button className="btn btn-primary" onClick={props.onClick}>Submit</button>
        </div>
    )
}

export default SubmitBtn;