export const metadata = { title: 'LMS Platform', description: 'Learn anything' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
