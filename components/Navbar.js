import Link from 'next/link';
import { useTheme } from '../utils/ThemeContext';

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 dark:text-white text-black p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">BrahmandX</Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-purple-500">Home</Link>
          <Link href="/about" className="hover:text-purple-500">About</Link>
          <Link href="/projects" className="hover:text-purple-500">Projects</Link>
          <Link href="/contact" className="hover:text-purple-500">Contact</Link>
          <button onClick={toggleTheme} className="ml-4 px-2 py-1 bg-purple-600 text-white rounded">
            {dark ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </div>
    </nav>
  );
}