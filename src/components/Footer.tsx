
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import XLogo from './XLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe email:', email);
    setEmail('');
    // Add actual subscription logic here
  };
  
  return (
    <footer className="bg-black py-10 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white text-black w-10 h-10 flex items-center justify-center font-serif text-2xl font-bold">
                F
              </div>
              <h2 className="text-xl font-serif font-bold">The Free Forum</h2>
            </div>
            <p className="text-sm text-gray-300 mt-2">
              fostering open discussions.
            </p>
          </div>
          
          {/* About Section */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-medium mb-1">About</h3>
            <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">About The Free Forum</Link>
            <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">Join the movement</Link>
          </div>
          
          {/* Subscribe Form */}
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 px-4 py-2 rounded-md bg-white text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="bg-black border border-white text-white hover:bg-white hover:text-black transition-colors">
                Subscribe
              </Button>
            </form>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-6 justify-end">
              <a 
                href="https://x.com/MirajShafek" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white rounded-full p-2 text-black hover:opacity-80 transition-opacity"
              >
                <XLogo size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/mirajshafek/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white rounded-full p-2 text-black hover:opacity-80 transition-opacity"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <div>
            © {currentYear} All content licensed under the Creative Commons Attribution-NonCommercial 4.0 International License.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
