import styles from './lobby.module.css'

export default function QueueHeader({lobbyState}: {lobbyState: number}) {
    const headers: Record<number, string> = {
        0: 'LOBBY',
        1: 'LOOKING FOR PLAYERS',
        2: 'GAME READY!',
    };

    const messages: Record<number, string>  = {
        '0': 'Press play to queue up!',
        '1': 'Estimated time: 1:00',
        '2': 'Good luck',
    };

    return(
        <div className="text-center">
            <h3>
                {headers[lobbyState]}
                {
                    lobbyState === 1 &&
                    <>
                        <span className={styles.dot}>.</span>
                        <span className={styles.dot}>.</span>
                        <span className={styles.dot}>.</span>
                    </>
                }
            </h3>   
            <div>{messages[lobbyState]}</div>
        </div>     
    )
}
