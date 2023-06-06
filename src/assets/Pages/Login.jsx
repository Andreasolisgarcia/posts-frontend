import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
      
            <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder='youremail@example.com'
                />
                <label htmlFor="password">password</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder='********'
                    id="password"
                    name='password' 
                />
                <button type='submit'>Log in</button>
            </form>
            <button>Don't have an account? Register here.</button>
            </div>
   
    );
};

export default Login;
