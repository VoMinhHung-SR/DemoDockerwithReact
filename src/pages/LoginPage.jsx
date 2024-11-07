import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="mx-auto py-14">
      <div className="max-w-sm mx-auto mb-10">
        <Link to="/">
          <p className="flex items-center mb-4 sm:mb-0 justify-center">
            <img
              src="./logo.png "
              className="h-8 mr-3 "
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              HTheme
            </span>
          </p>
        </Link>
      </div>
      <div className='flex py-6 container m-auto'>
        <div className='w-[50%]'>
          <p className='w-[80%] m-auto'>
           <img src="./account-page.svg" alt="banner-login"/>
          </p>
        </div>
        <div className="w-[50%] max-w-md mx-auto bg-white shadow-lg rounded-lg ">
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-3xl font-bold  text-gray-900">
              Log Into Your Account
            </h3>
            <form className="space-y-6" action="#">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div className="flex justify-end">
                <Link to="/forgot-password">
                  <p className="text-sm text-blue-700 hover:underline dark:text-blue-500">
                    Forgot Password?
                  </p>
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login to your account
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300 flex gap-1">
                <div>Not registered?</div>
                <Link to="/register">
                  <p className="text-blue-700 hover:underline dark:text-blue-500">
                    Create account
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
