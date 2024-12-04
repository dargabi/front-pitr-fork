//required for usePathname
"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import UserBox from "./UserBox";
import styles from './global.module.css'

export default function Navbar() {
    //info about the current path (url)
    const pathname = usePathname()
    if (pathname === '/login' || pathname === '/register') {
        return (
            <nav>
                {/* <h2 className="text-orange-100 text-sm text-center">PITRIVALS©</h2> */}
                <></>
            </nav>
        );
    }
    return(
        <nav>
            <ul className="flex align-center">
                <li>
                    <Link
                        //fix this
                        className={`${pathname === '/tournament' ? 'text-orange-100' : 'text-secondary-100'}`} 
                        href={'/tournament'}>
                        TOURNAMENT
                    </Link>
                </li>
                <li>
                    <Link 
                        className={`relative ${pathname === '/hall-of-fame' ? 'text-orange-100' : 'text-secondary-100'}`} 
                        href={'/hall-of-fame'}>
                        HALL OF FAME
                        <img className={`absolute ${styles.crown_of_thorns}`} src="resources/crown-of-thorns.svg" alt="Crown Of Thorns" />
                    </Link>
                </li>
                <li><UserBox /></li>
            </ul>
        </nav>
    )
}