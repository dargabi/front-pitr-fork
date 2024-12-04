import GameHistory from "@/components/player/GameHistory"
import Winrate from "@/components/player/Winrate"
import TotalWins from "@/components/player/TotalWins"
import GameHighlights from "@/components/player/GameHighlights"
import Leaderboards from "@/components/player/Leaderboards"
import PlayerBox from "@/components/player/PlayerBox"
import { getUserStats } from "@/pitrivals/functions"
import { getSummonerData } from "@/riot/functions"
import AddFriend from "@/components/player/AddFriend"
//deberia ser en un child para que no sea async la page?
export default async function Page({ params }: { params: { name: string }}) {
    // name is decoded so the api call is done correctly
    const name = decodeURIComponent(params.name);
    const playerData = await getUserStats(1);
    console.log(playerData);
    
    const summonerData = await getSummonerData(playerData.puuid, 'europe');
    return (    
    <main className="text-primary-100 flex flex-column gap-5">
        <section className="flex gap-5">
            <PlayerBox name={name}/>
            <article>
                <AddFriend />
            </article>
        </section>
        <section className="flex gap-5">
        <article className="bg-secondary">
            <h2 className="flex flex-column justify-center h-full">
            <span className="text-5xl">RANK</span><span className="text-16xl">#{playerData.rank}</span>
            </h2>
        </article>
        <article className="bg-secondary grow-1 flex">
            <Winrate wins={playerData.wins} losses={playerData.losses} winrate={playerData.wr}/>
            <TotalWins />
        </article>
        </section>
        <section className="flex gap-5">
        <GameHistory />
        <GameHighlights />
        </section>
        <Leaderboards />
    </main>
    )
}