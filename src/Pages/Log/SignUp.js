import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from "../../Components/SocialLogin";
import auth from "../../utils/firebase.init";
import InputField from "../../Components/InputField";
import { css } from "@emotion/react";
import { HashLoader } from "react-spinners";
import useToken from "../../Hooks/useToken";

const SignUp = () => {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/signin");
  };

  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);


  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [token] = useToken(user);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate])


  const override = css`
  position: absolute;
  inset: 0;
  margin: auto;
  `;

  if (loading || updating) {
    return (
      <HashLoader color={"#7432ff"} loading={loading} css={override} size={80} />
    );
  }

  if (user) {
    console.log("user", user);

  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.fname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    if (email && password && name) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      navigate("/home");

      toast.success("Please verifying your email again");

    } else {
      toast.error("Please enter valid details");
    }

  };

  return (
    <form onSubmit={handleRegister}>
      <div className='h-full bg-gradient-to-tr from-cyan-500 to-blue-500 w-full py-16 pt-14 px-4'>
        <div className='flex flex-col items-center justify-center'>
          <div className='bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full max-w-[435px] p-10 mt-16'>
            <p
              aria-label='Login to your account'
              className='text-2xl font-extrabold leading-6 text-gray-800'>
              SignUp to your account
            </p>
            <p className='text-sm mt-4 font-medium leading-none text-gray-500'>
              Have an account?{" "}
              <Link
                to='/signin'
                onClick={navigateLogin}
                aria-label='Sign up here'
                className='text-sm font-medium leading-none underline text-gray-800 cursor-pointer'>
                {" "}
                Sign In here
              </Link>
            </p>
            <SocialLogin />
            <div>
              <InputField label='First Name' type='text' name='fname' placeholder='Enter your first name' />
            </div>
            <div>
              <InputField label='Last Name' type='text' name='lname' placeholder='Enter your last name' />
            </div>
            <div>
              <InputField label='Email' type='email' name='email' placeholder='Enter your Email' />
            </div>
            <div>
              <InputField label='Password' type='password' name='password' placeholder='Your Password' />
            </div>
            <div className='mt-8'>
              <button
                type='submit'
                aria-label='create my account'
                className='focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full'>
                Create my account
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
