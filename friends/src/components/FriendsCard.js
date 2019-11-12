import React from 'react'

const FriendsCard = (props) => {
    const {friend} = props;
    console.log(friend);
    return (
        <div className="card">
            <h3>{friend.name}</h3>
            <p><span>Age</span>: {friend.name}</p>
            <p><span>Email</span>: {friend.email}</p>
        </div>
    )
}

export default FriendsCard
