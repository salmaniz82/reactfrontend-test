// Layout.tsx
import { Outlet, Link } from "react-router";

export default function Layout() {
  return (
    <div className="h-screen flex flex-col">
      <header className="h-14 flex items-center justify-between px-4 bg-gray-800 text-white shadow">
        <div className="text-lg font-bold">LOGO</div>
        <div className="flex items-center space-x-4">
          <button className="w-8 h-8 rounded-full bg-gray-600"></button>
          <button className="w-8 h-8 rounded-full bg-gray-600"></button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-gray-100 border-r overflow-y-auto hidden md:block">
          <nav className="p-4 space-y-2">
            <Link to="/" className="block px-3 py-2 rounded hover:bg-gray-200">
              Properties
            </Link>
            <Link
              to="/todos"
              className="block px-3 py-2 rounded hover:bg-gray-200"
            >
              Todos
            </Link>
          </nav>
        </aside>

        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
