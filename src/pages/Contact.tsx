
const Contact = () => {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl lg:text-4xl font-black text-[#3B82F6] mb-12 text-center font-bold">Contact</h1>
        
        <div className="space-y-8">
          <div className="bg-[#fff] rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h2>
            <p className="text-gray-600 mb-8">
              I'm always interested in hearing about new opportunities and exciting projects.
              Feel free to reach out if you'd like to collaborate or just say hello!
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
                <a 
                  href="mailto:purva.ahirrao@example.com" 
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  purvaahirrao02@gmail.com
                </a>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Social</h3>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://github.com/purvaahirrao" 
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a 
                    href="linkedin.com/in/purva-ahirrao-a9758132b" 
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://twitter.com/purvaahirrao" 
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-colors">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
