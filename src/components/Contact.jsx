import { useState } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const SERVICE_ID = "service_6tokf74";
    const TEMPLATE_ID = "template_ctc8jfb";
    const USER_ID = "T5fh46yIVS1h5suaI";
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then((response) => {
        alert("Message sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err) => {
        alert("Failed to send message. Please try again.");
        console.error("FAILED...", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className='py-24 text-gray-300 relative overflow-hidden' id='contact'>
      <div className='flex flex-col items-center justify-center py-16 px-4'>
        <div className='relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto'>
          {/* Blurred glowing circle behind text */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl' />

          {/* Large translucent gradient "CONTACT" */}
          <span className='text-8xl md:text-[10rem] font-extrabold bg-gradient-to-r from-white/20 via-white/10 to-white/5 bg-clip-text text-transparent select-none tracking-tighter'>
            CONTACT
          </span>

          {/* Overlayed smaller "Contact" heading */}
          <h2 className='absolute text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-gray-300 capitalize'>
            Contact
          </h2>
        </div>

        {/* Decorative horizontal lines with dot */}
        <div className='flex items-center gap-4 my-6'>
          <div className='h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50'></div>
          <div className='h-1.5 w-1.5 rounded-full bg-purple-500/70'></div>
          <div className='h-px w-12 bg-gradient-to-l from-transparent to-purple-500/50'></div>
        </div>

        {/* Subheading text */}
        <p className='text-base md:text-lg tracking-wider text-gray-300 uppercase max-w-md text-center font-light'>
          GET IN TOUCH
        </p>
      </div>

      <div className='flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 px-4'>
        {/* Left div: Let's work together */}
        <div
          className='flex flex-col justify-center flex-1'
          style={{ opacity: 1 }}
        >
          <h3
            className='text-3xl font-bold text-white mb-6'
            style={{ opacity: 1, transform: "none" }}
          >
            Let's work together
          </h3>
          <p
            className='text-gray-300 mb-4'
            style={{ opacity: 1, transform: "none" }}
          >
            I'm available for full-time roles & freelance projects.
          </p>
          <p
            className='text-gray-300 mb-4'
            style={{ opacity: 1, transform: "none" }}
          >
            My inbox is always open, whether you have a question or just want to
            say hi.
          </p>
          <p
            className='text-gray-300 mb-8'
            style={{ opacity: 1, transform: "none" }}
          >
            I'll try my best to get back to you!
          </p>
          <div
            className='flex items-center gap-4'
            style={{ opacity: 1, transform: "none" }}
          >
            <a
              href='mailto:dhirajkumarprajapati1200@gmail.com'
              aria-label='Gmail'
              target="_blank"
              className='inline-flex items-center gap-2 px-6 py-3 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 rounded-lg transition-all duration-300 border border-purple-500/30'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-send w-4 h-4'
              >
                <path d='M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z'></path>
                <path d='m21.854 2.147-10.94 10.939'></path>
              </svg>
              <span>Dhiraj.Prajapati@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Right div: Contact form */}
        <div className='relative p-8 rounded-2xl backdrop-blur-sm border border-white/10 shadow-xl flex-1'>
          <form className='space-y-5' onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              <div className='space-y-1'>
                <label htmlFor='name' className='text-sm text-gray-300'>
                  Your Name
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  placeholder='John Doe'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white placeholder-gray-500 transition-all duration-300'
                  required
                />
              </div>
              <div className='space-y-1'>
                <label htmlFor='email' className='text-sm text-gray-300'>
                  Your Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='john@example.com'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white placeholder-gray-500 transition-all duration-300'
                  required
                />
              </div>
            </div>
            <div className='space-y-1'>
              <label htmlFor='subject' className='text-sm text-gray-300'>
                Subject
              </label>
              <input
                id='subject'
                name='subject'
                type='text'
                placeholder='Project Inquiry'
                value={formData.subject}
                onChange={handleChange}
                className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white placeholder-gray-500 transition-all duration-300'
                required
              />
            </div>
            <div className='space-y-1'>
              <label htmlFor='message' className='text-sm text-gray-300'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                placeholder="Hello, I'd like to discuss a project..."
                rows='5'
                value={formData.message}
                onChange={handleChange}
                className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white placeholder-gray-500 transition-all duration-300 resize-none'
                required
              />
            </div>
            <button
              type='submit'
              disabled={loading}
              className='w-full py-4 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70 cursor-pointer'
            >
              {loading ? (
                <>
                  <span>Sending Message</span>
                  <svg
                    className='animate-spin h-5 w-5 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    />
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z'
                    />
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-5 h-5'
                  >
                    <path d='M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z'></path>
                    <path d='m21.854 2.147-10.94 10.939'></path>
                  </svg>
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
