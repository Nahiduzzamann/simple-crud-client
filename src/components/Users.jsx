import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)

    const handleDEleteUser =id=>{
        fetch(`http://localhost:5000/users/${id}`,{
           method:'DELETE' 
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('Deleted Successfully')
                const remaining =users.filter(user=>user._id !== id)
                setUsers(remaining);
            }
        })
    }
    return (
        <>
            <h2>{users.length}</h2>
            <div>
                {
                    users.map(user => <p
                        key={user._id}>
                        {user.name} : {user.email} 
                        <Link to={`/update/${user._id}`}>
                        <button>Update</button>
                        </Link>
                        <button onClick={()=>handleDEleteUser(user._id)}>X</button>
                    </p>)
                }
            </div>

        </>
    );
};

export default Users;