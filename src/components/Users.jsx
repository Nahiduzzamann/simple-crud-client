import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h2>{users.length}</h2>
            <div>
                {
                    users.map(user=>{

                    })
                }
            </div>
        </div>
    );
};

export default Users;