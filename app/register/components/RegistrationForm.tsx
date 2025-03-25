'use client'

import { TierType } from './PricingTiers'

interface RegistrationFormProps {
  selectedTier: TierType
}

export default function RegistrationForm({ selectedTier }: RegistrationFormProps) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      goals: formData.get('intent'),
      selectedTier: selectedTier
    }

    // Send email using mailto link
    const subject = `New SoftLaunch Registration - ${data.name}`
    const body = `
Name: ${data.name}
Email: ${data.email}
Selected Tier: ${selectedTier}
Goals: ${data.goals}
    `
    
    window.location.href = `mailto:dnurieli@mba2025.hbs.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Complete Your Registration</h2>
          {selectedTier ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-lg">
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-center text-gray-600">
                    Selected Plan: <span className="font-semibold capitalize">{selectedTier}</span>
                  </p>
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="intent" className="block text-sm font-medium text-gray-700 mb-1">
                    What are your main goals?
                  </label>
                  <textarea
                    id="intent"
                    name="intent"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-secondary px-6 py-4 text-lg font-semibold text-black hover:bg-secondary/90 transition shadow-lg hover:shadow-xl"
                  >
                    Submit Registration
                  </button>
                  <p className="text-sm text-gray-500 text-center mt-4">
                    By submitting, you agree to be contacted about your registration
                  </p>
                </div>
              </div>
            </form>
          ) : (
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <p className="text-center text-gray-600">
                Please select a pricing tier above to continue with registration.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 