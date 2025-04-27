import { Outlet } from "react-router"
import { NavLink } from "react-router";
import { House } from 'lucide-react';
import { List } from 'lucide-react';
import { LogOut } from 'lucide-react';




export default function App() {

  return (
    <div className="flex flex-col h-screen bg-slate-50">
        <div className="flex flex-1 w-full items-center justify-center ">
            <div className="rounded-xl border border-slate-200 bg-white shadow w-full max-w-md m-2 p-8">
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
        <footer className="m-4 text-right text-sm text-gray-500">&copy; LaraFinance</footer>
    </div>
  );
}