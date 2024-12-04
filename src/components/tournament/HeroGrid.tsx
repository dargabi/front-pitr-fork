import PlayGrid from "@/components/tournament/PlayGrid";
import PlayerInfoGrid from "@/components/tournament/PlayerInfoGrid";

export default function HeroGrid() {
    return (
        <section className="flex border-solid border-secondary-100 border-1 px-4">
            <PlayGrid />
            <PlayerInfoGrid />
        </section>
    );
}