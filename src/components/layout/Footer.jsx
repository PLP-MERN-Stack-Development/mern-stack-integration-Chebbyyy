import { Github, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
            BlogHub
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-gray-600 font-medium">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/posts" className="hover:text-blue-600 transition-colors">Posts</Link>
            <Link to="/create-post" className="hover:text-blue-600 transition-colors">Create</Link>
            <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
          </nav>

          {/* Socials */}
          <div className="flex gap-5 text-gray-600">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
              <Github size={22} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <Twitter size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
              <Instagram size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-8 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} BlogHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
