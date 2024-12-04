"use client"
import { useState } from "react";


import QueueHeader from "@/components/lobby/QueueHeader";
import LobbyCenter from "@/components/lobby/LobbyCenter";
import LobbyRight from "@/components/lobby/LobbyRight";
import LobbyLeft from "@/components/lobby/LobbyLeft";
import LobbyPrivacyToggle from "@/components/lobby/LobbyPrivacyToggle";
export default function Page() {

    const [lobbyState, setLobbyState] = useState(0);
    const [lobbyPrivate, setLobbyPrivate] = useState(false);

    return(
        <main className="flex flex-column grow-1">
            <QueueHeader lobbyState={lobbyState}/>
            <div className="grow-1 flex justify-between">
                <LobbyPrivacyToggle lobbyPrivate={lobbyPrivate} setLobbyPrivate={setLobbyPrivate} lobbyState={lobbyState}/>
                <LobbyLeft lobbyState={lobbyState}/>
                <LobbyCenter lobbyState={lobbyState} setLobbyState={setLobbyState}/>
                <LobbyRight lobbyState={lobbyState}/>
            </div>          
        </main>
    )
}