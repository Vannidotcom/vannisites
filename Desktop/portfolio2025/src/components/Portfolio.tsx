import { ExternalLink, FileText, Lightbulb, Users, TrendingUp } from 'lucide-react'

const projects = [
  {
    title: "Giovanni Portfolio Website",
    description: "This is my modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. I designed and developed it to showcase my skills, experience, and projects with a professional and accessible user experience.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Lucide React"],
    icon: FileText,
    metrics: "Mobile-first, high-performance design",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/Vannidotcom/portfolio2025"
  },
  {
    title: "Team Development Program",
    description: "I designed and implemented a leadership development program that increased team productivity by 35% and employee satisfaction scores by 50%.",
    tags: ["Team Building", "Training", "Performance"],
    icon: Users,
    metrics: "35% productivity increase",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Process Optimization Project",
    description: "I streamlined operational processes through data analysis and workflow redesign, achieving 25% reduction in processing time and improved quality metrics.",
    tags: ["Process Improvement", "Analytics", "Quality Management"],
    icon: TrendingUp,
    metrics: "25% time reduction",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Fruits Haven Bookkeeping System",
    description: "I developed a comprehensive bookkeeping system to track sales, inventory, and expenses, significantly improving operational efficiency at Fruits Haven.",
    tags: ["Software Development", "Business Intelligence", "Retail Operations"],
    icon: FileText,
    metrics: "Operational efficiency improved",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Student E-book Request System",
    description: "I led the development of a platform for university students to request and access academic resources, improving educational resource accessibility.",
    tags: ["Education Technology", "Team Leadership", "Full-Stack Development"],
    icon: FileText,
    metrics: "University-wide implementation",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Roommates Platform",
    description: "I crafted the business model for a student accommodation platform, addressing housing challenges for university students through innovative solutions.",
    tags: ["Business Strategy", "Startup Development", "Market Research"],
    icon: Users,
    metrics: "Business model validated",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of projects demonstrating my leadership, innovation, and strategic impact.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-primary-900/40 transition-all duration-300" />
                  <div className="absolute top-4 right-4 p-2 bg-white/90 rounded-lg">
                    <project.icon className="text-primary-600" size={20} />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="mb-4">
                    <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.metrics}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center gap-2 text-sm font-semibold">
                      <FileText size={16} />
                      Case Study
                    </button>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-primary-600 text-primary-600 py-2 px-4 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm font-semibold"
                      >
                        <ExternalLink size={16} />
                        Learn More
                      </a>
                    ) : (
                      <button
                        className="flex-1 border border-primary-600 text-primary-600 py-2 px-4 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm font-semibold"
                        disabled
                      >
                        <ExternalLink size={16} />
                        Learn More
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Interested in learning more about these projects or discussing potential collaborations?
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
