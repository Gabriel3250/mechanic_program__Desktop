import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn') // borrar de localStorage
        navigate('/login') // redirigir al login
        window.location.reload() // recargar la página para que se aplique el cambio
    }

    return (
        <div>
            <h2>Bienvenido a Home</h2>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
    )
}

export default Home
