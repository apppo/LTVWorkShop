'use client'

import { useState } from 'react'
import Navigation from '../components/Navigation'
import PricingTiers, { TierType } from './components/PricingTiers'
import RegistrationForm from './components/RegistrationForm'

export default function Register() {
  const [selectedTier, setSelectedTier] = useState<TierType>(null)

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            Choose Your Growth Path
          </h1>
          <p className="mb-8 text-xl max-w-2xl mx-auto">
            Select the plan that best fits your career development needs
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingTiers onTierSelect={setSelectedTier} />

      {/* Registration Form */}
      <RegistrationForm selectedTier={selectedTier} />
    </main>
  )
} 