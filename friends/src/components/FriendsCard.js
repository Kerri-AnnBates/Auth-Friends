import React from 'react';
import { Link } from "react-router-dom";

const FriendsCard = (props) => {
    const { friend, deleteFriend } = props;
    // console.log(friend);
    return (
        <div className="card">
            <h3>{friend.name}</h3>
            <p><span>Age</span>: {friend.age}</p>
            <p><span>Email</span>: {friend.email}</p>
            <div className="buttons">
                <button><Link to={`/edit-friend/${friend.id}`}>Edit</Link></button>
                <button onClick={() => deleteFriend(friend.id)}>Delete</button>
            </div>
        </div>
    )
}

export default FriendsCard
