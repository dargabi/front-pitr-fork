import Image from 'next/image'
import styles from './index.module.css'
import CTAButton from './CTAButton'

export default function Hero() {
    return(
        // <Image 
        //     src="/hero_prueba.png" 
        //     alt="Hero Image" 
        //     width={384}
        //     height={216}
        // />
        <div className={`h-full hero-background border-solid border border-secondary-100 border-2 ${styles.herobackground}`}>
            <CTAButton />
        </div>
    )
}