import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-white flex justify-between items-center my-5 bg-zinc-950 px-8 py-2 rounded-full">
      <div>
        <h2 className="text-3xl font-black">PS</h2>
      </div>
      <div className="flex gap-10 font-semibold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Contact</NavLink>
      </div>
      <div>
        <button className="btn">Hire Me</button>
      </div>
    </div>
  );
};

export default Navbar;
