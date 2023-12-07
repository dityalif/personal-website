const IntroCard = ({ title, text }) => {
  return (
    <div className="mx-auto my-8 w-5/6 md:w-1/4 md:m-8 text-white p-6 rounded-3xl shadow-xl bg-gradient-to-r from-[#008891] to-[#00587A] transition duration-200 hover:scale-105">
      <h2 className="text-center text-2xl font-semibold pb-3">{title}</h2>
      {Array.isArray(text) ? (
        <ul className="text-xl">
          {text.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};

export default IntroCard;
