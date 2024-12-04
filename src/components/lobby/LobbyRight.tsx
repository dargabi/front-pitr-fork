import FriendListLobby from "@/components/lobby/FriendListLobby";
import EnemyPlayers from "./EnemyPlayers";
export default function LobbyRight({lobbyState}: {lobbyState: number}) {
    return(
        <div className="relative w-1-3 flex flex-column justify-between">
            <EnemyPlayers lobbyState={lobbyState}/>
            <FriendListLobby lobbyState={lobbyState}/>
        </div>  
    )
}