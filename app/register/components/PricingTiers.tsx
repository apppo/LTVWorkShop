'use client'

import { useState } from 'react'

export type TierType = 'free' | 'pro' | 'enterprise' | null

export default function PricingTiers({ onTierSelect }: { onTierSelect: (tier: TierType) => void }) {
  const [selectedTier, setSelectedTier] = useState<TierType>(null)

  const handleTierSelect = (tier: TierType) => {
    setSelectedTier(tier)
    onTierSelect(tier)
  }

  const getTierButtonStyle = (tier: TierType) => {
    const baseStyle = "w-full rounded-full px-6 py-3 font-semibold transition cursor-pointer"
    return `${baseStyle} ${
      selectedTier === tier
      ? 'bg-secondary text-white hover:bg-secondary/90'
      : 'bg-primary text-white hover:bg-primary-dark'
    }`
  }

  const getTierCardStyle = (tier: TierType) => {
    return `bg-white rounded-lg p-8 shadow-lg transition duration-200 hover:shadow-xl ${
      selectedTier === tier ? 'ring-2 ring-secondary' : ''
    }`
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Free Tier */}
          <div 
            className={getTierCardStyle('free')}
            onClick={() => handleTierSelect('free')}
            role="button"
            tabIndex={0}
          >
            <h2 className="text-2xl font-bold mb-4">Free</h2>
            <p className="text-4xl font-bold mb-6">$0<span className="text-lg text-gray-600">/month</span></p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Basic skill assessments
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Community forum access
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Monthly newsletter
              </li>
            </ul>
            <button
              onClick={() => handleTierSelect('free')}
              className={getTierButtonStyle('free')}
            >
              Select Free Tier
            </button>
          </div>

          {/* Pro Tier */}
          <div 
            className={`${getTierCardStyle('pro')} relative`}
            onClick={() => handleTierSelect('pro')}
            role="button"
            tabIndex={0}
          >
            <div className="absolute -top-3 right-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
              Popular
            </div>
            <h2 className="text-2xl font-bold mb-4">Pro</h2>
            <p className="text-4xl font-bold mb-6">$49<span className="text-lg text-gray-600">/month</span></p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                All Free features
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Monthly 1:1 coaching
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Full course access
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Practice sessions
              </li>
            </ul>
            <button
              onClick={() => handleTierSelect('pro')}
              className={getTierButtonStyle('pro')}
            >
              Select Pro Tier
            </button>
          </div>

          {/* Enterprise Tier */}
          <div 
            className={getTierCardStyle('enterprise')}
            onClick={() => handleTierSelect('enterprise')}
            role="button"
            tabIndex={0}
          >
            <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
            <p className="text-4xl font-bold mb-6">Custom</p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                All Pro features
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Team training
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Custom workshops
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Dedicated support
              </li>
            </ul>
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleTierSelect('enterprise')
              }}
              className={getTierButtonStyle('enterprise')}
            >
              Select Enterprise Tier
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 