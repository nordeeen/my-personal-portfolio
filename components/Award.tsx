import Image from "next/image";
import { allDataWords, datasListAwards } from "@/lib/const";

const Award: React.FC = () => {
  return (
    <>
      <section className="w-full h-full bg-[#0a192f] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] mx-auto bg-[#0a192f] p-4 flex flex-col justify-center w-full h-full">
            <div className="mb-3">
              <p className="breakpoint text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
                {allDataWords.titlesSecond}
              </p>
            </div>
            <a
              className="flex text-xl text-blue-600 underline font-semibold italic"
              href={allDataWords.urlCertificate}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/link.png"
                alt="logo-link"
                width={18}
                height={18}
                style={{
                  width: "18px",
                  height: "18px",
                  objectFit: "cover",
                  marginRight: "11px",
                  marginTop: "5px",
                }}
              />
              Certificate
            </a>
            <div className="mx-auto my-auto">
              {datasListAwards.map((data) => {
                return (
                  <div
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    key={data.id}
                    className="flex flex-col items-center bg-[#0a192f] rounded-lg border md:flex-row md:max-w-xl shadow-[#040c16] mb-4 shadow-md border-[#0a192f]"
                  >
                    <Image
                      className="object-cover w-full h-100 rounded-t-lg md:h-auto md:w-60 md:rounded-none md:rounded-l-lg px-4 py-2"
                      src={data.photo}
                      alt="logo"
                      width={240}
                      height={100}
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h1 className="mb-2 text-2xl font-bold tracking-tight text-pink-600 dark:text-white">
                        {data.title}
                      </h1>
                      <p className="mb-3 font-bold text-gray-300 ">
                        {data.description}
                      </p>
                      <p className="mb-3 font-bold text-gray-300 ">
                        {data.skill}{" "}
                        <span className="text-pink-600">&raquo;</span>{" "}
                        {data.year}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Award;
