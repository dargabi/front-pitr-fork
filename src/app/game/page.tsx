import GameStats from '@/components/game/GameStats'
import styles from './page.module.css'

export default function Page(){
    //obtener información de la partida: stats generales y de cada jugador. obtener info del jugador
    //obtener información de sus posiciones en el torneo, ordenarlas según eso.
    return(
        <main className='grow-1 flex flex-column'>
            <h2>TOURNAMENT NAME</h2>
            <div>GENERAL STATS</div>
            <div className="flex justify-between grow-1">
                <div className="flex flex-column w-full grow-1 text-primary-100">
                    <GameStats className={`bg-secondary-50 ${styles.gamestats} grow-1 flex flex-column justify-between`}/>
                    <GameStats className={`bg-secondary-50 ${styles.gamestats} grow-1`}/>
                    <GameStats className={`bg-secondary-50 ${styles.gamestats} grow-1`}/>
                    <GameStats className={`bg-secondary-50 ${styles.gamestats} grow-1`}/>
                    <GameStats className={`bg-secondary-50 ${styles.gamestats} grow-1`}/>
                </div>
                <div>vs</div>
                <div className="flex flex-column w-full grow-1">
                    <div className={`bg-secondary-50 ${styles.gamestats} grow-1`}>1</div>
                    <div className={`bg-secondary-50 ${styles.gamestats} grow-1`}>2</div>
                    <div className={`bg-secondary-50 ${styles.gamestats} grow-1`}>3</div>
                    <div className={`bg-secondary-50 ${styles.gamestats} grow-1`}>4</div>
                    <div className={`bg-secondary-50 ${styles.gamestats} grow-1`}>5</div>
                </div>
            </div>
        </main>
    )
}