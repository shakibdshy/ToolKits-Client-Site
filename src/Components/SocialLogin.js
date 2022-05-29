import React, { useEffect } from "react";
import {
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import auth from "../utils/firebase.init";
import useToken from "../Hooks/useToken";

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    const [token] = useToken(user);
    
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user ) {
            navigate(from, { replace: true });
        }
    }, [user]);

    if (loading) {
        return "Loading...";
    }

    if (error) {
        toast.error(`${error?.message}`);
    }

    return (
        <>
            <button
                onClick={() => signInWithGoogle()}
                aria-label='Continue with google'
                type='button'
                className='focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10'>
                <FcGoogle />
                <p className='text-base font-medium ml-4 text-gray-700'>
                    Continue with Google
                </p>
            </button>
            <div className='w-full flex items-center justify-between py-5'>
                <hr className='w-full bg-gray-400' />
                <p className='text-base font-medium leading-4 px-2.5 text-gray-400'>
                    OR
                </p>
                <hr className='w-full bg-gray-400  ' />
            </div>
        </>
    );
};

export default SocialLogin;