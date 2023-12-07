import Profile from "/assets/profile2.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse my-28 mx-auto bg-[#E7E7DE] place-content-center">
      <img
        src={Profile}
        className="w-96 h-96 rounded-3xl mx-auto mb-10 md:mb-0 md:ml-10 shadow-2xl transition duration-200 hover:scale-105"
      />
      <div className="text-black font-medium text-xl m-auto mx-4 md:mx-auto md:mr-10 py-5 px-10 md:p-5">
        <h2 className="text-center md:text-justify text-2xl text-black font-medium ">
          Hi! My Name is
        </h2>
        <h1 className="text-center md:text-justify text-4xl text-black font-bold mb-5 tracking-tight md:tracking-normal">
          Muhammad Raditya Alif Nugroho
        </h1>
        <p className="max-w-prose text-justify">
          Computer engineering student with basic knowledge in C, Python, and
          fundamentals of web development. Proficient problem solving and
          leadership skills. Have strong desire to learn new things.
        </p>
      </div>
    </div>
  );
};

export default Hero;
