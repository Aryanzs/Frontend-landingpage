import { NavLink, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="border-b border-slate-800">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <span className="text-lg font-bold text-teal-400">
            Fast React Starter
          </span>
          <div className="flex gap-4 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-teal-300 ${isActive ? "text-teal-400 font-semibold" : "text-slate-200"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-teal-300 ${isActive ? "text-teal-400 font-semibold" : "text-slate-200"}`
              }
            >
              About
            </NavLink>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
