import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = { title: 'LMS Platform - LearnHub', description: 'Learn anything online' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased min-h-screen">
        <nav className="border-b bg-white sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-600">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>
              LearnHub
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/courses" className="text-gray-600 hover:text-blue-600 font-medium transition">Courses</Link>
              <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 font-medium transition">My Learning</Link>
            </div>
            <Link href="/courses" className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium">Browse Courses</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
