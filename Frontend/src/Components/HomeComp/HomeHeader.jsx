import { Link } from "react-router-dom";
import { LogOut, ShoppingCart, Briefcase, User, LogIn } from "lucide-react";

const HomeHeader = () => {

  return (
    <header
      className="border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-orange-500/80">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">CP Bags</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
                {/* <button className="flex gap-2 items-center">
                  <ShoppingCart className="size-5" />
                  <span className="hidden sm:inline">Cart</span>
                </button> */}
                <Link
              to="/login"
              className={`
              btn btn-sm gap-2 transition-colors`}>
              <LogIn className="w-4 h-4" />
              <span className="hidden sm:inline">Login</span>
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
};
export default HomeHeader;