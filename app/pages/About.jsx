import Image from "next/image";

const About = () => {
  const versiMoblie = true;
  return (
    <div
      id="about"
      className="flex flex-col-reverse md:flex-row relative text-white md:gap-20 gap-10 mt-10"
    >
      {versiMoblie && (
        <div className="flex flex-row gap-10 items-center md:hidden mt-8 text-white ">
          <div className="button_gradient py-4 w-[140px] flex items-center justify-center rounded-2xl active:scale-95 ease-out duration-150 font-medium ">
            <button>HERE ME</button>
          </div>
          <div className=" button_gradient  w-[140px] p-1 h-[55px] flex items-center justify-center rounded-2xl active:scale-95 ease-out duration-150 font-medium">
            <button className="w-full h-full rounded-xl bg-[#0F152E]  ">
              RESUME
            </button>
          </div>
        </div>
      )}
      <div className="w-[50%] h-[400px] relative">
        <Image
          fill
          className="w-full   absolute z-20 rounded-md"
          src="/assets/foto/gambar.jpeg"
          alt="profile/web"
        />
        <div className=" bg-[#0F152E] absolute  w-[277px] h-[370px] md:w-[316px] md:h-[370px]  left-12 top-12 md:left-14 md:top-14 z-10 rounded-md" />
        <div className="bg-[#4b9bff] absolute w-[307px] h-[400px] md:w-[346px]  left-8 top-8 md:left-10 md:top-10 z-0 rounded-md " />
      </div>
      <div className="w-full relative mt-5 flex flex-col justify-center md:ml-10 gap-10">
        <h1 className="text-[32px] font-semibold shadow-sm shadow-black p-2 rounded-2xl border-b w-[32%] md:w-[29%]">
          ABOUT ME
        </h1>
        <p className="text-justify text-slate-300">
          I am a self-taught programmer who is passionate and loves the world of
          technology. Through self-exploration and diligent research, I have
          developed full skills as a full-stack developer. I am committed to
          continuous learning and keeping up with the latest technological
          advancements. Although I don\'t have any official projects yet, I have
          created a personal website based on tutorials I found on YouTube. I am
          always enthusiastic about creating creative solutions and providing
          optimal user experiences.
        </p>
        <div className="md:flex flex-row gap-10 items-center hidden">
          <div className="button_gradient text-[15px] py-4 w-[140px] flex items-center justify-center rounded-2xl active:scale-95 ease-in duration-150 font-semibold ">
            <button>HERE ME</button>
          </div>
          <div className=" button_gradient  text-[15px] w-[140px] p-1 h-[55px] flex items-center justify-center rounded-2xl active:scale-95 ease-out duration-150 font-semibold">
            <button className="w-full h-full rounded-xl bg-[#0F152E]  ">
              RESUME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
