import React from 'react'

const SignupBtn = (props) => {
    return (
        <div>
            <button className="btn btn-info" id="SignupBtn" onClick={props.onClick}><span>Submit </span></button>
        </div>
    )
}

export default SignupBtn;