import GoogleLogo from "../../assets/images/google-icon-logo-svgrepo-com.svg";
import AppleLogo from "../../assets/images/apple-logo-svgrepo-com.svg";

const SignInButtons = () => {
  return (
    <div className="flex justify-center items-center gap-5 mt-4">
      <button className="w-1/2 flex items-center justify-center bg-white border border-gray-300 text-black py-2 rounded-lg">
        <img src={GoogleLogo} alt="Google Logo" className="w-5 h-5 mr-2" />
        Sign in with Google
      </button>
      <button className="w-1/2 flex items-center justify-center bg-white border border-gray-300 text-black py-2 rounded-lg">
        <img src={AppleLogo} alt="Apple Logo" className="w-5 h-5 mr-2" />
        Sign in with Apple
      </button>
    </div>
  );
};

export default SignInButtons;
