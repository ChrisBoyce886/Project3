import React from 'react'

const SubmitBtn = (props) => {
    return (
        <div>
            <button className="btn btn-info" id="submitBtn" onClick={props.onClick}><span>Search</span></button>
        </div>
    )
}


export default SubmitBtn;
