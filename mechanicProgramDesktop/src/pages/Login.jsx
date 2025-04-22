import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../pages/Styles/LoginStyle.css'

function Login({ setIsLoggedIn }) {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (user === '' && password === '') {
            setIsLoggedIn(true)
            navigate('/home')
        } else {
            alert('Usuario o contraseña incorrecta')
        }
    }

    const handleClear = () => {
        setUser('')
        setPassword('')
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
                <div className='buttonContainer'>
                    <button type="submit" className='enterBtn'>Iniciar Sesión</button>
                    <button type="button" className='clearBtn' onClick={handleClear}>Limpiar</button>
                </div>
            </form>
        </div>
    )
}

export default Login
