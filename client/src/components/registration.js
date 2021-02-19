import React, { useState } from 'react'

const RegistrationComponent = (props) => {
    const [text,setText] = useState("")

    function updateText(event){
        setText(event.target.value)
    }
    return(
        <div>
            {props.text}: <input value={text} onChange={updateText}></input>
            {text}
        </div>
    )
}


export default RegistrationComponent