import DoughnutChart from "@/components/general/DoughnutChart"

export default function Winrate({wins, losses, winrate}: {wins: number, losses: number, winrate: number}){
    //returns the winrate percentage with no decimals
    return(
        <div className="flex flex-column justify-center align-center">
            <h3>WINRATE</h3>
            <div className="relative">
                <DoughnutChart percentages={[wins,losses]}/>
                <div className="absolute-center absolute text-2xl text-orange-100">
                    {/* deberia tener animacion como el donut */}
                    {!isNaN(winrate) && <span>{winrate * 100}</span>}
                    %
                </div>
            </div>
        </div>
    )
}