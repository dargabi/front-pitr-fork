"use client"
import { EmblaOptionsType } from 'embla-carousel'
import GameHighlight from "./GameHighlight";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay';

import styles from './player.module.css'

type PropType = {
    options?: EmblaOptionsType
}

const autoplayOptions = {
    stopOnInteraction: false,
    stopOnMousEnter: false,
}

export default function GameHighlights(props: PropType){
    const { options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(autoplayOptions)])

    return(
        <article className="relative text-secondary-100" style={{height: '350px', width: '260px'}}>
            <h3 className="z-10 relative bg-primary-50 inline-block">GAME HIGHLIGHTS</h3>
            <div className={`embla h-full w-full absolute ${styles.emblawrapper}`} ref={emblaRef}>
                <div className="embla__container h-full">
                    <div className="embla__slide">
                        <GameHighlight backgroundImage='/gamehighlight-akali.webp' champion='akali' kda='13/2/11' gameResult='victory'/>
                    </div>
                    <div className="embla__slide">
                        <GameHighlight backgroundImage='/gamehighlight-pyke.webp' champion='pyke' kda='9/5/4' gameResult='defeat'/>
                    </div>
                    <div className="embla__slide">
                        <GameHighlight backgroundImage='/gamehighlight-leesin.webp' champion='lee sin' kda='7/6/20' gameResult='victory'/>
                    </div>
                </div>
            </div>
      </article>
    )
}