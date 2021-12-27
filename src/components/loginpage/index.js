import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import UserNameInput from '../usernameinput';
import { useNavigate} from 'react-router-dom';
import { storeUsername } from '../../state/actions/dashboard-actions';
 
export default function LoginPage() {

    const [username, setUsername] = useState('');
    const navigator = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        navigator('/dashboard');
        setUsername(username);
        dispatch(storeUsername(username));

    };

    return (
        <div>
            Login Page
            <UserNameInput username={username} setUsername={setUsername} />
            <button onClick={handleSubmit}> Login </button>
        </div>
    )
}
