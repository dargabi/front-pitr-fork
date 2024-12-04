import PlayerIcon from "../general/PlayerIcon";

export default function PlayerName({name, playerIconId}: {name: string, playerIconId: number}){
    return(
        <div className="flex align-center">
            <PlayerIcon profileIconId={playerIconId} name={name} size={50}/>
            <h4 className="text-5xl">{name}</h4>
        </div>
    )
}