import PlayerName from "./PlayerName";
import Link from "next/link";

export default function PlayerRank({rank, name, playerIconId}: {rank: number, name: string, playerIconId: number}){
    return(
        <div className="flex flex-column align-center w-1-4">
            {/* encoded so % can be used */}
            <Link href={`/player/${encodeURIComponent(name)}`}>
                {/* {summonerData && <PlayerName name={name} iconId={summonerData.profileIconId}/>} */}
                <PlayerName name={name} playerIconId={playerIconId}/>
            </Link>
            <div className="text-8xl">#{rank}</div>
        </div>        
    )
}