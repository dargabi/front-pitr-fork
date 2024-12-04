import styles from './lobby.module.css'

export default function LobbyPrivacyToggle({lobbyPrivate, setLobbyPrivate, lobbyState}: {lobbyPrivate: boolean, lobbyState: number, setLobbyPrivate: (lobbyPrivate: boolean) => void}){
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(lobbyState === 0)
            setLobbyPrivate(event.target.checked);
    };
    return(
        <div className='absolute absolute-center'>
            <h4>Lobby Privacy:
                <span>
                    {lobbyPrivate ? 'Private' : 'Public'}
                </span>
            </h4>
            <label className={`${styles.privacySwitch}`}>
                <input type="checkbox" checked={lobbyPrivate} onChange={handleChange} />
                <div className={`${styles.slider}`}>
                    <div className={`${styles.circle}`}></div>
                </div>
            </label>
        </div>

    )
}