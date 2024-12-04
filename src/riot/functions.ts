"use server"

export async function getRiotName(puuid: String, region: String){
    const res = await fetch(`https://europe.api.riotgames.com/riot/account/v1/accounts/by-puuid/${puuid}`, {
    method: 'GET',    
    headers: {
            'X-Riot-Token': process.env.RIOT_KEY,
        } as HeadersInit
    })
    const playerData = await res.json()
    return playerData;
}

export async function getSummonerData(puuid: string, region: string = 'europe'){
    const res = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`, {
    method: 'GET',    
    headers: {
            'X-Riot-Token': process.env.RIOT_KEY,
        } as HeadersInit
    })
    const summonerData = await res.json()
    return summonerData;
}