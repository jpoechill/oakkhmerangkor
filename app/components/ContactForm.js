import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        console.log(result.text);
        setMessageSent(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        form.current.reset(); // Optional: Clear form after successful submission
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      {messageSent && <p className='w-full text-center p-4'>Message sent successfully!</p>}
      
      <form ref={form} onSubmit={sendEmail}>
              <div className="text-md font-bold text-left bg-[#FFF] border shadow-lg py-8 rounded-2xl">
                <div className="font-normal text-md overflow-hidden px-6 transition-all ease-in-out delay-0 duration-500">
                  <div className="flex flex-col md:flex-row gap-5 ">
                    <div className="w-full font-light text-sm">
                      Name<span className="text-[#C41C94]">*</span> <br />
                      <input type="text" name="from_name" className="border px-4 py-3 font-light rounded-full mt-2 w-full" placeholder="Jane Smith" />
                    </div>
                    <div className="w-full  font-light text-sm">
                      Email/Phone<span className="text-[#C41C94]">*</span> <br />
                      <input type="text" name="from_email" className="border px-5 py-3 font-light rounded-full mt-2 w-full" placeholder="email@gmail.com" /> <br /><br />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-5 mb-5">
                    <div className="w-full font-light text-sm">
                      What is your location?
                      <input type="text" name="location" className="border px-4 py-3 font-light rounded-full mt-2 w-full" placeholder="Oakland, CA" />
                    </div>
                    <div className="w-full font-light text-sm">
                      What are your interests?
                      <div className="border mt-2 rounded-full">
                        <select name="interest" id="" className="p-3 w-full rounded-full border-r-[15px] border-transparent font-normal px-3">
                          <option value="Volunteer" selected>Volunteer</option>
                          <option value="Join as Dancer">Join as a Dancer</option>
                          <option value="Join as a Teacher">Join as a Teacher</option>
                          <option value="Become a Sponsor">Become a Sponsor</option>
                          <option value="Become a Partner">Become a Partner</option>
                          <option value="Make a Donation">Make a Donation</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-5 ">
                    <div className="w-full font-light text-sm">
                      Please provide a message or description with additional details.<span className="text-[#C41C94]">*</span> <br />
                      <textarea name="message" rows={10} className="border px-4 py-3 font-light rounded-xl mt-2 w-full" placeholder="Tell us your story!" />
                    </div>
                  </div>
                </div>
              </div>

              {/* <br />
              <div className="text-sm font-normal  text-center w-full">
                The information sent through this online form is NOT secure.
                If you would like to discuss any related matter in private, please contact us directly.
              </div> */}

              <button  type="submit" className="mt-6 py-3 font-medium text-lg transition-all ease-in-out duration-500 shadow-3xl hover:shadow-xl css-selector bg-[#F28904] hover:bg-[#0062CC] w-full text-white rounded-full p-2 px-6">
                Submit Form
              </button>
            </form>

      {/* <form ref={form} onSubmit={sendEmail}>
        <label>Name:</label>
        <input type="text" name="from_name" required />

        <label>Email:</label>
        <input type="email" name="from_email" required />

        <label>Message:</label>
        <textarea name="message" required />

        <button type="submit">Send</button>
      </form> */}
    </div>
  );
};

export default ContactForm;