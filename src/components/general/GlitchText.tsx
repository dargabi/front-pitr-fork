import styles from './general.module.css'

interface GlitchTextProps {
    text: string;
}

export default function GlitchText({text}: GlitchTextProps){
    return(
        <span data-text={text} className={`${styles.hero} ${styles.glitch} ${styles.layers}`}>
            {text}
        </span>
    )
}