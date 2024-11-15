import GoogleLogo from "../../assets/images/google-icon-logo-svgrepo-com.svg";
import Githublogo from "../../assets/images/github.svg";

const SignInButtons = () => {
    const handleGoogleLogin = () => {
      window.location.href = 'http://localhost:3000/auth/google'; // Redirect to backend Google route
    };
  
    const handleGitHubLogin = () => {
      window.location.href = 'http://localhost:3000/auth/github'; // Redirect to backend GitHub route
    };
  return (
    <div className='flex justify-center items-center gap-5 mt-4'>
<button className='w-1/2 flex items-center justify-center bg-white border border-gray-300 text-black py-2 rounded-lg'>
<img
  src={GoogleLogo}
  alt='Google Logo'
  className='w-5 h-5 mr-2'
/>
Sign in with Google
</button>
<button className="w-1/2 flex items-center justify-center bg-black border-gray-300 text-white py-2 rounded-lg">
<img src={Githublogo} alt="Github Logo" className="w-5 h-5 mr-2" />
Sign in with Github
</button>

</div>
  );
};
export default SignInButtons;
