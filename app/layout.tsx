import type { Metadata } from 'next';
import 'lenis/dist/lenis.css';
import './globals.css';
export const metadata: Metadata = { title: 'Jester Pedrosa — Systems made legible.', description: 'IT Support Specialist, QA Engineer and web builder. Selected projects and experience by Jester Pedrosa.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html> }
