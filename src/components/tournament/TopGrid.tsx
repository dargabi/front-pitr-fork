import TopPlayer from "./TopPlayer";

export default function TopGrid() {
    const players = [
        {
            puuid: 'pTHZQBed2mksCWuvpQlFowjkRcfLbuMt9i9PZeDZ45jk39gVkgpjZh-kdSoRgQgirjUtr-9Avek6ZQ',
            name: 'jutjuan',
            score: 100,
        },
        {
            puuid: 'osTRVFpOS0IIzEloTCRrrKtnAuevSAfRuizxOKMVlFN74I0YA_-ej_e0wM_lk89ae0NUXpSwJAfgAg',
            name: 'Fr3eze',
            score: 50,
        },
        {
            puuid: 'ZyicRO3NtTYuJJx5Jic3A6qs3PvrzvbcviQM1qSfjn3A27Q1vTEjnbRQ2ZoiRPy9J2NDHKgHCX3xJg',
            name: 'i have sharingan',
            score: 25,
        },
        {
            puuid: 'ZyicRO3NtTYuJJx5Jic3A6qs3PvrzvbcviQM1qSfjn3A27Q1vTEjnbRQ2ZoiRPy9J2NDHKgHCX3xJg',
            name: '100% brain power',
            score: 10,
        },
        {
            puuid: 'thszWsfmYXrgI35PWVWblqHq8ds5q_6es14utyG12SAGzjMd_qnh5hI8xtdqFy4-4fWcj7Phbp6sxQ',
            name: 'Gonzalingrad',
            score: 5,
        },
    ];   
    return(
        <article className="bg-secondary text-primary-100 px-4">
            <h2>TOP</h2>
            {players.map((player, index) => (
                <TopPlayer 
                    key={index}
                    rank={index + 1}
                    puuid={player.puuid}
                    name={player.name}
                    score={player.score}
                />
            ))}
        </article>
    )
}