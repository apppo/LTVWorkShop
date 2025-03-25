import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Level Up Your Career With Essential Soft Skills
          </h1>
          <p className="mb-8 text-xl">
            Unlock your professional potential through expert coaching and proven resources
          </p>
          <Link
            href="#waitlist"
            className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
          >
            Join the Waitlist
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 text-3xl font-bold">Why Soft Skills Matter</h2>
              <p className="text-lg text-gray-600">
                Technical skills might get you your first job, but soft skills are what propel your career forward. 
                Many young professionals struggle with the interpersonal aspects of their work, limiting their growth potential.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team collaboration"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">Essential Skills for Success</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Link
              href="/presentation-skills"
              className="block rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105"
            >
              <h3 className="mb-2 text-xl font-semibold">Presentation Skills</h3>
              <p className="text-gray-600">
                Master the art of compelling presentations and public speaking to advance your career.
              </p>
            </Link>
            <Link
              href="/networking-skills"
              className="block rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105"
            >
              <h3 className="mb-2 text-xl font-semibold">Networking & Relationships</h3>
              <p className="text-gray-600">
                Build meaningful professional relationships that accelerate your career growth.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Coaching Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Approach</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold">1:1 Coaching</h3>
              <p className="text-gray-600">
                Work directly with experienced professionals who have walked your path and can guide you to success.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold">Online Resources</h3>
              <p className="text-gray-600">
                Access our curated collection of courses, workshops, and materials designed to enhance your soft skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-16">
        <div className="container mx-auto px-6">
          <div className="rounded-lg bg-primary p-8 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">Join the Waitlist</h2>
            <p className="mb-8 text-lg">
              Be the first to know when we launch and get exclusive early access benefits.
            </p>
            <form className="mx-auto max-w-md">
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full px-6 py-3 text-gray-800 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="rounded-full bg-secondary px-8 py-3 font-semibold text-white transition hover:bg-opacity-90"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold">SoftLaunch</h3>
              <p className="text-gray-400">Empowering the next generation of leaders</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary">Twitter</a>
              <a href="#" className="hover:text-secondary">LinkedIn</a>
              <a href="#" className="hover:text-secondary">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
