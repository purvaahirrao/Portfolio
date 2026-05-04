
const Articles = () => {
  const articles = [
    {
      title: "Building a Full-Stack Application with React and Node.js",
      excerpt: "Learn how to create a complete web application from scratch using modern technologies.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Tutorial"
    },
    {
      title: "Understanding WebRTC for Real-Time Communication",
      excerpt: "A comprehensive guide to implementing video calling features in web applications.",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Technology"
    },
    {
      title: "Best Practices for MongoDB Schema Design",
      excerpt: "Tips and tricks for designing efficient database schemas for your applications.",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Database"
    }
  ];

  return (
    <div className="pt-16 min-h-screen px-6 lg:px-12 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-black text-[#3B82F6] mb-12 text-center font-bold">Articles</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-[#ffffffd8] border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {article.category}
                </span>
                <span className="text-xs text-gray-500">{article.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {article.excerpt}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">{article.date}</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
