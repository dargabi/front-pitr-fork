import InfoGrid from "@/components/tournament/InfoGrid";
import TopGrid from "@/components/tournament/TopGrid";

export default function TournamentAside() {
    return (
        <aside className="flex flex-column gap-5">
            <TopGrid />
            <InfoGrid />
        </aside>
    );
}