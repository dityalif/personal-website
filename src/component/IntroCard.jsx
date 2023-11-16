const IntroCard = ({title, text}) => {
  return (
    <div className="w-1/4 m-8 bg-[#008891] text-white p-6 rounded-3xl shadow-xl bg-gradient-to-r from-[#008891] to-[#00587A] transition duration-200 hover:scale-105">
        <h2 className="text-center text-2xl font-semibold pb-3">{title}</h2>
        <p className="text-justify">
            {text}
        </p>
    </div>
  )
}

export default IntroCard