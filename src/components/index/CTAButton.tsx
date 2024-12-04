import styles from './index.module.css'

export default function CTAButton() {
    return (
        <div className={`${styles.ctabutton} grid place-center`}>
            <button className='text-5xl bg-accent-100 p-4'>START NOW</button>
        </div>
    )
}