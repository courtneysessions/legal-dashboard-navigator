import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const LoginPage = () => {
  const navigate = useNavigate();

  // const handleGithubLogin = async () => {
  //   try {
  //     const { error } = await supabase.auth.signInWithOAuth({
  //       provider: 'github',
  //       options: {
  //         redirectTo: window.location.origin,
  //       },
  //     });
      
  //     if (error) {
  //       if (error.message.includes('provider is not enabled')) {
  //         toast.error("GitHub login is not enabled. Please contact the administrator.");
  //       } else {
  //         toast.error(error.message || "Failed to sign in with GitHub. Please try again.");
  //       }
  //       console.error('GitHub OAuth error:', error);
  //     } else {
  //       navigate("/courtney-sessions"); // Redirect to the dashboard
  //     }
  //   } catch (error) {
  //     console.error('GitHub OAuth error:', error);
  //     toast.error("Failed to sign in with GitHub. Please try again.");
  //   }
  // };

  // const handleGoogleLogin = async () => {
  //   try {
  //     const { error } = await supabase.auth.signInWithOAuth({
  //       provider: 'google',
  //       options: {
  //         redirectTo: window.location.origin,
  //       },
  //     });
      
  //     if (error) {
  //       if (error.message.includes('provider is not enabled')) {
  //         toast.error("Google login is not enabled. Please contact the administrator.");
  //       } else {
  //         toast.error(error.message || "Failed to sign in with Google. Please try again.");
  //       }
  //       console.error('Google OAuth error:', error);
  //     } else {
  //       navigate("/courtney-sessions"); // Redirect to the dashboard
  //     }
  //   } catch (error) {
  //     console.error('Google OAuth error:', error);
  //     toast.error("Failed to sign in with Google. Please try again.");
  //   }
  // };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="w-full flex flex-col items-center space-y-8 p-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-primary">
            Courtney Sessions
          </h2>
          <p className="mt-2 text-sm text-gray-600">
          Court Filing Management
          </p>
        </div>
          <a href="/courtney-sessions" className=" text-sm mt-10 mx-auto text-center rounded-lg bg-blue-800 p-2 text-white hover:bg-blue-900">
            Dashboard
          </a>
        {/* <div className="mt-8 space-y-4">
          <Button
            onClick={handleGithubLogin}
            onClick={() => navigate("/signup")}
            className="w-full flex items-center justify-center gap-2"
            variant="outline"
          >
            <Github className="h-5 w-5" />
            Sign up
          </Button>
          <Button
            onClick={handleGoogleLogin}
            onClick={() => navigate("/login")}
            className="w-full flex items-center justify-center gap-2"
            variant="outline"
          >
            <Mail className="h-5 w-5" />
            Login
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default LoginPage;