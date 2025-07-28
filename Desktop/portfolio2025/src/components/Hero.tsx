import { ArrowDown } from 'lucide-react'
import SocialLinks from './SocialLinks'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-600 to-accent-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-primary-900">
                GA
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-900 mb-4 animate-fade-in-up">
            Giovanni Ayiah-Mensah
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="font-semibold text-primary-700">Professional</span>
            <span className="mx-3">•</span>
            <span className="font-semibold text-accent-600">Innovator</span>
            <span className="mx-3">•</span>
            <span className="font-semibold text-primary-700">Strategic Leader</span>
          </div>

          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Passionate about driving innovation and excellence through strategic thinking, 
            collaborative leadership, and transformative project management. Dedicated to 
            turning visionary ideas into impactful realities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="#portfolio"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <SocialLinks />
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce-subtle">
            <a href="#about" className="inline-block">
              <ArrowDown size={32} className="text-primary-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
