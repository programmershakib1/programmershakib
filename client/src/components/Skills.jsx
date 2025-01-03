import ProgressBar from "@ramonak/react-progress-bar";
import { FaHtml5 } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="mt-44 lg:mt-20">
        <h2 className="text-center text-5xl font-bold mb-10">My Skills</h2>
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-3xl font-bold">Frontend</h2>
          <div className="mt-5">
            <h4 className="flex items-center gap-2 mb-2">
              <FaHtml5 className="text-2xl"></FaHtml5>
              <span className="text-xl font-bold">HTML</span>
            </h4>
            <ProgressBar completed={100} className="w-full"></ProgressBar>
          </div>
          <div className="mt-5">
            <h4 className="flex items-center gap-2 mb-2">
              <FaHtml5 className="text-2xl"></FaHtml5>
              <span className="text-xl font-bold">CSS</span>
            </h4>
            <ProgressBar completed={100} className="w-full"></ProgressBar>
          </div>
          <div className="mt-5">
            <h4 className="flex items-center gap-2 mb-2">
              <FaHtml5 className="text-2xl"></FaHtml5>
              <span className="text-xl font-bold">JAVA SCRIPT</span>
            </h4>
            <ProgressBar completed={70} className="w-full"></ProgressBar>
          </div>
          <div className="mt-5">
            <h4 className="flex items-center gap-2 mb-2">
              <FaHtml5 className="text-2xl"></FaHtml5>
              <span className="text-xl font-bold">REACT</span>
            </h4>
            <ProgressBar completed={90} className="w-full"></ProgressBar>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold">Backend</h2>
          <div className="mt-5">
            <h4 className="flex items-center gap-2 mb-2">
              <FaHtml5 className="text-2xl"></FaHtml5>
              <span className="text-xl font-bold">NODE JS</span>
            </h4>
            <ProgressBar completed={60} className="w-full"></ProgressBar>
          </div>
          <div className="mt-5">
            <h4 className="flex items-center gap-2 mb-2">
              <FaHtml5 className="text-2xl"></FaHtml5>
              <span className="text-xl font-bold">EXPRESS JS</span>
            </h4>
            <ProgressBar completed={70} className="w-full"></ProgressBar>
          </div>
          <div className="mt-5">
            <h4 className="flex items-center gap-2 mb-2">
              <FaHtml5 className="text-2xl"></FaHtml5>
              <span className="text-xl font-bold">MONGODB</span>
            </h4>
            <ProgressBar completed={80} className="w-full"></ProgressBar>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold">Tools</h2>
          <div className="mt-5">
            <h4 className="flex items-center gap-2 mb-2">
              <FaHtml5 className="text-2xl"></FaHtml5>
              <span className="text-xl font-bold">GITHUB</span>
            </h4>
            <ProgressBar completed={90} className="w-full"></ProgressBar>
          </div>
          <div className="mt-5">
            <h4 className="flex items-center gap-2 mb-2">
              <FaHtml5 className="text-2xl"></FaHtml5>
              <span className="text-xl font-bold">FIGMA</span>
            </h4>
            <ProgressBar completed={70} className="w-full"></ProgressBar>
          </div>
          <div className="mt-5">
            <h4 className="flex items-center gap-2 mb-2">
              <FaHtml5 className="text-2xl"></FaHtml5>
              <span className="text-xl font-bold">DEV TOOL</span>
            </h4>
            <ProgressBar completed={60} className="w-full"></ProgressBar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
