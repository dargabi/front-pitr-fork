import FriendListItem from "./FriendListItem";

export default function FriendListLobby({lobbyState}: {lobbyState: number}){
    
    return(
        <div className="absolute transition-all ease-out duration-200 w-full h-full bg-secondary text-primary-100 px-6 py-2" style={{ left: lobbyState === 1 ? '50vw' : '0' }}>
            <h4>Friends</h4>
            <ul className="flex flex-column gap-y-2">
                <FriendListItem />
                <FriendListItem />
                <FriendListItem />
            </ul>
        </div>
    )
}