import React from "react";
import Image from "next/image"
const Footer: React.FC = () => (
  <footer className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900 text-neutral-200 py-10 border-t border-cyan-700 mt-10">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <Image src="/logikeon_no_back.png" alt="Logikeon Logo" className="h-10 w-10 rounded-full shadow-lg" />
        <span className="font-bold text-xl tracking-wide text-cyan-300">Logikeon</span>
      </div>
      <div className="text-center md:text-right text-sm">
        <span className="block mb-2">&copy; {new Date().getFullYear()} Logikeon. All rights reserved.</span>
        <span className="block">
          Made with <span className="text-pink-400">&#10084;</span> by the Logikeon team
        </span>
      </div>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.543.929-.855 2.01-.855 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z"/></svg>
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg>
        </a>
        <a href="mailto:info@logikeon.com" className="hover:text-cyan-400 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M12 13.065l-11.99-7.065v14h23.98v-14l-11.99 7.065zm11.99-9.065v-.001c0-1.104-.896-2-2-2h-19.98c-1.104 0-2 .896-2 2v.001l11.99 7.065 11.99-7.065z"/></svg>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
