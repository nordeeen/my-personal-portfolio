import { datasListProjects, allDataWords } from '@/lib/const';
import Project from './Project';

const Work: React.FC = () => {
  return (
    <div
      id="work"
      className="w-full bg-[#071525] text-gray-300 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-[3px] bg-pink-600 rounded-full flex-shrink-0" />
            <h2
              className="font-extrabold tracking-tight text-slate-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {allDataWords.titleFive}
            </h2>
          </div>
          <p className="text-base text-slate-500 leading-relaxed max-w-[560px] mt-4">
            {allDataWords.descTitleFive}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {datasListProjects.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={String(index * 80)}
            >
              <Project
                title={item.title}
                img={item.imgBg}
                portofolio={item.linkPort}
                github={item.linkGithub}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>
    </div>
  );
};

export default Work;
