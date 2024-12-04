import GamesGrid from "@/components/tournament/GamesGrid";
import TournamentAside from "@/components/tournament/TournamentAside";

export default function TournamentMain(){
    return(
        <section className="flex gap-5">
            <GamesGrid />
            <TournamentAside />
        </section>
    )
}