import Hero from '@/components/Hero'
import FeaturedBrands from '@/components/FeaturedBrands'
import Timeline from '@/components/Timeline'
import FeaturedGuitars from '@/components/FeaturedGuitars'
import AboutSection from '@/components/AboutSection'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedBrands />
      <FeaturedGuitars />
      <Timeline />
    </>
  )
}