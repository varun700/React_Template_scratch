// src/App.tsx
import Sidebar from "./Sidebar";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <div className="h-screen flex overflow-hidden">
      <div className="w-[14%]  md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 border-e-2 border-gray-100 bg-white fixed top-0 left-0 h-full z-10">
        {/* Left */}
        <div className="w-auto h-auto flex items-center justify-start p-2 ">
          <Link
            to="/"
            className="flex items-center justify-center lg:justify-start gap-2"
          >
            <img src="/logo.png" alt="logo" width={32} height={32}></img>
            <span className="hidden lg:block font-bold">Sample App</span>
          </Link>
        </div>

        <Sidebar />
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7f8fa] ml-auto">
        <div className="sticky top-0 bg-white z-10">
          <Header />
        </div>
        {/* Scrollable Content */}
        <div className="h-screen overflow-y-auto p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
