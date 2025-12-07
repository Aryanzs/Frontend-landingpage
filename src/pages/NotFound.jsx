import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight text-red-400">
        404 – Page not found
      </h1>
      <p className="text-slate-300">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="inline-flex items-center rounded-lg border border-teal-500 px-4 py-2 text-sm font-medium text-teal-200 hover:bg-teal-500/10"
      >
        ← Back to home
      </Link>
    </section>
  );
}
