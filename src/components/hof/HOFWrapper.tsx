"use client"
import { useState, useEffect } from "react";
import RankingSelect from "@/components/hof/RankingSelect";
import TopList from "@/components/hof/TopList";
import { getUsersStats } from "@/pitrivals/functions";

export default function HOFWrapper(){
    const [selection, setSelection] = useState('score');
    const [players, setPlayers] = useState([]);
    //change players everytime the selection changes
    useEffect(() => {
        //fetch players
        getUsersStats(selection).then(playersData => {
            setPlayers(playersData);
            console.log(playersData);
            console.log(players);
        }).catch(error => {
            console.error("Failed to fetch user stats:", error);
        });
    }, [selection]);
    return(
        <section>
            <h3 className="text-center text-3xl">TOP PLAYERS</h3>
            <RankingSelect selection={selection} setSelection={setSelection}/>
            <TopList players={players} selection={selection}/>
        </section>
    )
}