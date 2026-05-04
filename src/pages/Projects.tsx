import Card from '../components/Card';
import Button from '../components/Button';

const Projects = () => {
  const projects = [
    {
      title: "Airbnb Clone",
      description: "Full-featured vacation rental platform with user authentication, property listings, and booking system.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/purvaahirrao/project2",
      live:"https://lnkd.in/d7TMRDat"
    },
    {
      title: "Quick Video Call App",
      description: "Real-time video communication platform with WebRTC technology and room-based connections.",
      tech: ["WebRTC", "Socket.io", "Express"],
      github: "https://https://lnkd.in/gQv9P_-j.com/purvaahirrao/video-call-app",
       live:"https://lnkd.in/gzTVA6tC"
    },
    {
      title: "Task Manager",
      description: "Calendar-based task scheduling application with image upload and team collaboration features.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://https://lnkd.in/dxs5FAf7.com/purvaahirrao/task-manager",
       live:" https://lnkd.in/dRwETrVf"
    }
  ];

  return (
    <main className="pt-16 min-h-screen px-6 lg:px-12 py-20">
      <header>
        <h1 className="text-3xl lg:text-4xl font-black text-[#3B82F6] mb-12 text-center animate-fade-in tracking-tight font-bold">
          Projects
        </h1>
      </header>
      <section className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-[#3e75edd6] animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <article>
                <h3 className="text-xl font-bold text-[#1A1F36] mb-3">{project.title}</h3>
                <p className="text-[#020b1a] mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs text-[#FF6464] bg-[#FFF5F5] px-2 py-1 rounded font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <footer>
                  <Button 
                    variant="outline" 
                    size="small"
                    onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                    className="w-full mb-1.5"
                  >
                    View on GitHub →
                  </Button>
                   <Button 
                    variant="outline" 
                    size="small"
                    onClick={() => window.open(project.live, '_blank', 'noopener,noreferrer')}
                    className="w-full"
                  >
                    live link→
                  </Button>
                </footer>
              </article>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
