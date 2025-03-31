
import '../App.css'
// Para poder utilizarlo siempre debemos exportar el componente
export function TwitterFollowCard({ formatUserName, userName, name, isFollowing }) {
    console.log(isFollowing)
    return (
        /*En react se usa className en vez de class */
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt='Avatar'
                    src={`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}