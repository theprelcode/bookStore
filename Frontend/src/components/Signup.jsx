import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate(); // Hook for navigation

    const onSubmit = async (data) => {
        try {
            const userInfo = {
                fullname: data.fullname,
                email: data.email,
                password: data.password
            }
            const res = await axios.post("http://localhost:4001/user/signup", userInfo);
            toast.success('Signup Successfully');
            localStorage.setItem("Users", JSON.stringify(res.data));
            navigate('/');
            setTimeout(() => {
                window.location.reload();
            }, 500);
        } catch (err) {
            if (err.response) {
                toast.error("Error: " + err.response.data.message);
            } else {
                toast.error("An unexpected error occurred");
            }
        }
    }

    return (
        <>
            <div className='flex h-screen items-center justify-center dark:text-black dark:border-none'>
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>{" "}
                            <h3 className="font-bold text-lg">SignUp</h3>
                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input type="text" placeholder='Enter your fullname' className='w-80 px-3 border rounded-md outline-none' {...register("fullname", { required: true })} />
                                <br />
                                {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input type="email" placeholder='Enter your email' className='w-80 px-3 border rounded-md outline-none' {...register("email", { required: true })} />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Password</span>
                                <br />
                                <input type="password" placeholder='Enter your password' className='w-80 px-3 border rounded-md outline-none' {...register("password", { required: true })} />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='flex justify-around mt-4'>
                                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>SignUp</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
