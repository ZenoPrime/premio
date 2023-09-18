'use client';
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { ThemeProvider } from "@material-tailwind/react";

export default function Home() {
  return (
    <ThemeProvider>
    <>
      <main>
        <Hero />
      </main>
    </>
    </ThemeProvider>
  )
}
