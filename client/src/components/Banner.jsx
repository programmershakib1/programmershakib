import banner from "../assets/lottie/banner.json";
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <div className="flex justify-center lg:mx-40">
      <div className="w-1/2 mt-32">
        <h4 className="uppercase text-2xl text-slate-700 font-semibold">
          front-end web developer
        </h4>
        <h2 className="font-black lg:text-8xl bg-gradient-to-r from-slate-500 via-white to-slate-500 inline-block text-transparent bg-clip-text mt-5">
          P. SHAKIB
        </h2>
        <p className="mt-2">
          I am a Front End Developer, crafting seamless and interactive web
          experiences with a passion for clean code and responsive design. Let’s
          collaborate to build something amazing!
        </p>
        <div className="flex items-center justify-center gap-10 mt-10">
          <div>
            <button className="flex flex-col items-center bg-black text-white px-10 py-3 rounded-full">
              <i className="fa-solid fa-download text-2xl"></i>
              <span className="text-xl font-bold">DOWNLOAD CV</span>
            </button>
          </div>
          <div>
            <h4 className="text-lg font-semibold">FIND ME ON</h4>
            <div className="flex items-center gap-2 mt-2">
              <a
                href="https://www.facebook.com/programmershakibbangladesh"
                target="_blank"
              >
                <i className="fa-brands fa-facebook text-3xl"></i>
              </a>
              <a
                href="https://www.instagram.com/programmershakib/"
                target="_blank"
              >
                <i className="fa-brands fa-instagram text-3xl"></i>
              </a>
              <a href="https://x.com/programershakib" target="_blank">
                <i className="fa-brands fa-twitter text-3xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/programmershakib/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in text-3xl"></i>
              </a>
              <a href="https://github.com/programmershakib1" target="_blank">
                <i className="fa-brands fa-github text-3xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <Lottie animationData={banner}></Lottie>
      </div>
    </div>
  );
};

export default Banner;
