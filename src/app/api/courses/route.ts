import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search');

  const where: any = { isPublished: true };
  if (category) where.categoryId = category;
  if (search) where.OR = [{ title: { contains: search, mode: 'insensitive' } }, { description: { contains: search, mode: 'insensitive' } }];

  const courses = await db.course.findMany({
    where,
    include: { instructor: { select: { name: true } }, chapters: { where: { isPublished: true }, select: { id: true } }, enrollments: { select: { id: true } } },
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json({ success: true, data: courses.map(c => ({ ...c, chaptersCount: c.chapters.length, studentsCount: c.enrollments.length })) });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { title, description, price, categoryId, instructorId, imageUrl } = body;
  const course = await db.course.create({ data: { title, description, price, categoryId, instructorId, imageUrl } });
  return NextResponse.json({ success: true, data: course }, { status: 201 });
}
