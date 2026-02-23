import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="w-full h-[100px] bg-[#0a192f] flex justify-center align-center">
        <div className="flex flex-col">
          <div className="px-16">
            <Image
              src="/assets/mylogo.png"
              alt="logo"
              width={75}
              height={75}
              style={{ width: "75px", height: "auto" }}
            />
          </div>
          <h2 className="text-xs text-center text-gray-300 font-bold">
            Copyright &copy; Ahmad Nurdiansah
          </h2>
        </div>
      </footer>
    </>
  );
};

export default Footer;
