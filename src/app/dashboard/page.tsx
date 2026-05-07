'use client';

import Link from 'next/link';
import { courses } from '@/lib/courses';

export default function DashboardPage() {
  const enrolledCourses = courses.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">My Learning</h1>
      <p className="text-gray-500 mb-8">Continue where you left off</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {enrolledCourses.map((course, idx) => {
          const progress = [65, 30, 10][idx];
          return (
            <div key={course.id} className="bg-white border rounded-xl overflow-hidden hover:shadow-md transition">
              <img src={course.imageUrl} alt={course.title} className="w-full h-36 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-sm line-clamp-2">{course.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{course.instructor}</p>
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>{progress}% complete</span>
                    <span>{Math.floor(progress * course.chapters.length / 100)}/{course.chapters.length} chapters</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full transition-all" style={{ width: `${progress}%` }} />
                  </div>
                </div>
                <Link href={`/courses/${course.id}`} className="block mt-4 text-center bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">Continue Learning</Link>
              </div>
            </div>
          );
        })}
      </div>

      <section>
        <h2 className="text-xl font-bold mb-4">Recommended for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {courses.slice(3, 6).map((c) => (
            <Link key={c.id} href={`/courses/${c.id}`} className="flex items-center gap-4 p-4 bg-white border rounded-lg hover:shadow-sm transition">
              <img src={c.imageUrl} alt={c.title} className="w-20 h-14 rounded object-cover" />
              <div className="min-w-0">
                <p className="font-semibold text-sm line-clamp-1">{c.title}</p>
                <p className="text-xs text-gray-500">{c.instructor}</p>
                <p className="text-xs text-blue-600 font-bold mt-1">₹{c.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
