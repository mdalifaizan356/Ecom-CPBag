import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, User, UserRound } from "lucide-react";
import {toast} from "react-hot-toast";
import AuthImagePattern from './../../Components/HomeComp/AuthImagePattern';
import { axiosInstance } from './../../lib/axios';

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ Name: "", Email: "", PhNo: "", Password: "", OTP: "" });
  const [otpSent, setOtpSent] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Form validation function
  useEffect(() => {
    const validateForm = () => {
      const { Name, Email, Password, OTP } = formData;
      const isValid =
        Name.trim() !== "" &&
        Email.trim() !== "" &&
        Password.trim() !== "" &&
        (otpSent || OTP.trim() !== "");
      setIsFormValid(isValid);
      
    };

    validateForm();
  }, [formData, otpSent]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOtpRequest = async () => {
    if (!formData.Email) {
      toast.error("Please enter a valid Email.");
      return;
    }

    try { 
      const response = await axiosInstance.post(`/authroutes/sendotp`, { Email: formData.Email });
      if (response.status === 200) {
        toast.success("OTP sent on your Email!");
        setOtpSent(true);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("Failed to send OTP. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post(`/authroutes/signup/`, formData);

      if (response.status === 200) {
        toast.success("SignUp Successful!");
        navigate("/login");
        const { Email } = response.data;
        localStorage.setItem("Email", Email);
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
                <UserRound className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Create Account</h1>
              <div className="text-center">
            <p className="text-base-content/60">Already have an account?{" "}<Link to="/login" className="link link-primary">LogIn</Link></p>
          </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="size-5 text-base-content/40" />
                </div>
                <input type="text" className={`input input-bordered w-full pl-10`} placeholder="John Doe" name="Name" value={formData.Name} onChange={handleChange} required />
              </div>
            </div>

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
    <button 
      type="button" 
      className="btn btn-primary"
      onClick={handleOtpRequest}
    >
      Verify
    </button>
  </div>
</div>


            {otpSent && (
              <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">OTP</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="size-5 text-base-content/40" />
                </div>
                <input type="number" className={`input input-bordered w-full pl-10`} placeholder="Enter OTP" name="OTP" value={formData.OTP} onChange={handleChange} required />
              </div>
            </div>
        )}

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
            <button type="submit" className="btn btn-primary w-full" >Create Account</button>
            {/* <button type="submit" className="btn btn-primary w-full" disabled={!isFormValid}>
              {isFormValid ? (
                "Create Account"
              ) : (
                "Fill Form"
              )}
            </button> */}
        </div>
          </form>

        </div>
      </div>

      <AuthImagePattern
        title="Become a Member Of  CP Bag Agency"
        // subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />
    </div>
  );
};
export default SignUp;