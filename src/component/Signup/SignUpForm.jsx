import { Button, Checkbox, Label } from "flowbite-react";
import { useContext, useState } from "react";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../utils/auth";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const SignUpForm = () => {
    const {setLoggedInUser} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = signUp(formData);
        if(user?.email){
            setLoggedInUser(user)
            toast.success(`Welcome aboard!`)
            navigate('/', {replace: true})
        }
    };
    return (
        <div>
            <div className="flex flex-col gap-1 items-center mb-6">
                <h2 className="text-2xl font-medium">Welcome To</h2>
                <span className="self-center whitespace-nowrap text-[40px] font-bold text-black leading-none">Furni<span className="text-[#1E99F5]">Flex</span></span>
                <p className="text-[#707070]">Signup for purchase your desire products</p>
            </div>
            <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-1">
                <div className="flex w-full gap-2">
                    <div className="flex-1">
                        <div className="mb-2 block border group focus-within:ring-2 focus-within:ring-blue-500 rounded-[8px] overflow-hidden bg-white">
                            <Label htmlFor="firstName" value="First Name (optional)" className="px-3" />
                            <input
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                                type="text"
                                placeholder="john"
                                className="border-none block py-0 pb-1 focus:ring-0 w-full"
                            />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="mb-2 block border group focus-within:ring-2 focus-within:ring-blue-500 rounded-[8px] overflow-hidden bg-white">
                            <Label htmlFor="lastName" value="Last Name (optional)" className="px-3" />
                            <input
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                                type="text"
                                placeholder="doe"
                                className="border-none block py-0 pb-1 focus:ring-0 w-full"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mb-2 block border group focus-within:ring-2 focus-within:ring-blue-500 rounded-[8px] overflow-hidden bg-white">
                        <Label htmlFor="email1" value="Your email" className="px-3" />
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="name@flowbite.com"
                            className="border-none block py-0 pb-1 focus:ring-0 w-full"
                        />
                    </div>
                </div>
                <div className="flex items-center group focus-within:ring-2 focus-within:ring-blue-500 rounded-[8px] overflow-hidden bg-white border">
                    <div className="w-full">
                        <Label htmlFor="password1" value="Your password" className="px-3" />
                        <input
                            name="password"
                            value={formData.password}
                            onChange={handleChange} 
                            type={showPassword ? "text" : "password"}
                            placeholder="******"
                            className="border-none block py-0 pb-1 focus:ring-0 w-full"
                        />
                    </div>
                    <div className="p-2 rounded cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </div>
                </div>
                <p className="text-[#1E99F5] text-right cursor-pointer">Forgot Password</p>
                <div className="flex items-center gap-2 mb-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">I agree to the <span className="underline cursor-pointer">Terms & Policy</span></Label>
                </div>
                <Button color="dark" type="submit" className="mb-2">Sign up</Button>
            </form>
            <div className="flex w-full gap-2 items-center mb-2">
                <div className="flex-1 h-[2px] bg-gray-200"></div>
                <p className="text-xs text-gray-400">Or</p>
                <div className="flex-1 h-[2px] bg-gray-200"></div>
            </div>
            <div className="flex w-full gap-2 mb-6">
                <Button color="light" type="button" className="flex-1">
                    <FcGoogle size={21} className="mr-2" />
                    Sign in with Google
                </Button>
                <Button color="light" type="button" className="flex-1">
                    <FaApple size={20} className="mr-2" />
                    Sign in with Apple</Button>
            </div>
            <p className="text-sm font-semibold text-center mb-4">
                Have an account?  <Link to={'/login'} className="text-[#1E99F5] hover:underline">Sign In</Link>
            </p>
        </div>
    )
}

export default SignUpForm