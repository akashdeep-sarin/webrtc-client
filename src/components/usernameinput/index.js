import React from 'react'

function UserNameInput(props) {

    const {username, setUsername} = props;

    return (
        <div>
            <input
                placeholder='Enter your name'
                type='text'
                value={username}
                onChange={(event) => {setUsername(event.target.value)}}
            ></input>
        </div>
    )
}

export default UserNameInput;
