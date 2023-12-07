const ProjectsCard = ({ title, img, desc }) => {
  return (
    <div className="mx-auto my-8 w-5/6 md:w-1/4 md:m-8 text-white p-6 rounded-3xl shadow-xl bg-gradient-to-r from-[#008891] to-[#0F3057] transition duration-200 hover:scale-105">
      <h2 className="text-center text-2xl font-semibold">{title}</h2>
      <img className="rounded-2xl my-4" src={img} />
      <div className="text-justify">{desc}</div>
    </div>
  );
};

export default ProjectsCard;
