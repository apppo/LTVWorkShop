import Navigation from '../components/Navigation'

export default function PresentationSkills() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            Master the Art of Public Speaking
          </h1>
          <p className="mb-8 text-xl max-w-2xl mx-auto">
            Develop the confidence and skills to deliver compelling presentations that engage and inspire your audience.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Core Skills */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Core Presentation Skills</h2>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Storytelling Techniques</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to structure your presentations using proven storytelling frameworks that capture and maintain audience attention.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Opening with impact</li>
                  <li>Creating emotional connections</li>
                  <li>Building narrative flow</li>
                  <li>Memorable conclusions</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Body Language & Voice</h3>
                <p className="text-gray-600 mb-4">
                  Master non-verbal communication and vocal techniques that enhance your message delivery.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Stance and movement</li>
                  <li>Gesture control</li>
                  <li>Voice modulation</li>
                  <li>Eye contact mastery</li>
                </ul>
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">What You'll Learn</h2>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Practical Skills</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Overcome public speaking anxiety</li>
                  <li>Create engaging visual aids</li>
                  <li>Handle Q&A sessions effectively</li>
                  <li>Adapt to different audience types</li>
                  <li>Use technology effectively</li>
                  <li>Time management techniques</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Career Benefits</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Increased visibility in your organization</li>
                  <li>Better project and idea communication</li>
                  <li>Enhanced leadership presence</li>
                  <li>More confident meeting participation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Presentation Skills?</h2>
          <a
            href="/register"
            className="inline-block rounded-full bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary-dark"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </main>
  )
} 