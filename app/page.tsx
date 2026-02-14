'use client'

import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Gallery from '@/components/gallery'
import About from '@/components/about'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
