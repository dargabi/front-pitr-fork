"use client";
import { useState, useEffect } from "react"

import Avatar from "@/components/general/Avatar"

import { getRiotName, getSummonerData } from "@/riot/functions"
import { PlayerData, SummonerData } from "@/riot/types";

export default function PlayerBox({ name }: { name: string }){
  // const puuid = 'ZyicRO3NtTYuJJx5Jic3A6qs3PvrzvbcviQM1qSfjn3A27Q1vTEjnbRQ2ZoiRPy9J2NDHKgHCX3xJg'
    const puuid = 'osTRVFpOS0IIzEloTCRrrKtnAuevSAfRuizxOKMVlFN74I0YA_-ej_e0wM_lk89ae0NUXpSwJAfgAg'
    const [playerData, setPlayerData] = useState<PlayerData | null>(null);
    const [summonerData, setSummonerData] = useState<SummonerData | null>(null);
    //https://nextjs.org/docs/app/building-your-application/data-fetching/patterns
    useEffect(() => {
        getRiotName(puuid, 'europe') 
        .then(data => setPlayerData(data))
        .catch(err => console.error(err));
        getSummonerData(puuid, 'europe')
            .then(data => setSummonerData(data))
            .catch(err => console.error(err));
    }, [puuid]);
    return(
        <article className="bg-secondary flex align-center grow-1">
            <Avatar image={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/profileicon/${(summonerData?.profileIconId || 20)}.png`} name={summonerData?.name} size={50}/>
            <div className="flex flex-column">
            <div className="flex align-center">
                {/* removes % */}
                <h2>{name}</h2>
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
    )
}