import LobbyPlayer from "@/components/lobby/LobbyPlayer";
import style from "@/components/lobby/lobby.module.css"

export default function TeamPlayers({lobbyState}: {lobbyState: number}){
    return(
        <div className={`absolute h-full flex flex-column gap-y-9 ${style.playerbox}`} style={{right:'0'}}>
            <LobbyPlayer orientation="left" state={true} lobbyState={lobbyState}/>
            <LobbyPlayer orientation="left" state={false} lobbyState={lobbyState}/>
            <LobbyPlayer orientation="left" state={false} lobbyState={lobbyState}/>
            <LobbyPlayer orientation="left" state={false} lobbyState={lobbyState}/>
            <LobbyPlayer orientation="left" state={true} lobbyState={lobbyState}/>
        </div>
    )
}