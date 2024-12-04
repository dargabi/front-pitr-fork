import UserIcon from "../general/UserIcon";

export default function PartyInfo(){
    return(
        <article>
            <h3>
                PARTY
            </h3>
            <ul className="flex">
                <li><UserIcon state={"on"} /></li>
                <li><UserIcon state={"on"} /></li>
                <li><UserIcon state={"on"} /></li>
                <li><UserIcon state={"off"} /></li>
                <li><UserIcon state={"off"} /></li>
            </ul>
        </article>
    )
}