import HeaderHr from "./HeaderHr";
import Tournament from "./Tournament";

export default function OngoingTournaments(){
    return(
        <section id="tournaments">
            <HeaderHr content="ONGOING TOURNAMENTS"/>
            <Tournament />
        </section>
    )
}