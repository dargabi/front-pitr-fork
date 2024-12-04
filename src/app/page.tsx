import Hero from '@/components/index/Hero'
import LiveGames from '@/components/index/LiveGames'
import styles from './page.module.css'
import OngoingTournaments from '@/components/index/OngoingTournaments'
import UpcomingTournaments from '@/components/index/UpcomingTournaments'
import { EmblaOptionsType } from 'embla-carousel'
import UserGuide from '@/components/index/UserGuide'

export default function Home() {
  const OPTIONS: EmblaOptionsType = { align: 'start', dragFree: true, loop: true }
  return (
    <main>
      <Hero />
      <LiveGames options={OPTIONS}/>
      <UserGuide />
      <OngoingTournaments />
      <UpcomingTournaments />
    </main>
  )
}
