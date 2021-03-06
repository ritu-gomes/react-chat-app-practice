import axios from 'axios';
import React, { useState } from 'react';

const projectID = '27a174e1-40bd-4b41-98fa-3f341548e074';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

        console.log(authObject);

        try{
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            window.location.reload();
            setError('');
        }catch(error){
            setError("oops, incorrect username or password", error);
        }

    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">
                    Chat Application
                </h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                    className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>
                                Start Chatting
                            </span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;