import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, User, KeySquare } from "lucide-react";
import {toast} from "react-hot-toast";
import AuthImagePattern from './../../Components/HomeComp/AuthImagePattern';
import { axiosInstance } from './../../lib/axios';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ Email: "", Password: "" });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { Email, Password } = formData;
    setIsFormValid(Email.trim() !== "" && Password.trim() !== "");
  }, [formData]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(`/authroutes/login`, formData);
      if (response.status === 200) {
        localStorage.setItem("role", response.data.userRole);
        toast.success("Login Successful!");
         if (response.data.userRole === "Admin") {
          navigate("/admindashboard");
        } else if (response.data.userRole === "User") {
          navigate("/userdashboard");
        }
        else {
          toast.error("Invalid User Role!");
        }
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("SignUp Failed! Please try again.");
    }
  };
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* LOGO */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <KeySquare className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Login Now.!</h1>
              <div className="text-center">
            <p className="text-base-content/60">If Not Register?{" "}<Link to="/signup" className="link link-primary">Register Now!</Link></p>
          </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="form-control">
  <label className="label">
    <span className="label-text font-medium">Email</span>
  </label>
  <div className="flex gap-2">
    <div className="relative flex-1">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Mail className="size-5 text-base-content/40" />
      </div>
      <input 
        type="email" 
        className="input input-bordered w-full pl-10" 
        placeholder="you@example.com" 
        name="Email" 
        value={formData.Email} 
        onChange={handleChange} 
        required 
      />
    </div>
  </div>
</div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Password</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="size-5 text-base-content/40" />
            </div>
            <input type={showPassword ? "text" : "password"} className={`input input-bordered w-full pl-10`} placeholder="••••••••" name="Password" value={formData.Password} onChange={handleChange} required />
            <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowPassword(!showPassword)} >
              {showPassword ? (
                <EyeOff className="size-5 text-base-content/40" />
              ) : (
                <Eye className="size-5 text-base-content/40" />
              )}
            </button>
          </div>
        </div>

        
        <div className="flex justify-around form-control mt-6">
        <button type="submit" className="btn btn-primary w-full" disabled={!isFormValid}>
          {isFormValid ? (
            "LogIn"
          ) : (
            "Fill Form"
          )}
        </button>
    </div>
      </form>
      <div className="text-center">
        <p className="text-base-content/60">Forget Password?{" "}<Link to="/resetpassword" className="link link-primary">Reset Password</Link></p>
      </div>

    </div>
  </div>

  <AuthImagePattern
    title="Become a Member Of  CP Bag Agency"
    // subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
  />
</div>
  );
};
export default Login;