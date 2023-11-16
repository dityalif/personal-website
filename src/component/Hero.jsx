import React from 'react'

const Hero = () => {
  return (
    <div className="flex my-16 mx-auto bg-[#E7E7DE] place-content-center">
        <div className="p-5 text-black font-medium text-xl m-auto mr-10">
          <h2 className="text-justify text-2xl text-black font-medium ">Hi! My Name is</h2>
          <h1 className="text-justify text-4xl text-black font-bold mb-5" >Muhammad Raditya Alif Nugroho</h1>
          <p className="max-w-prose text-justify">
              Computer engineering student with basic knowledge in C, Python, and fundamentals of web development.
              Proficient problem solving and leadership skills. Have strong desire to learn new things.
          </p>
        </div>
        <img src="src/assets/profile2.jpg" className="w-96 h-96 rounded-3xl mx-auto ml-10 shadow-2xl transition duration-200 hover:scale-105"/>
    </div>
  )
}

export default Hero