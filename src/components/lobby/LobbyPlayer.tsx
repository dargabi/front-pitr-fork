import LobbyInviteButton from "./LobbyInviteButton";
import LobbyPlayerBox from "./LobbyPlayerBox";
import LobbyPlayerIcon from "./LobbyPlayerIcon";
import QueuePlayerLoader from "./QueuePlayerLoader";

export default function LobbyPlayer({orientation, state, lobbyState}: { orientation: string, state: boolean, lobbyState: number }){
    
    return(
        <div className={`grow-1 flex align-center ${orientation === 'right' ? 'flex-row-reverse' : ''}`}>
            <LobbyPlayerBox state={state} orientation={orientation}/>
            <LobbyPlayerIcon state={state} />
            <div>
                {
                    orientation === "left" && lobbyState === 0 && state === false
                        ? <LobbyInviteButton /> 
                        : <QueuePlayerLoader state={state}/>
                }
            </div>
        </div>
    )
}