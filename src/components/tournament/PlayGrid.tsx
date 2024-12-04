import PlayButton from "../general/PlayButton";
import InviteButton from "../general/InviteButton";
import PartyInfo from "./PartyInfo";
import PositionSelector from "../general/PositionSelector";

export default function PlayGrid() {
    return(
        <article className="grow-1">
            <PlayButton />
            <InviteButton />
            <PositionSelector />
            <PartyInfo />
        </article>
    )
}   