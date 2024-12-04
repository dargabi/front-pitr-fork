import styles from './global.module.css'

export default function PopUp() {
    return(
        <div className={`${styles.popup} fixed bg-secondary text-primary-100`}>
            soy un popup
        </div>
    )
}