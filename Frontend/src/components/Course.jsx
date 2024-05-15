import React, { useState,useEffect } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios, { Axios } from "axios"

function Course() {
    const[book,setBook]=useState([])
    useEffect(()=>{
        const getBook = async()=>{
            try {
                const res = await axios.get("http://localhost:4001/book")
                console.log(res.data)
                setBook(res.data)
            } catch (error) {
                console.log(error)
            }
        };getBook()
    },[])
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div className='mt-16 itmes-center justify-center text-center'>
                <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
                <p className='mt-12'>Welcome to our cozy corner of literature and adventure! 📚✨
                We're absolutely thrilled to have you join us on this literary journey. Here, amidst the pages of imagination and discovery, we invite you to explore worlds unknown, meet characters unforgettable, and embark on adventures that stir the soul. With every turn of the page, may you find inspiration, joy, and the magic of storytelling. Welcome to our book-loving community!</p>

            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                {
                    book.map((item)=>(
                        <Cards key={item.id} item={item} />
                    ))
                }
            </div>
            <div className='mt-16 itmes-center justify-center text-center'>
                <Link to="/">
                    <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default Course