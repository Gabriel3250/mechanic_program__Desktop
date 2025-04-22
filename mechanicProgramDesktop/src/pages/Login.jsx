import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../pages/Styles/LoginStyle.css'

function Login({ setIsLoggedIn }) {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (user === 'admin' && password === '1234') {
            setIsLoggedIn(true)
            navigate('/home')
        } else {
            alert('Usuario o contraseña incorrecta')
        }
    }

    return (
        <div>
            <form className='formLogin' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Usuario"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    className='userInput'
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='passwordInput'
                />
                <button type="submit" className='enterBtn'>Entrar</button>
            </form>
        </div>
    )
}

export default Login
