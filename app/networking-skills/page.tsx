import Navigation from '../components/Navigation'

export default function NetworkingSkills() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            Build Meaningful Professional Relationships
          </h1>
          <p className="mb-8 text-xl max-w-2xl mx-auto">
            Learn how to create and maintain valuable professional connections that can accelerate your career growth.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Core Skills */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Essential Networking Skills</h2>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Building Authentic Connections</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to create genuine professional relationships that go beyond superficial interactions.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Active listening techniques</li>
                  <li>Finding common ground</li>
                  <li>Value-based networking</li>
                  <li>Following up effectively</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Digital Networking</h3>
                <p className="text-gray-600 mb-4">
                  Master online networking platforms and digital communication strategies.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>LinkedIn optimization</li>
                  <li>Online community engagement</li>
                  <li>Virtual event networking</li>
                  <li>Digital relationship management</li>
                </ul>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Career Benefits</h2>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Professional Growth</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Access to hidden job opportunities</li>
                  <li>Industry insights and trends</li>
                  <li>Mentorship opportunities</li>
                  <li>Knowledge sharing</li>
                  <li>Career advancement opportunities</li>
                  <li>Professional support system</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Networking Strategies</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Industry event navigation</li>
                  <li>Relationship maintenance</li>
                  <li>Cross-functional networking</li>
                  <li>Building your personal brand</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Expand Your Professional Network?</h2>
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