"use client"
import { usePathname } from 'next/navigation'

export default function Footer() {
    const pathname = usePathname()

    if (pathname === '/login' || pathname === '/game' || pathname === '/lobby' || pathname === '/register') {
        return (
            <footer>
                {/* <h2 className="text-orange-100 text-sm text-center">PITRIVALS©</h2> */}
                <></>
            </footer>
        );
    }

    return (
        <footer>
                <div className="flex justify-between">
                    <h2 className="text-orange-100">PITRIVALS</h2>
                    <div>
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div>
                        <p>Contact Us</p>
                        <p>Help</p>
                    </div>
                </div>
                <hr />
                <div className="flex">
                    <div>
                        PITRIVALS isn’t endorsed by Riot Games and doesn’t reflect the views or 
                        opinions of Riot Games or anyone officially involved in producing or 
                        managing League of Legends. League of Legends and Riot Games are trademarks 
                        or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, 
                        Inc.
                    </div>
                    <ul className="flex">
                        <li></li>
                        <li></li>
                    </ul>
                </div>
        </footer>
    );
}