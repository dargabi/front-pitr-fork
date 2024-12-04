"use client"
import Avatar from "../general/Avatar"
import { getSummonerData } from "@/riot/functions";
import { SummonerData } from "@/riot/types"
import { useState, useEffect } from "react";

interface TopPlayerProps {
    rank: number;
    puuid: string;
    name: string;
    score: number;
}

export default function TopPlayer({ rank, puuid, name, score }: TopPlayerProps) {
    const [summonerData, setSummonerData] = useState<SummonerData | null>(null);
    useEffect(() => {
        getSummonerData(puuid, 'europe') 
            .then(data => setSummonerData(data))
            .catch(err => console.error(err));
        }, [puuid]);
    return(
        <li className="flex align-center my-3">
            <div>{rank}</div>
            <Avatar image={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/profileicon/${(summonerData?.profileIconId || 20)}.png`} name={summonerData?.name} size={25}/>
            <div>{name}</div>
            <div>{score}pts</div>
        </li>
    )
}