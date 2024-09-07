import { Button, Checkbox, Label } from "flowbite-react";
import { useContext, useState } from "react";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider";
import { login } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function LoginForm() {
    const {setLoggedInUser} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = login(formData);
        if(user?.email){
            setLoggedInUser(user)
            toast.success(`Welcome back!`)
            navigate('/', {replace: true})
        }
    };
    return (
        <div>
            <div className="h-[116px] flex flex-col gap-1 justify-center">
                <h2 className="text-3xl font-medium">Welcome Back!</h2>
                <p className="text-[#707070]">Enter your Credentials to access your account</p>
            </div>
            <form className="flex max-w-md flex-col gap-1" onSubmit={handleSubmit}>
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
                    <div className="p-2 rounded cursor-pointer" onClick={()=>setShowPassword(!showPassword)}>
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </div>
                </div>
                <p className="text-[#1E99F5] text-right cursor-pointer">Forgot Password</p>
                <div className="flex items-center gap-2 mb-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">I agree to the <span className="underline cursor-pointer">Terms & Policy</span></Label>
                </div>
                <Button color="dark" type="submit" className="mb-2">Sign in</Button>

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
        </div>
    );
}
