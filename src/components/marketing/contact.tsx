import React from "react";
import { Button } from "../ui/button";

const ContactForm = () => {
  return (
    <section id="contact">
      <div className="relative mt-0 py-10">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-black mb-4  text-center">
            Contact us.
          </h2>
          <p className="text-lg text-gray-800 mb-12 text-center">
            Integrates effortlessly with all major content management systems
            with no technical setup required.
          </p>

          <div className=" backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-black/10 shadow-[0_0_50px_-12px_rgba(242,121,22,0.1)]">
            <form className="grid gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <label className="text-sm text-gray-800">First name</label>
                  <input
                    type="text"
                    placeholder="Jane"
                    className="bg-black/5 border border-black/10 rounded-lg px-4 py-2 text-black placeholder:text-gray-500
    focus:outline-none focus:ring-2 focus:ring-orange-200"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm text-gray-800">Last name</label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="bg-black/5 border border-black/10 rounded-lg px-4 py-2 text-black placeholder:text-gray-500
    focus:outline-none focus:ring-2 focus:ring-orange-200"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <label className="text-sm text-gray-800">Email</label>
                  <input
                    type="email"
                    placeholder="jane@framer.com"
                    className="bg-black/5 border border-black/10 rounded-lg px-4 py-2 text-black placeholder:text-gray-500
    focus:outline-none focus:ring-2 focus:ring-orange-200"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm text-gray-800">Company name</label>
                  <input
                    type="text"
                    placeholder="Framer"
                    className="bg-black/5 border border-black/10 rounded-lg px-4 py-2 text-black placeholder:text-gray-500
    focus:outline-none focus:ring-2 focus:ring-orange-200"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <label className="text-sm text-gray-800">
                  How can we help?
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your problem"
                  className="bg-black/5 border border-black/10 rounded-lg px-4 py-2 text-black placeholder:text-gray-500
  focus:outline-none focus:ring-2 focus:ring-orange-200 resize-none"
                />
              </div>

              <Button
                variant={"orangemain"}
                className=" w-full sm:w-auto sm:justify-self-center px-8"
              >
                Send message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
