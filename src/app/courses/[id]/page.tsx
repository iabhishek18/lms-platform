'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getCourseById } from '@/lib/courses';
import { useState } from 'react';

export default function CourseDetailPage() {
  const params = useParams();
  const course = getCourseById(params.id as string);
  const [enrolled, setEnrolled] = useState(false);

  if (!course) return <div className="p-8 text-center text-gray-500">Course not found</div>;

  return (
    <div>
      <div className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-blue-300 mb-2">{course.category} &gt; {course.level}</p>
          <h1 className="text-3xl md:text-4xl font-extrabold">{course.title}</h1>
          <p className="text-gray-300 mt-4 max-w-2xl text-lg">{course.description}</p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-sm">
            <span className="text-yellow-400 font-bold">⭐ {course.rating}</span>
            <span className="text-gray-400">({course.enrolled.toLocaleString()} students)</span>
            <span className="text-gray-400">Created by <span className="text-blue-300">{course.instructor}</span></span>
          </div>
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">
            <span>🕐 {course.duration}</span>
            <span>📚 {course.lessons} lessons</span>
            <span>📊 {course.level}</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Course Content</h2>
            <p className="text-sm text-gray-500 mb-4">{course.chapters.length} chapters • {course.duration} total</p>
            <div className="border rounded-lg divide-y">
              {course.chapters.map((ch, i) => (
                <div key={ch.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">{i + 1}</span>
                    <div>
                      <p className="font-medium">{ch.title}</p>
                      <p className="text-sm text-gray-500">{ch.duration}</p>
                    </div>
                  </div>
                  {ch.isFree && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-medium">Free Preview</span>}
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="w-full lg:w-80 shrink-0">
          <div className="border rounded-xl p-6 shadow-sm sticky top-20">
            <img src={course.imageUrl} alt={course.title} className="w-full rounded-lg mb-4" />
            <p className="text-3xl font-extrabold text-gray-900">₹{course.price}</p>
            {enrolled ? (
              <Link href="/dashboard" className="block w-full mt-4 bg-green-600 text-white text-center py-3 rounded-lg font-bold hover:bg-green-700 transition">Go to Course →</Link>
            ) : (
              <button onClick={() => setEnrolled(true)} className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">Enroll Now</button>
            )}
            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">✓ {course.duration} of content</li>
              <li className="flex items-center gap-2">✓ {course.lessons} lessons</li>
              <li className="flex items-center gap-2">✓ Certificate of completion</li>
              <li className="flex items-center gap-2">✓ Lifetime access</li>
              <li className="flex items-center gap-2">✓ Mobile & desktop access</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
