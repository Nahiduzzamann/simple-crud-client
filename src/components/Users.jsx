import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData();
    const handleDEleteUser =id=>{
        fetch(`http://localhost:5000/users/${id}`,{
           method:'DELETE' 
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                alert('Deleted Successfully')
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
                        {user.name} : {user.email} <button onClick={()=>handleDEleteUser(user._id)}>X</button>
                    </p>)
                }
            </div>

        </>
    );
};

export default Users;