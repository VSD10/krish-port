import React from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const navItemClasses = "text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base font-light";
  const buttonClasses = `${navItemClasses} bg-transparent border-none p-0 cursor-pointer`;

  return (
    <header className="absolute top-0 left-0 w-full p-8 md:p-12 z-20">
      <nav>
        <ul className="flex space-x-8 md:space-x-10">
          <li>
            <button onClick={() => onNavigate('home')} className={buttonClasses}>
              Home
            </button>
          </li>
          <li>
            <button onClick={() => onNavigate('about')} className={buttonClasses}>
              About me
            </button>
          </li>
          <li>
            <button onClick={() => onNavigate('work')} className={buttonClasses}>
              My work
            </button>
          </li>
          <li>
            <button onClick={() => onNavigate('contact')} className={buttonClasses}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;