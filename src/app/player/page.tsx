"use client";
import { useState, useEffect } from "react"
import ItemIcon from "@/components/general/ItemIcon"
import GameHistory from "@/components/player/GameHistory"
import Winrate from "@/components/player/Winrate"
import TotalWins from "@/components/player/TotalWins"
import Avatar from "@/components/general/Avatar"
import GameHighlights from "@/components/player/GameHighlights"
import Leaderboards from "@/components/player/Leaderboards"

export default function Page() {
  // const puuid = 'ZyicRO3NtTYuJJx5Jic3A6qs3PvrzvbcviQM1qSfjn3A27Q1vTEjnbRQ2ZoiRPy9J2NDHKgHCX3xJg'
  // const puuid = 'osTRVFpOS0IIzEloTCRrrKtnAuevSAfRuizxOKMVlFN74I0YA_-ej_e0wM_lk89ae0NUXpSwJAfgAg'
  // const [playerData, setPlayerData] = useState<PlayerData | null>(null);
  // const [summonerData, setSummonerData] = useState<SummonerData | null>(null);
  // useEffect(() => {
  //   getRiotName(puuid, 'europe') 
  //     .then(data => setPlayerData(data))
  //     .catch(err => console.error(err));
  //   getSummonerData(puuid, 'europe')
  //     .then(data => setSummonerData(data))
  //     .catch(err => console.error(err));
  // }, [puuid]);

  return (
    <main className="flex flex-column gap-5">
      necesitas poner el nombre de un jugador mi broder
      {/* <section className="flex gap-5">
        <article className="bg-secondary flex align-center grow-1">
          <Avatar image={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/profileicon/${summonerData?.profileIconId}.png`} name={summonerData?.name} size={50}/>
          <div className="flex flex-column">
            <div className="flex align-center">
              <h2>NombreJugador</h2>
              <h3>
                {playerData && playerData.gameName ? playerData.gameName : 'Loading...'}
              </h3>
              <h4>
                {playerData && playerData.tagLine ? '#' + playerData.tagLine : 'Loading...'}
              </h4>
            </div>
            <div className="flex flex-column">
              <div>OP.GG:<a href="op.gg"></a></div>
              <div>Discord:<a href="op.gg"></a></div>
            </div>
          </div>
        </article>
        <article>
          <button>Add Friend</button>
        </article>
      </section>
      <section className="flex gap-5">
        <article className="bg-secondary">
          <h2 className="flex flex-column justify-center h-full">
            <span className="text-5xl">RANK</span><span className="text-16xl">#33</span>
          </h2>
        </article>
        <article className="bg-secondary grow-1 flex">
          <Winrate wins={30} losses={10}/>
          <TotalWins />
        </article>
      </section>
      <section className="flex gap-5">
        <GameHistory />
        <GameHighlights />
      </section>
      <Leaderboards /> */}
    </main>
  )
}