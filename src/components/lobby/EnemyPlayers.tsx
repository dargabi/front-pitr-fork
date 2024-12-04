import LobbyPlayer from "@/components/lobby/LobbyPlayer";
import style from "@/components/lobby/lobby.module.css"

export default function EnemyPlayers({lobbyState}: {lobbyState: number}) {
    return(
        <div className={`absolute h-full flex flex-column transition-all ease-out duration-200 gap-y-9 ${style.playerbox}`} style={{ left: lobbyState === 0 ? '50vw' : '0' }}>
            <LobbyPlayer orientation="right" state={false} lobbyState={lobbyState}/>
            <LobbyPlayer orientation="right" state={false} lobbyState={lobbyState}/>
            <LobbyPlayer orientation="right" state={true} lobbyState={lobbyState}/>
            <LobbyPlayer orientation="right" state={false} lobbyState={lobbyState}/>
            <LobbyPlayer orientation="right" state={true} lobbyState={lobbyState}/>
        </div>
    )
}