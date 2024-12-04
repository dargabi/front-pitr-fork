import FunFacts from "./FunFacts";
import LobbyAddWrapper from "./LobbyAddWrapper";
import StateButton from "./StateButton";
import styles from './lobby.module.css'
import { toast } from 'sonner'

export default function LobbyCenter({lobbyState, setLobbyState}: {lobbyState: number, setLobbyState: (state: number) => void}){
    return(
        <div className={`${styles.centerwrapper} flex flex-column w-1-3 grow-1 p-5`}>
            {/* <LobbyAddWrapper />
            <FunFacts /> */}
            <button onClick={() => toast('This is a sonner toast')}>Render my toast</button>
            <button onClick={() => toast.success('This is a sonner toast')}>Render my success toast</button>
            <button onClick={() => toast.error('This is a sonner toast')}>Render my error toast</button>
            <button onClick={() => toast('My action toast',{
                action: {
                    label: 'Accept',
                    onClick: () => {console.log('Accept clicked')}
                },
                cancel: {
                    label: 'Cancel',
                    onClick: () => {console.log('Cancel clicked')}
                }
            
            })}>Render a toast with action</button>
            <StateButton lobbyState={lobbyState} setLobbyState={setLobbyState}/>
        </div>
    )
}