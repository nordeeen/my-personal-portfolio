import { datasListExp, allDataWords } from "@/lib/const";

const Exprience: React.FC = () => {
  return (
    <>
      <section className="w-full h-full bg-[#0a192f] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] mx-auto bg-[#0a192f] p-4 flex flex-col justify-center w-full h-full">
            <div className="mb-12">
              <p className="breakpoint text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
                {allDataWords.titleFour}
              </p>
            </div>
            <div>
              {datasListExp.map((datas) => {
                return (
                  <div
                    key={datas.id}
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500"
                    className="max-w-2xl px-8 py-4 mx-auto bg-[#0a192f] shadow-[#040c16] border-[#0a192f]rounded-lg shadow-md dark:bg-[#0a192f] mb-6"
                    style={{ cursor: "auto" }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-light text-gray-300">
                        {datas.date}
                      </span>
                      <div className="px-3 py-1 text-sm font-bold text-gray-100  bg-pink-600 rounded">
                        {datas.subjects}
                      </div>
                    </div>
                    <div className="mt-2">
                      <h1 className="text-2xl font-bold text-gray-300 underline decoration-pink-600 text-left">
                        {datas.title}
                      </h1>
                      <p className="mt-2 text-gray-300 text-left">
                        {datas.description}
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

export default Exprience;
