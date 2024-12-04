import PlayerIcon from "../general/PlayerIcon"

export default function FriendListItem(){
    return(
        <li className="flex justify-between align-center">
            <PlayerIcon profileIconId={1} size={35}/>
            <div>
                <h4>Player Name</h4>
                <p className="text-sm">Player State</p>
            </div>
            <span>+</span>
        </li>
    )
}