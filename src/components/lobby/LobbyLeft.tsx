import TeamPlayers from "./TeamPlayers";

export default function LobbyLeft({lobbyState}: {lobbyState: number}){
    return(
        <div className="relative w-1-3 flex flex-column justify-between">
            <TeamPlayers lobbyState={lobbyState}/>
        </div>
    )
}