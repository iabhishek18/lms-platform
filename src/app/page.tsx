export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-900">Learning Management System</h1>
      <p className="mt-2 text-gray-600">Browse courses, track progress, and earn certificates.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Web Development', 'Data Science', 'Mobile Apps'].map((cat) => (
          <div key={cat} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">{cat}</h3>
            <p className="text-gray-500 text-sm mt-2">Explore courses in {cat}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
