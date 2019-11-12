import React, { useState } from 'react'
import axiosWithAuth from '../axiosWithAuth';

const AddFriend = () => {

    const [newFriend, setnewFriend] = useState({
        id: Date.now(),
        name: '',
        age: '',
        email: ''
    });
    const [friendAdded, setFriendAdded] = useState(false);

    const handleChange = (e) => {
        setnewFriend({ ...newFriend, [e.target.name]: e.target.value });
    }

    // function for age to convert value to a number.
    const handleAgeChange = (e) => {
        setnewFriend({ ...newFriend, age: Number(e.target.value) });
    }


    const addNewFriend = (e) => {
        e.preventDefault();
        console.log(newFriend);
        axiosWithAuth().post('http://localhost:5000/api/friends', newFriend)
            .then(res => {
                console.log(res);
                setFriendAdded(true);
            })
            .catch(err => {
                console.log(err);
            })
        setnewFriend({
            ...newFriend,
            name: '',
            age: '',
            email: ''
        })
    }

    return (
        <div className="add-form">
            <form onSubmit={(e) => addNewFriend(e)}>
                <label htmlFor="name">Name: <input
                    type="text"
                    name="name"
                    placeholder="Enter friend's name"
                    onChange={handleChange}
                    value={newFriend.name}
                /></label>
                <label htmlFor="age">Age: <input
                    type="number"
                    name="age"
                    placeholder="Enter friend's age"
                    onChange={handleAgeChange}
                    value={newFriend.age}
                /></label>
                <label htmlFor="email">Email: <input
                    type="email"
                    name="email"
                    placeholder="Enter friend's email"
                    onChange={handleChange}
                    value={newFriend.email}
                /></label>
                <button>Submit</button>
            </form>
            {friendAdded ? (<p className="added">Friend has been added</p>) : ''}
        </div>
    )
}

export default AddFriend
