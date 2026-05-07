export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  price: number;
  imageUrl: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  lessons: number;
  enrolled: number;
  rating: number;
  chapters: Chapter[];
}

export interface Chapter {
  id: string;
  title: string;
  duration: string;
  isFree: boolean;
}

export const courses: Course[] = [
  { id: 'c1', title: 'Complete Web Development Bootcamp', description: 'Learn HTML, CSS, JavaScript, React, Node.js and more. Build 20+ real-world projects from scratch.', instructor: 'Dr. Angela Yu', price: 499, imageUrl: 'https://picsum.photos/seed/webdev/600/340', category: 'Web Development', level: 'Beginner', duration: '63 hours', lessons: 450, enrolled: 234000, rating: 4.8, chapters: [{ id: 'ch1', title: 'Introduction to HTML', duration: '45m', isFree: true }, { id: 'ch2', title: 'CSS Fundamentals', duration: '1h 20m', isFree: true }, { id: 'ch3', title: 'JavaScript Basics', duration: '2h', isFree: false }, { id: 'ch4', title: 'React From Scratch', duration: '4h', isFree: false }, { id: 'ch5', title: 'Node.js & Express', duration: '3h', isFree: false }] },
  { id: 'c2', title: 'Machine Learning A-Z', description: 'Master Machine Learning with Python & R. Build intuition with hands-on exercises and real-world case studies.', instructor: 'Kirill Eremenko', price: 699, imageUrl: 'https://picsum.photos/seed/mlaz/600/340', category: 'Data Science', level: 'Intermediate', duration: '44 hours', lessons: 320, enrolled: 189000, rating: 4.6, chapters: [{ id: 'ch6', title: 'What is Machine Learning?', duration: '30m', isFree: true }, { id: 'ch7', title: 'Linear Regression', duration: '2h', isFree: false }, { id: 'ch8', title: 'Classification', duration: '3h', isFree: false }, { id: 'ch9', title: 'Neural Networks', duration: '4h', isFree: false }] },
  { id: 'c3', title: 'iOS & Swift - Complete Development', description: 'Build real iOS apps with Swift 5, SwiftUI, CoreData, and Firebase. From zero to App Store.', instructor: 'Dr. Angela Yu', price: 599, imageUrl: 'https://picsum.photos/seed/iosdev/600/340', category: 'Mobile Development', level: 'Beginner', duration: '55 hours', lessons: 380, enrolled: 156000, rating: 4.7, chapters: [{ id: 'ch10', title: 'Swift Basics', duration: '2h', isFree: true }, { id: 'ch11', title: 'SwiftUI Fundamentals', duration: '3h', isFree: false }, { id: 'ch12', title: 'Building Your First App', duration: '4h', isFree: false }] },
  { id: 'c4', title: 'Docker & Kubernetes: The Complete Guide', description: 'Master containerization and orchestration. Deploy production-grade applications with confidence.', instructor: 'Stephen Grider', price: 449, imageUrl: 'https://picsum.photos/seed/docker/600/340', category: 'DevOps', level: 'Intermediate', duration: '22 hours', lessons: 180, enrolled: 98000, rating: 4.5, chapters: [{ id: 'ch13', title: 'Why Docker?', duration: '20m', isFree: true }, { id: 'ch14', title: 'Building Custom Images', duration: '2h', isFree: false }, { id: 'ch15', title: 'Kubernetes Architecture', duration: '3h', isFree: false }] },
  { id: 'c5', title: 'Advanced React & Next.js', description: 'Server Components, App Router, tRPC, Prisma, authentication patterns, and deployment strategies.', instructor: 'Wes Bos', price: 799, imageUrl: 'https://picsum.photos/seed/nextjs/600/340', category: 'Web Development', level: 'Advanced', duration: '32 hours', lessons: 240, enrolled: 67000, rating: 4.9, chapters: [{ id: 'ch16', title: 'Server vs Client Components', duration: '1h', isFree: true }, { id: 'ch17', title: 'Data Fetching Patterns', duration: '2h', isFree: false }, { id: 'ch18', title: 'Authentication with NextAuth', duration: '3h', isFree: false }, { id: 'ch19', title: 'Deploying to Vercel', duration: '1h', isFree: false }] },
  { id: 'c6', title: 'Python for Data Science & AI', description: 'NumPy, Pandas, Matplotlib, Scikit-Learn, TensorFlow — the complete data science toolkit.', instructor: 'Jose Portilla', price: 549, imageUrl: 'https://picsum.photos/seed/python/600/340', category: 'Data Science', level: 'Beginner', duration: '38 hours', lessons: 290, enrolled: 312000, rating: 4.7, chapters: [{ id: 'ch20', title: 'Python Refresher', duration: '2h', isFree: true }, { id: 'ch21', title: 'NumPy Deep Dive', duration: '3h', isFree: false }, { id: 'ch22', title: 'Pandas Mastery', duration: '4h', isFree: false }] },
];

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getCoursesByCategory(category: string): Course[] {
  return courses.filter((c) => c.category === category);
}

export function searchCourses(query: string): Course[] {
  const q = query.toLowerCase();
  return courses.filter((c) => c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q) || c.instructor.toLowerCase().includes(q));
}
