import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserComponent = () => {

    const [users, setUsers] = useState([]);

    useEffect(async() => {
        const result = await axios('http://localhost:8080/api/users',)
        console.log(result);
        setUsers(result.data)
    })

    return (
        <div>
            {users.map(user => 
                <div key = {user.id}>
                    <li>{user.id}</li>
                    <li>{user.name}</li>
                    <li>{user.username}</li>
                    <li>{user.password}</li>
                </div>
            )}
        </div>
    )
}

export default UserComponent