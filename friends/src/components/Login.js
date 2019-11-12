import React, {useState} from 'react';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div>
            <h1>Login</h1>
            <form>
                <label htmlFor="username">Username: <input type="text" name="username" placeholder="Enter username" /></label>
                <label htmlFor="password">Password: <input type="text" name="password" placeholder="Enter password" /></label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login
