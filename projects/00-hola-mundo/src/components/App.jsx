
import '../App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
// Para poder utilizarlo siempre debemos exportar el componente
export function App() {
    const formatUserName = (userName) => `@${userName}`

    return (
        <>
            <section className='App'>
                {/* En react se usa className en vez de class */}
                <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="Cristiano" name="Cristiano Ronaldo" />
                <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="midudev" name="Miguel Ángel Durán" />
                <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName="messi" name="Leonel Messi" />
            </section>
        </>
    )
}