import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserComponent = () => {

    // const [users, setUsers] = useState([]);

    // useEffect(async() => {
    //     const result = await axios('http://localhost:8080/api/users',)
    //     setUsers(result.data)
    // },[])

    const [counter,setCounter] = useState(0)

    function add(){
        setCounter(counter + 1)
    }
    function sub(){
        setCounter(counter - 1)
    }

    return (
        <div>
            <p>{counter}</p>
            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>  
        </div>
    )
}

export default UserComponent