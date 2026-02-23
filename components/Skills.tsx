import Image from "next/image";
import { datasListSkills, allDataWords } from "@/lib/const";

const Skills: React.FC = () => {
  return (
    <div id="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full mt-2">
          <div>
            <p className="breakpoint text-4xl font-bold inline border-b-4 border-pink-600">
              {allDataWords.titlesThird}
            </p>
            <p className="breakpoint py-4">
              {allDataWords.descTitleThird}
            </p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            {datasListSkills.map((item) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="500"
                key={item.id}
                className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
              >
                <Image
                  className="w-20 mx-auto"
                  src={item.logo}
                  alt={`${item.name} icon`}
                  width={80}
                  height={80}
                />
                <p className="my-4 uppercase">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
