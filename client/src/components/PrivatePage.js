import axios from 'axios'
import React, { useState, useEffect } from 'react'



const PrivatePage = () => {

    const [users, setUsers] = useState([])

    const findAllBooks = () => {
        axios.get("http://localhost:8080/api/user/all")
        .then(response => response.data)
        .then((data) => {
            setUsers(data)
        })
    }
    useEffect(() => {
        findAllBooks();
    },[])
    console.log(users)
    return(
        <div className="users">
            <div className="users-info">
                Hello
                {users.map((user) => 
                    <li key = {user.id}>{user.firstName}</li>
                )}
            </div>
        </div>
    )
}

export default PrivatePage
