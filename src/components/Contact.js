import React from "react";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <div className="flex-1">
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get In Touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's Work <br /> Together!
              </h2>
            </div>
          </div>
          {/* form */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              type="hidden"
              name="access_key"
              value="9806e5f6-b7d3-43e7-b252-a63932ec0b2a"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              name="name" // Added name attribute
              placeholder="Your name"
              required // Added required attribute for validation
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email" // Changed type to email for better validation
              name="email" // Added name attribute
              placeholder="Your email"
              required // Added required attribute for validation
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              name="message" // Added name attribute
              placeholder="Your message"
              required // Added required attribute for validation
            ></textarea>
            <button
              type="submit" // Added type attribute
              className="btn btn-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
