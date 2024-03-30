import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Homepage!</h1>
      <p>Click the link below to see your name.</p>
      <Link href="/name">
        <a>View your name</a>
      </Link>
    </div>
  );
}
