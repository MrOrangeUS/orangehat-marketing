import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-white/70">
        That route doesn’t exist (or it got nuked in a refactor).
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-md bg-orange-500 px-4 py-2 font-semibold text-black hover:bg-orange-400"
      >
        Back to home
      </Link>
    </div>
  );
}
