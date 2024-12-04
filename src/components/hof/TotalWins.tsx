export default function TotalWins({...props}: {wins: number, selection: string, [key: string]: any}){
    return(
        <div className="flex flex-column align-center justify-between w-1-4">
            <h3>TOTAL <span className="uppercase">{props.selection}</span></h3>
            <div className="text-8xl">{props[props.selection]}</div>
        </div>
    )
}