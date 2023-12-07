import ProjectsCard from "./ProjectsCard";
import ArmRobot from "/assets/armrobot.jpg";
import PersonalWebsite from "/assets/website.png";

const data = [
  {
    id: 1,
    title: "Arm Robot",
    img: ArmRobot,
    desc: "I have participated in the Technoskill event organized by the Electrical Engineering Student Association (IME). During the event, me and my team of 4 people acquired knowledge about the basics of robotics and received a starter kit to build a robotic arm. We then assembled it based on the knowledge we acquired.",
  },
  {
    id: 2,
    title: "Personal Website",
    img: PersonalWebsite,
    desc: "This website is part of the Exercise FTUI internship program. In this internship program, we were divided into small groups of four with one mentor. During the 5 weeks program, we learned the fundamentals of React.js and Tailwind, as well as how to implement them to create our own personal website.",
  },
];

const Projects = () => {
  return (
    <div className="my-20">
      <h1 className="text-center font-bold text-4xl py-5">My Projects</h1>
      <div className="flex flex-col md:flex-row place-content-center">
        {data.map((data) => (
          <ProjectsCard
            key={data.id}
            img={data.img}
            title={data.title}
            desc={data.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
