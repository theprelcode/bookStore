import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Log the form data to the console
    console.log(data);
    // Show a success message using alert
    alert('Message successfully submitted!');
    window.location.href = '/';
  };

  return (
    <div>
      <div className='flex h-screen items-center justify-center'>
        <div className='flex w-[600px] h-[700px] shadow-lg items-center justify-center text-[25px]' >
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <h2 className="font-bold text-center">Contact Us</h2>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-[500px] px-3 py-4 border rounded-md outline-none"
                {...register("name", { required: true })}
                autoComplete="name"
              />
              <br />
              {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-[500px] px-3 py-4 border rounded-md outline-none"
                {...register("email", { required: true })}
                autoComplete="email"
              />
              <br />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className="mt-4 space-y-2">
              <span>Message</span>
              <br />
              <textarea
                name=""
                className="w-[500px] px-3 py-4 border rounded-md outline-none" placeholder='Enter your message here'
                {...register("message", { required: true })}
              />
              <br />
              {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className="flex justify-around mt-4">
              <button
                type="submit" // Make sure to specify type="submit" for the login button
                className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
