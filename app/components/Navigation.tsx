import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            SoftLaunch
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/presentation-skills" 
              className="text-gray-600 hover:text-primary transition"
            >
              Presentation Skills
            </Link>
            <Link 
              href="/networking-skills" 
              className="text-gray-600 hover:text-primary transition"
            >
              Networking
            </Link>
            <Link 
              href="/register" 
              className="text-gray-600 hover:text-primary transition"
            >
              Pricing
            </Link>
          </div>

          <Link
            href="/register"
            className="inline-block rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white hover:bg-primary-dark transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  )
} 