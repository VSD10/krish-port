import React from 'react';

// Data for the new sections
const education = {
  years: '2022 - 2026',
  university: 'Knowledge Institue, India',
  degree: 'Bachelor of Computer science and Business Systems',
};

const technicalSkills = [
  { icon: 'PY', name: 'Python', description: 'Programming Language' },
  { icon: 'SQL', name: 'SQL', description: 'Database Management' },
  { icon: 'DA', name: 'Excel, Power BI', description: 'Data Analysis' },
  { icon: 'N8N', name: 'N8N', description: 'Automation' },
];

const projects = [
    { year: '2025', name: 'Supply Chain Analytics', type: 'Data Analytics' },
    { year: '2025', name: 'Dynamic Pricing Optimization', type: 'Data Analytics' },
    { year: '2024', name: 'Mind Pal', type: 'SIH hackathon project' },
    { year: '2024', name: 'SQL chatbot', type: 'chatbot project' },
];

const businessSkills = ['Market & Consumer Insights', 'Competitor Benchmarking', 'Brand Strategy'];

const languages = [
  { lang: 'Tamil', level: '(native)' },
  { lang: 'French', level: '(A1 in progress)' },
  { lang: 'English', level: '(professional)' },
];

// Reusable Card component for consistent styling
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm ${className}`}>
    {children}
  </div>
);

const About: React.FC = () => {
  const portraitImageUrl = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop";

  return (
    <main className="flex-grow w-full text-white overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        {/* --- Top Section: Image + Bio --- */}
        <div className="min-h-screen flex items-center justify-center px-8 md:px-12 lg:px-24 py-20">
            <div className="flex flex-col md:flex-row items-center gap-12 w-full">
                
                {/* Left side for Image */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                    <div className="bg-white/10 rounded-full w-full max-w-xs mx-auto aspect-square p-2">
                        <img
                          src={portraitImageUrl}
                          alt="Portrait of HariKrishnan"
                          className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </div>

                {/* Right side for Content */}
                <div className="w-full md:w-2/3 text-center md:text-left">
                    <h1 className="text-8xl sm:text-9xl lg:text-[10rem] font-display uppercase tracking-wide leading-none">
                        HELLO<span className="text-orange-500">!</span>
                    </h1>
                    <p className="mt-8 text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl">
                        Aspiring management professional with a B.Tech in Computer Science and Business Systems, passionate about bridging technology and business strategy. Skilled in leveraging data, innovation, and consumer-focused research to solve business challenges. Eager to develop expertise in management principles, brand strategy, and luxury business, strategic thinking, and cross-cultural insights.
                    </p>
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                        <a 
                          href="https://www.linkedin.com/in/hkrish18" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-orange-500 text-black font-semibold py-4 px-10 rounded-full transition-transform transform hover:scale-105 text-lg"
                        >
                          www.linkedin.com/in/hkrish18
                        </a>
                        <a 
                          href="mailto:harikrish142005@gmail.com"
                          className="bg-orange-500 text-black font-semibold py-4 px-10 rounded-full transition-transform transform hover:scale-105 text-lg"
                        >
                          harikrish142005@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* --- Grid Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-12 lg:px-24 pb-20">
          
          {/* Column 1: Technical Skills & Language */}
          <div className="flex flex-col gap-8">
            <Card className="flex-1">
              <h2 className="text-3xl font-display uppercase tracking-wide mb-4">Technical Skills</h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                {technicalSkills.map(skill => (
                  <div key={skill.name} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{skill.name}</h3>
                      <p className="text-xs text-gray-400">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <Card>
              <h2 className="text-3xl font-display uppercase tracking-wide mb-4">Language</h2>
              <div className="space-y-2 text-lg">
                {languages.map(lang => (
                  <p key={lang.lang}>
                    <span className="text-gray-200">{lang.lang}</span>
                    <span className="text-gray-400 text-sm ml-1">{lang.level}</span>
                  </p>
                ))}
              </div>
            </Card>
          </div>

          {/* Column 2: Projects */}
          <div>
             <Card className="h-full">
              <h2 className="text-3xl font-display uppercase tracking-wide mb-6">Projects</h2>
              <div className="relative pl-6">
                {/* Timeline line */}
                <div className="absolute left-[2px] top-2 bottom-2 w-0.5 bg-white/20"></div>
                {projects.map((project, index) => (
                  <div key={index} className="mb-8 last:mb-0 relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-[27px] top-2 w-3 h-3 bg-white rounded-full border-4 border-gray-900"></div>
                    <p className="text-sm text-gray-400">{project.year}</p>
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <p className="text-lg text-gray-300">{project.type}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Column 3: Education & Business Skills */}
          <div className="flex flex-col gap-8">
             <Card className="flex-1">
              <h2 className="text-3xl font-display uppercase tracking-wide mb-4">Education</h2>
              <p className="text-gray-400">{education.years}</p>
              <p className="text-xl font-semibold mt-2">{education.university}</p>
              <p className="text-lg text-gray-300">{education.degree}</p>
            </Card>
            <Card>
              <h2 className="text-3xl font-display uppercase tracking-wide mb-4">Business Skills</h2>
              <ul className="space-y-2 text-lg text-gray-300">
                {businessSkills.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </Card>
          </div>
        </div>
        
        {/* --- My Journey Section --- */}
        <div className="flex flex-col md:flex-row md:items-stretch px-8 md:px-12 lg:px-24 py-20">
          {/* Left Column (The Title) */}
          <div className="w-full md:w-2/5 flex-shrink-0 flex items-center justify-center md:justify-start text-center md:text-left md:pr-8">
              <h2 className="text-6xl sm:text-7xl font-display uppercase tracking-wide leading-none text-white">
                  My journey
              </h2>
          </div>

          {/* Right Column (The Story) */}
          <div className="w-full md:w-3/5 mt-8 md:mt-0 pt-8 md:pt-0 md:pl-8 border-t-2 md:border-t-0 md:border-l-2 border-orange-500">
              <p className="text-xl text-gray-300 leading-relaxed">
                  My journey began with a B.Tech in Computer Science and Business Systems, driven by a deep curiosity to understand how technology and business strategy work together to solve real-world problems. This dual focus provided me with a unique interdisciplinary foundation. While I enjoyed building technical solutions, I discovered my true passion lay not just in the *how* of technology, but in the *why* of business. I found myself increasingly captivated by the art of management, strategic decision-making, and understanding what truly drives a successful enterprise.
              </p>
              <p className="mt-6 text-xl text-gray-300 leading-relaxed">
                  This passion naturally gravitated towards the dynamic world of luxury brand management. To me, luxury is the ultimate fusion of art and analytics—where timeless heritage meets modern strategy, and meticulous craftsmanship connects with a deep consumer desire. My background has equipped me with a unique lens to view this industry, understanding both the data-driven systems that power a modern brand and the human-centric storytelling that gives it a soul. My goal is to apply this blended perspective to help build and protect the 'why' behind a brand, ensuring its legacy resonates authentically in a constantly evolving world.
              </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;