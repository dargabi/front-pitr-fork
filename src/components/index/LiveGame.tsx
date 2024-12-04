import styles from './index.module.css'

export default function LiveGame() {
    return (
        <li className={`relative ${styles.livegame} flex align-center justify-center`}>
            <div className={`absolute ${styles.blueside}`}>
                BLUE
            </div>    
                <div className='text-center text-sm'>
                    <div>VS</div>
                    <div>32:08</div>
                </div>
            <div className={`absolute ${styles.redside}`}>
                RED
            </div> 
        </li>
    )
}