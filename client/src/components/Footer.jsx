const Footer = () => {
  return (
    <div className="mx-5 md:mx-0 mt-20">
      <h2 className="text-2xl md:text-5xl text-black font-black text-center">
        P. SHAKIB
      </h2>
      <div className="border border-black mt-5"></div>
      <div className="flex justify-center md:justify-between items-center my-10">
        <p className="text-center font-medium hidden md:block">
          © 2025 Programmer Shakib. All rights Reserved.
        </p>
        <div className="flex items-center justify-center gap-2">
          <a
            href="https://www.facebook.com/programmershakibbangladesh"
            target="_blank"
          >
            <i className="fa-brands fa-facebook text-3xl"></i>
          </a>
          <a href="https://www.instagram.com/programmershakib/" target="_blank">
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
      <p className="text-center font-medium block md:hidden mb-10">
        © 2024 LMS. All rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
