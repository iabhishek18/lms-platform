'use client';

import Link from 'next/link';
import { courses, searchCourses } from '@/lib/courses';
import { useState } from 'react';

export default function CourseCatalog() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = Array.from(new Set(courses.map((c) => c.category)));

  let filtered = search ? searchCourses(search) : courses;
  if (selectedCategory) filtered = filtered.filter((c) => c.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Courses</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search courses..." className="flex-1 px-4 py-2.5 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="px-4 py-2.5 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">All Categories</option>
          {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </div>

      <p className="text-sm text-gray-500 mb-4">{filtered.length} courses found</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((course) => (
          <Link key={course.id} href={`/courses/${course.id}`} className="bg-white rounded-xl border hover:shadow-lg transition overflow-hidden group">
            <img src={course.imageUrl} alt={course.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{course.category}</span>
                <span className="text-xs text-gray-400">{course.level}</span>
              </div>
              <h3 className="font-bold line-clamp-2">{course.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{course.instructor}</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                <span>{course.duration}</span>
                <span>•</span>
                <span>{course.lessons} lessons</span>
              </div>
              <div className="flex items-center justify-between mt-4 pt-3 border-t">
                <span className="text-lg font-bold text-blue-600">₹{course.price}</span>
                <span className="text-sm">⭐ {course.rating}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
