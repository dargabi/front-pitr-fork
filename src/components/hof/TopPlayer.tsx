import PositionIcon from "../general/PositionIcon";
import { getSummonerData } from "@/riot/functions";
import { useState, useEffect } from "react";
import PlayerRank from "./PlayerRank";
import PlayerChamps from "./PlayerChamps";
import styles from './hof.module.css'
import WinrateWrapper from "./WinrateWrapper";
import TotalWins from "./TotalWins";

//this should be stored in a types.ts as it is repeated in TopList.tsx
interface PlayerDataProps{
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
    name: string;
    wins: number;
    winrate: number;
    position: number;
    selection: string
}

export default function TopPlayer({...props}: PlayerDataProps){
    const [iconId, setIconId] = useState(1);

    useEffect(() => {
        getSummonerData(props.puuid).then(summonerData => {
            console.log(props.puuid);
            
            setIconId(summonerData.playerIconId);
            console.log(iconId);
        }).catch(error => {
            console.error("Failed to fetch summoner data:", error);
        });
    }, [props.puuid]);
    
    return(
        <li className="bg-secondary bg-secondary p-4 flex justify-between relative">
            <PlayerRank rank={props.rank} name={props.name} playerIconId={iconId} />
            <WinrateWrapper wins={props.wins} losses={props.losses} winrate={props.winrate}/>
            <TotalWins wins={props.wins} selection={props.selection}/>
            <div className="w-1-4">   
                <div className="flex flex-column align-center">
                    <h3>FAV POSITION</h3>
                    <PositionIcon position={props.role} size={65}/>
                </div>
                <div>
                    <h3>MOST PLAYED</h3>
                    <PlayerChamps mostPlayedChampions={props.champions_played}/>
                </div>
            </div>
            <div className="absolute bg-secondary flex align-center justify-center text-3xl transition-all ease-out duration-200" 
                // para que la animacion sea de derecha a izquierda right: 0
                style={{width: props.rank === props.position ? '0px' : '40px', height: '100%', top: '0px', left: '-45px', zIndex: '-1'}}>
                {props.position}
            </div>
        </li>
    )
}