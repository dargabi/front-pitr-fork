"use client"
import Navbar from '@/components/global/Navbar'
import Link from 'next/link'
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname()
    if (pathname === '/lobby') {
        return (
            <header>
                {/* <h2 className="text-orange-100 text-sm text-center">PITRIVALS©</h2> */}
                <></>
            </header>
        );
    }
    return(
        <header className='flex align-center justify-between'>
            <Link href={"/"}><h1 className="text-orange-100">PIT RIVALS</h1></Link>
            <Navbar />
        </header>
    )
}