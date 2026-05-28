'use client'

import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { StrategicFocus } from '@/components/StrategicFocus'
import { Differentiator } from '@/components/Differentiator'
import { CorePillars } from '@/components/CorePillars'
import { Technologies } from '@/components/Technologies'
import { ResearchHeritage } from '@/components/ResearchHeritage'
import { GlobalVision } from '@/components/GlobalVision'
import { ContactCTA } from '@/components/ContactCTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-neura-darker">
      <Hero />
      <About />
      <StrategicFocus />
      <Differentiator />
      <CorePillars />
      <Technologies />
      <ResearchHeritage />
      <GlobalVision />
      <ContactCTA />
      <Footer />
    </main>
  )
}
