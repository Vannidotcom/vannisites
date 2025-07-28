import { Download } from 'lucide-react'

export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-6">My Resume</h2>
        <p className="text-secondary-600 mb-8">
          Download my latest resume to learn more about my experience and education.
        </p>
        <a
          href="/resume.pdf"
          download
          className="btn btn-primary inline-flex items-center gap-2"
        >
          <Download className="w-5 h-5" />
          Download Resume
        </a>
      </div>
    </section>
  )
}
