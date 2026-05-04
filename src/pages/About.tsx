
const About = () => {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <h1 className="text-4xl lg:text-5xl font-black text-[#e3ebf7] mb-6 text-center font-bold">About Me</h1>
          
          <div className="space-y-6 text-[#7ca3d6]">
            <p className="text-lg leading-relaxed">
              I'm a dedicated 2nd-year Computer Engineering student with a strong passion for 
              technology and software development. My journey in tech has been driven by curiosity 
              and a desire to create meaningful solutions to real-world problems.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="text-left">
                <h3 className="text-xl font-bold text-[#caced9] mb-4">Education</h3>
                <p className="mb-2">Computer Engineering (2nd Year)</p>
                <p className="text-sm text-[#d9dee7]">Focus on Full Stack Development</p>
              </div>
              
              <div className="text-left">
                <h3 className="text-xl font-bold text-[#dee1e5] mb-4">Skills</h3>
                <div className="space-y-2">
                  <p>• Frontend: React, HTML, CSS, JavaScript</p>
                  <p>• Backend: Node.js, Express, MongoDB</p>
                  <p>• Tools: Git, GitHub, VS Code</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed mt-8">
              I enjoy working with modern web technologies and am constantly expanding my skill set 
              to stay current with industry trends. My goal is to become a proficient software engineer 
              who can contribute to innovative projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
