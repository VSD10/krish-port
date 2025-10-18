import React, { useState } from 'react';

// SVG Icons for a clean, minimalist look
const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.62 1.62 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
  </svg>
);

const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
    </svg>
);

interface ContactProps {
  onNavigate: (page: string) => void;
}

const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => {
          onNavigate('home');
        }, 2000); // Wait 2 seconds before navigating home
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <main className="flex-grow w-full text-white flex items-center justify-center py-20 px-8 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Info */}
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-display uppercase tracking-wide leading-tight">Let's build something great.</h1>
            <p className="mt-4 text-xl text-gray-300 leading-relaxed">
              Have a project in mind or just want to say hello? Fill out the form or send me an email. I'll get back to you within 24 hours.
            </p>
          </div>
          <div className="space-y-6">
            <a href="mailto:harikrish142005@gmail.com" className="flex items-center gap-4 text-lg text-gray-300 hover:text-orange-400 transition-colors">
              <MailIcon className="w-7 h-7 text-orange-400" />
              <span>harikrish142005@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/hkrish18" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg text-gray-300 hover:text-orange-400 transition-colors">
              <LinkedInIcon className="w-7 h-7 text-orange-400" />
              <span>linkedin.com/in/hkrish18</span>
            </a>
            <a href="https://github.com/hkrish18" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg text-gray-300 hover:text-orange-400 transition-colors">
              <GitHubIcon className="w-7 h-7 text-orange-400" />
              <span>github.com/hkrish18</span>
            </a>
          </div>
        </div>

        {/* Right Column: Form */}
        <div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <form action="https://formspree.io/f/xwprwkvz" method="POST" onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={5} 
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
                  ></textarea>
                </div>
              </div>
              <div className="mt-8">
                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-orange-500 text-black font-bold py-4 px-6 rounded-lg text-lg hover:bg-orange-600 transition-all transform hover:scale-[1.02] disabled:bg-gray-500 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
               {status === 'success' && <p className="mt-4 text-center text-green-400">Message sent! Redirecting home...</p>}
               {status === 'error' && <p className="mt-4 text-center text-red-400">Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Contact;