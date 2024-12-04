export default function HeaderHr({content}: {content: string}){
    return(
        <div className="flex justify-between align-center gap-x-7">
            <h2>{content}</h2>
            <hr className="grow-1 border-3"/>
        </div>
    )
}