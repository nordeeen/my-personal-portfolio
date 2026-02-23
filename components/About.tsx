import Image from "next/image";
import { allDataWords } from "@/lib/const";

const About: React.FC = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 p-4">
            <p className="breakpoint text-4xl font-bold inline border-b-4 border-pink-600">
              {allDataWords.titlesOne}
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="flex justify-center align-center"
          >
            <Image
              src="/assets/foto-profile-portofolio.jpg"
              alt="myphoto"
              width={300}
              height={400}
              style={{
                maxWidth: "60%",
                objectFit: "cover",
                borderRadius: "4px",
                height: "auto",
              }}
            />
          </div>
          <div>
            <p data-aos="fade-up" className="text-left">
              {allDataWords.aboutMe}
            </p>
            <div className="py-4 px-1">
              <Image
                className="w-[100%] h-[100%] object-cover"
                src="/assets/coders-life.jpg"
                alt="Coders-Life"
                width={500}
                height={300}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
