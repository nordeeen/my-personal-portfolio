interface ProjectProps {
  title: string;
  img: string;
  portofolio: string;
  github: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  img,
  portofolio,
  github,
}) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${img})`,
        }}
        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
      >
        {/* Hover Effects */}
        <div className="opacity-0 group-hover:opacity-100">
          <span className="text-2xl font-bold text-white tracking-wider">
            {title}
          </span>
          <div className="pt-8 text-center">
            <a
              href={portofolio}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg mr-2">
                Demo
              </button>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
