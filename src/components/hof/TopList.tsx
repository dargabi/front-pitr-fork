import TopPlayer from "./TopPlayer";

interface Player {
    assists: number;
    champions_played: string[];
    deaths: number;
    kda: number;
    kills: number;
    losses: number;
    puuid: string;
    rank: number;
    role: string;
    score: number;
    username: string;
    wins: number;
    wr: number;
}

interface TopListProps {
    players: Player[];
    selection: string;
}

export default function TopList({ players, selection }: TopListProps){
    console.log(players);
    
    return(
        <ul className="flex flex-column gap-y-5 text-primary-100">
            {players.map((player, index) => (
                <TopPlayer 
                    key={index}
                    position={index + 1}
                    rank={player.rank}
                    puuid={player.puuid}
                    name={player.username}
                    wins={player.wins}
                    losses={player.losses}
                    winrate={player.wr}
                    role={player.role}
                    champions_played={player.champions_played}
                    kills={player.kills}
                    deaths={player.deaths}
                    assists={player.assists}
                    kda={player.kda}
                    score={player.score}
                    selection={selection}
                />
            ))}
        </ul>
    )
}