import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const loadedUser = useLoaderData()

    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email };

        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    alert('User updated successfully')
                    form.reset();
                }
            })
    }
    return (
        <div>
            <h3>Update information of {loadedUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name='name' defaultValue={loadedUser?.name} /><br />
                <input type="email" name='email' defaultValue={loadedUser?.email} /><br />
                <input type='submit' value='Update'></input>
            </form>
        </div>
    );
};

export default Update;