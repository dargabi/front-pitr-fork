import HeroGrid from "@/components/tournament/HeroGrid";
import TournamentMain from "@/components/tournament/TournamentMain";

export default function Page(){
    return(
        // hacer aside?
        <main className="flex flex-column gap-5">
            <HeroGrid />    
            <TournamentMain />
        </main>
    )
}