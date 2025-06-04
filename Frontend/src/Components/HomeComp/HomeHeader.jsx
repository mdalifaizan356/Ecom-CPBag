import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";

const HomeHeader = () => {

  return ( 
    <header
      className="border-b border-base-300 fixed w-full top-0 z-50 backdrop-blur-lg bg-white">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">

          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-end gap-0.5 hover:opacity-80 transition-all">
              <div className="size-16 rounded-lg bg-primary/10 flex items-center justify-center avatar">
                <img src="logo.jpeg" alt="Product"/>
              </div>
              <h1 className="text-lg font-bold" style={{color:"red", fontSize:"20px"}}>Bag Agency</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/login" className={`btn btn-sm gap-2 transition-colors`}><LogIn className="w-4 h-4" /><span className="hidden sm:inline">Login</span></Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default HomeHeader;