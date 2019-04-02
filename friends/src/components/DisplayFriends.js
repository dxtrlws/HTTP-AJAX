import React from 'react'

function DisplayFriends({ friend }) {
    return (
        <div>
            <p>{friend.name}</p>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
        </div>
    )
}

export default DisplayFriends