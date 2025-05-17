import { Outlet } from "react-router"
import { NavLink } from "react-router";
import { House } from 'lucide-react';
import { List } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { PiggyBank } from 'lucide-react';


function getNavLinkClass({ isActive, isPending, isTransitioning }) {
  return [
    "block text-md p-2 rounded-lg hover:bg-gray-100 flex items-center", // default
    isPending && "pending",
    isActive && "font-bold",
    isTransitioning && "transitioning",
  ].filter(Boolean).join(" ");
}

export default function App() {

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 m-4 mb-0 font-sans-serif text-gray-900 flex flex-row rounded-md border-slate-200 border-1 shadow-md">
        <div className="sidebar w-96 bg-slate-50 border-slate-200 border-r-1 flex flex-col h-full">
          <div className="p-4 border-slate-300 border-b-1">
            <h1 className="text-2xl text-center font-bold ">LaraFinance</h1>
          </div>
          <div className="p-4 border-slate-200 border-b-1 flex flex-col h-full">
            <div className="flex-1">
              <NavLink to="/" className={getNavLinkClass} end>
                <House className="text-gray-700" size={24} />
                <span className="ml-2">Home</span>
              </NavLink>
              <NavLink to="/transaction-categories" className={getNavLinkClass} end>
                <List className="text-gray-700" size={24} />
                <span className="ml-2">Categories</span>
              </NavLink>
              <NavLink to="/accounts" className={getNavLinkClass} end>
                <PiggyBank className="text-gray-700" size={24} />
                <span className="ml-2">Accounts</span>
              </NavLink>
            </div>
            <div>
              <hr className="border-slate-300 my-4"/>
              <NavLink to="/auth/logout" className={getNavLinkClass} end>
                <LogOut className="text-gray-700" size={24} />
                <span className="ml-2">Log Out</span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
      <footer className="m-4 text-right text-sm text-gray-500">&copy; LaraFinance</footer>
    </div>
  );
}