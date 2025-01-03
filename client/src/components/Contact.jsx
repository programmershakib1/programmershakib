const Contact = () => {
  return (
    <div className="mt-20">
      <h2 className="text-center text-4xl font-bold">Contact Me</h2>
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <div>
          <form action="">
            <div className="flex gap-5">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="w-full border border-black rounded-full py-2 px-4"
              />
              <input
                type="text"
                name="phone"
                placeholder="Enter Your Phone"
                className="w-full border border-black rounded-full py-2 px-4"
              />
            </div>
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="w-full border border-black rounded-full mt-5 py-2 px-4"
            />
            <textarea
              name="message"
              placeholder="Type Your Massage"
              className="w-full h-40 border border-black mt-5 py-4 px-4"
            ></textarea>
            <button className="bg-black text-white py-2 px-6 font-bold">Send Message</button>
          </form>
        </div>
        <div>
          <h2>Location : Natore, Rajshahi, Bangladesh</h2>
          <h4>Email : programmershakibinfo@gmail.com</h4>
          <h4>Phone : +880 1516-549530</h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
