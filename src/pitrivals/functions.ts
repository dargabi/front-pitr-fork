"use server"

//sortBy by default is score, orderBy by default is desc
export async function getUsersStats(sortBy: string = 'score', orderBy: string = 'desc'){
    const res = await fetch(`https://urano.pitrivals.com/api-rivals/v1/stats/user-stats?sort-by=${sortBy}&order-by=${orderBy}`, {
        method: 'GET',    
    })
    const userStats = await res.json()
    return userStats;
}

export async function getUserStats(userId: number){
    const res = await fetch(`https://urano.pitrivals.com/api-rivals/v1/stats/user-stats?user-id=${userId}`, {
        method: 'GET',    
    })
    const userStats = await res.json()
    return userStats;
}