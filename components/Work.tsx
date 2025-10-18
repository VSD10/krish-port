import React from 'react';

const initialProjects = [
  {
    year: '2025',
    title: 'End-to-End Supply Chain Analytics & Inventory Optimization Platform',
    subtitle: 'Data Analytics Project',
    description: [
      'Built an end-to-end supply chain analytics platform leveraging ML to optimize inventory levels, reduce costs, and improve order fulfillment.',
      'Automated dashboards for real-time inventory tracking, data-driven decision-making.',
    ],
    skills: 'Supply chain analytics, predictive modeling, data visualization — transferable to operations strategy and business process improvement.',
    tags: ['Data Analytics', 'Machine Learning', 'Supply Chain'],
    imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    year: '2025',
    title: 'Dynamic Pricing Optimization System',
    subtitle: 'Data Analytics Project',
    description: [
      'Created a dynamic pricing optimization system using ML models to forecast demand and set prices, maximizing revenue and market responsiveness.',
      'Developed dashboards to analyze competitor data and sales trends, enabling rapid, automated pricing adjustments.',
    ],
    skills: 'Pricing analytics, machine learning, business intelligence — applicable to brand positioning and strategic management.',
    tags: ['Data Analytics', 'Machine Learning', 'BI'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  },
  {
    year: '2024',
    title: 'Mind Pal',
    subtitle: 'Smart India Hackathon Project / Team Project',
    description: [
      'Built an AI chatbot using NLP to provide empathetic support, showing user-focused design, problem-solving, and innovative thinking.',
      'Analyzed user interactions to improve responses, and consumer behavior.',
    ],
    skills: 'Consumer empathy, digital innovation, data analysis.',
    tags: ['AI', 'NLP', 'Chatbot'],
    imageUrl: 'https://images.unsplash.com/photo-1589254065909-b7086229d08c?q=80&w=1974&auto=format&fit=crop',
  },
  {
    year: '2024',
    title: 'SQL Chatbot for Business Insights',
    subtitle: 'Chatbot Project',
    description: [
      'Developed a chatbot that converts natural language into SQL queries to provide realtime business insights.',
      'Enabled data-driven decisions for simulated business scenarios, bridging technical expertise with business strategy.',
    ],
    skills: 'Business analytics, database management, problem-solving.',
    tags: ['AI', 'SQL', 'Chatbot'],
    imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1905&auto=format&fit=crop',
  },
];

const Work: React.FC = () => {
  return (
    <main className="flex-grow w-full text-white overflow-y-auto pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-8">
        <div className="flex flex-col gap-24">
          {initialProjects.map((project, index) => (
            <div 
              key={project.title} 
              className={`flex flex-col md:flex-row gap-12 items-center ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 shadow-2xl shadow-black/20">
                   <div className="aspect-video bg-black/20 rounded-xl flex items-center justify-center overflow-hidden">
                    {project.imageUrl ? (
                      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-gray-500 font-medium">Image not available</span>
                    )}
                   </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2">
                <p className="text-orange-400 font-semibold text-lg">{project.year}</p>
                <h2 className="text-4xl font-display uppercase tracking-wide mt-2 leading-tight">{project.title}</h2>
                <h3 className="text-xl text-gray-300 mt-1">{project.subtitle}</h3>
                
                <ul className="mt-6 space-y-3 text-lg text-gray-300 list-disc list-inside">
                    {project.description.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
                 <p className="mt-4 text-lg text-gray-300 italic">
                    <span className="font-semibold not-italic text-gray-100">Skills:</span> {project.skills}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-orange-500/10 text-orange-300 font-medium py-1.5 px-4 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Work;