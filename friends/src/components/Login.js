import React, {useState} from 'react';
import axios from 'axios';

const Login = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userCreds, setuserCreds] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setuserCreds({ ...userCreds, [e.target.name]: e.target.value});
    }

    const login = (e) => {
        e.preventDefault();
        //Saving token to local storage.
        axios.post('http://localhost:5000/api/login', userCreds )
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload);
                props.history.push('/friends');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={(e) => {login(e)}}>
                <label htmlFor="username">Username: <input 
                    type="text" 
                    name="username" 
                    placeholder="Enter username" 
                    onChange={handleChange}
                    value={userCreds.username}
                /></label>
                <label htmlFor="password">Password: <input 
                    type="password" 
                    name="password" 
                    placeholder="Enter password" 
                    onChange={handleChange}
                    value={userCreds.password}
                /></label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login
