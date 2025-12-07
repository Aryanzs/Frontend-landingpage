export default function Home() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight text-teal-400">
        Welcome 👋
      </h1>
      <p className="text-slate-200">
        This starter comes with React, Vite, Tailwind CSS v4, React Router, and Axios
        pre-configured so you can start building instantly.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <h2 className="text-lg font-semibold text-slate-50">Tailwind Ready</h2>
          <p className="mt-1 text-sm text-slate-400">
            Utility classes are available via <code className="font-mono">@import "tailwindcss"</code> in <code className="font-mono">index.css</code>.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <h2 className="text-lg font-semibold text-slate-50">Routing Setup</h2>
          <p className="mt-1 text-sm text-slate-400">
            Manage routes in <code className="font-mono">src/routes/AppRoutes.jsx</code>.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <h2 className="text-lg font-semibold text-slate-50">API Ready</h2>
          <p className="mt-1 text-sm text-slate-400">
            Use <code className="font-mono">axios</code> for API calls anywhere in your app.
          </p>
        </div>
      </div>
    </section>
  );
}
