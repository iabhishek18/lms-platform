import Link from 'next/link';
import { courses } from '@/lib/courses';

export default function Home() {
  const featured = courses.slice(0, 3);
  const categories = [...new Set(courses.map((c) => c.category))];

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Learn Without Limits</h1>
          <p className="text-lg text-blue-100 mt-4 max-w-2xl mx-auto">Access world-class courses taught by industry experts. Master new skills at your own pace.</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center">
            <Link href="/courses" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition">Explore Courses</Link>
            <Link href="/dashboard" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition">My Learning</Link>
          </div>
          <div className="flex justify-center gap-12 mt-12 text-sm">
            <div><p className="text-2xl font-bold">500+</p><p className="text-blue-200">Courses</p></div>
            <div><p className="text-2xl font-bold">50K+</p><p className="text-blue-200">Students</p></div>
            <div><p className="text-2xl font-bold">4.8</p><p className="text-blue-200">Avg Rating</p></div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-2">Featured Courses</h2>
        <p className="text-gray-500 mb-8">Hand-picked by our team for you</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`} className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition overflow-hidden group">
              <img src={course.imageUrl} alt={course.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-5">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">{course.category}</span>
                <h3 className="font-bold text-lg mt-2 line-clamp-2">{course.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{course.instructor}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-bold text-blue-600">₹{course.price}</span>
                  <span className="text-sm text-gray-400">⭐ {course.rating} ({course.enrolled.toLocaleString()} students)</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link key={cat} href={`/courses?category=${encodeURIComponent(cat)}`} className="bg-white p-6 rounded-xl border hover:border-blue-300 hover:shadow-md transition text-center">
                <h3 className="font-semibold">{cat}</h3>
                <p className="text-sm text-gray-500 mt-1">{courses.filter((c) => c.category === cat).length} courses</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
