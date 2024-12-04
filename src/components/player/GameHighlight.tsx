import styles from './player.module.css'

type PropType = {
    backgroundImage: string
    champion: string
    kda: string
    gameResult: string
}

export default function GameHighlight(props: PropType){
    return(
        // <div className={`absolute flex justify-end align-end h-full w-full ${styles.gamehighlight}`}>
        <div className={`flex justify-end align-end h-full w-full ${styles.gamehighlight} flex-column uppercase `}
            style={{backgroundImage: `url(${props.backgroundImage})`}}>
            <div className='bg-primary-50 text-right'>
                <h4>{props.champion}</h4>
                <h4>{props.kda}</h4>
                <h4>{props.gameResult}</h4>    
            </div>
        </div>
    )
}