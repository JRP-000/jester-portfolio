import Link from 'next/link';
export default function NotFound() {
  return <main className="not-found section"><h1>This page isn’t here.</h1><p>The link may be incomplete or the page may have moved.</p><Link className="button primary" href="/">Return to the portfolio</Link></main>;
}
