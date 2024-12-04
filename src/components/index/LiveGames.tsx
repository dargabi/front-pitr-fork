"use client"
import HeaderHr from "./HeaderHr";
import LiveGame from "./LiveGame";
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import Autoplay from 'embla-carousel-autoplay';
import React, { useState, useEffect, useCallback } from "react";

type PropType = {
    options?: EmblaOptionsType
}

const autoplayOptions = {
    stopOnInteraction: false,
    stopOnMousEnter: false,
}

const wheelGesturesOptions = {
    preventScroll: true,
    forceWheelAxis: "y",
}

export default function LiveGames(props: PropType) {
    const { options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(autoplayOptions),WheelGesturesPlugin(wheelGesturesOptions)]);
    const [scrollProgress, setScrollProgress] = useState(0);

    const onScroll = useCallback(() => {
        if (!emblaApi) return;
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
        setScrollProgress(progress * 100);
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onScroll();
        emblaApi.on("scroll", onScroll);
    }, [emblaApi, onScroll]);

    return(
        <section>
            <HeaderHr content="LIVE GAMES"/>
            <ul className="embla" ref={emblaRef}>
                {/* with gap-x-7 it works too but not for the loop */}
                <div className="embla__container">
                    <div className="embla__slide__auto">
                        <LiveGame />
                    </div>
                    <div className="embla__slide__auto">
                        <LiveGame />
                    </div>
                    <div className="embla__slide__auto">
                        <LiveGame />
                    </div>
                    <div className="embla__slide__auto">
                        <LiveGame />
                    </div>
                    <div className="embla__slide__auto">
                        <LiveGame />
                    </div>
                    <div className="embla__slide__auto">
                        <LiveGame />
                    </div>
                </div>        
            </ul>
            <div className="embla__progress">
                <div
                    className="embla__progress__bar"
                    style={{ transform: `translateX(${scrollProgress}%)` }}
                    />
            </div>
        </section>
    )
}