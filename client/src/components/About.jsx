import about from "../assets/lottie/about.json";
import banner from "../assets/lottie/banner.json";
import Lottie from "lottie-react";

const About = () => {
  return (
    <div className="mt-44 lg:mt-20 lg:mx-40">
      <div className="flex justify-center items-center">
        <div className="w-1/2">
          <Lottie animationData={banner}></Lottie>
        </div>
        <div className="w-1/2 relative">
          <div className="flex items-center absolute -top-32 -left-28">
            <div>
              <Lottie animationData={about} className="h-32"></Lottie>
            </div>
            <div>
              <h2 className="text-5xl font-black">ME</h2>
              <i className="fa-solid fa-arrow-right rotate-45 text-5xl"></i>
            </div>
          </div>
          <p className="">
            I am a passionate Front End Developer with a deep love for crafting
            clean, efficient, and user-friendly web experiences. My journey into
            programming started with a fascination for problem-solving and
            design, which naturally led me to web development. Over the years,
            I’ve honed my skills in HTML, CSS, JavaScript, and modern
            frameworks, and I continue to explore new technologies to stay ahead
            in the ever-evolving world of web development. Outside of coding, I
            have a passion for [insert hobby or interest, e.g., painting,
            photography, sports, or traveling], which helps me maintain a
            balanced lifestyle and fuels my creativity. I believe that personal
            growth and professional development go hand in hand, and I’m always
            looking for new opportunities to learn and grow.
          </p>
          <div>
            <h4 className="text-3xl font-bold">
              20 <span>+</span>
            </h4>
            <p className="font-semibold">Project Complete</p>
          </div>
          <button className="btn mt-5">HiRE ME</button>
        </div>
      </div>
    </div>
  );
};

export default About;
