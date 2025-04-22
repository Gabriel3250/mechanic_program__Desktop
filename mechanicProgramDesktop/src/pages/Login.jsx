import { usesNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login({ setIsLoggedIn }) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        e.preventDefault();
        if (user === 'admin' && password === 'admin') {
            setIsLoggedIn(true);
            navigate('/home');
        } else {
            alert('Invalid credentials!');
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input>
                    type="text"
                    placeholder="Username"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                </input>
                <input>
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                </input>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;