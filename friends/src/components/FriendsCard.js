import React from 'react'

const FriendsCard = (props) => {
    const {friend} = props;
    console.log(friend);
    return (
        <div className="card">
            <h3>{friend.name}</h3>
            <p>Age: {friend.name}</p>
            <p>Email: {friend.email}</p>
        </div>
    )
}

export default FriendsCard
