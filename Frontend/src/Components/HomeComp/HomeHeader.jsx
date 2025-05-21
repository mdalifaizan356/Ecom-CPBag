import { Link } from "react-router-dom";
import { LogOut, ShoppingCart, Briefcase, User, LogIn, Heart } from "lucide-react";

const HomeHeader = () => {

  return (
    <header
      className="border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-white-500/80">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">C.P. <span style={{color:"red", fontSize:"12px"}}>(Bag Agency)</span></h1>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/login" className={`btn btn-sm gap-2 transition-colors`}><Heart className="size-5" /><span className="hidden sm:inline">Wishlist</span></Link>
            <Link to="/login" className={`btn btn-sm gap-2 transition-colors`}><ShoppingCart className="size-5" /><span className="hidden sm:inline">Cart</span></Link>
            <Link to="/login" className={`btn btn-sm gap-2 transition-colors`}><LogIn className="w-4 h-4" /><span className="hidden sm:inline">Login</span></Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default HomeHeader;