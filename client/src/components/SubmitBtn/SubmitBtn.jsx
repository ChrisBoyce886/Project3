import React from 'react'

const SubmitBtn = (props) => {
    return (
        <div>
            <button className="btn btn-primary" onClick={props.onClick}>Search</button>
        </div>
    )
}

export default SubmitBtn;