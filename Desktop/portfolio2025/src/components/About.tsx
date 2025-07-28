import { Target, Users, Lightbulb, BarChart3, GraduationCap, Building2, Shield, Upload } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/profile.jpg"
            alt="Giovanni Ayiah-Mensah"
            className="profile-image mb-8"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-secondary-600 mb-4">
            Hi, I'm Giovanni Ayiah-Mensah. I'm a Business Information Systems student and aspiring software engineer with over 4 years of experience as an Assistant Manager at Fruits Haven. My journey in tech started with the ALX Africa Professional Foundations Program, and I'm currently pursuing my degree at the University of Education, Winneba.
          </p>
          <p className="text-secondary-600 mb-4">
            My goal is to become a cybersecurity expert, combining my business acumen with technical expertise to protect and innovate in the digital space.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2 text-primary-600">Technical Skills</h3>
            <ul className="flex flex-wrap gap-3 mb-4">
              <li className="bg-primary-50 text-primary-900 px-3 py-1 rounded-full text-sm font-medium">Python (Beginner)</li>
              <li className="bg-primary-50 text-primary-900 px-3 py-1 rounded-full text-sm font-medium">AI Tools</li>
              <li className="bg-primary-50 text-primary-900 px-3 py-1 rounded-full text-sm font-medium">React</li>
              <li className="bg-primary-50 text-primary-900 px-3 py-1 rounded-full text-sm font-medium">Tailwind CSS</li>
              <li className="bg-primary-50 text-primary-900 px-3 py-1 rounded-full text-sm font-medium">TypeScript</li>
              <li className="bg-primary-50 text-primary-900 px-3 py-1 rounded-full text-sm font-medium">Vite</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2 text-primary-600">Soft Skills</h3>
            <ul className="flex flex-wrap gap-3">
              <li className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Leadership</li>
              <li className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Teamwork</li>
              <li className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Communication</li>
              <li className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Problem Solving</li>
              <li className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Adaptability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
