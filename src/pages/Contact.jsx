import { useState } from "react"
import { MapPin, Mail, Phone } from "lucide-react"
import Container from "../components/layouts/Container"

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: connect to backend / email service
    console.log("Contact form submitted:", form)
  }

  return (
    <>
      <Container>
        <div className="w-full mt-6 md:mt-10 px-2 sm:px-0">
          <div className="flex flex-col md:flex-row gap-6 items-stretch">

            {/* Left - Contact Info Card */}
            <div className="w-full md:w-[300px] flex-shrink-0 bg-white rounded-xl border border-gray-200 p-6 md:p-8 flex flex-col items-center text-center gap-8">

              {/* Address */}
              <div className="flex flex-col items-center gap-3">
                <span className="w-10 h-10 flex items-center justify-center">
                  <MapPin className="text-primry" size={26} strokeWidth={1.75} />
                </span>
                <p className="text-sm text-[#4D4D4D] font-pop leading-relaxed">
                  2715 Ash Dr. San Jose, South
                  <br />
                  Dakota 83475
                </p>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center gap-3">
                <span className="w-10 h-10 flex items-center justify-center">
                  <Mail className="text-primry" size={26} strokeWidth={1.75} />
                </span>
                <p className="text-sm text-[#4D4D4D] font-pop leading-relaxed">
                  Proxy@gmail.com
                  <br />
                  Help.proxy@gmail.com
                </p>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center gap-3">
                <span className="w-10 h-10 flex items-center justify-center">
                  <Phone className="text-primry" size={26} strokeWidth={1.75} />
                </span>
                <p className="text-sm text-[#4D4D4D] font-pop leading-relaxed">
                  (319) 555-0114
                  <br />
                  (164) 333-0487
                </p>
              </div>
            </div>

            {/* Right - Contact Form Card */}
            <div className="w-full flex-1 bg-white rounded-xl border border-gray-200 p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold font-pop text-[#1A1A1A] mb-2">
                Just Say Hello!
              </h2>
              <p className="text-sm text-[#808080] font-pop mb-6 max-w-xl">
                Do you fancy saying hi to me or you want to get started with your
                project and you need my help? Feel free to contact me.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-[#1A1A1A] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-primry"
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-[#1A1A1A] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-primry"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-[#1A1A1A] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-primry"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-[#1A1A1A] placeholder:text-[#999999] resize-none focus:outline-none focus:ring-2 focus:ring-primry"
                />

                <button
                  type="submit"
                  className="self-start px-6 py-3 rounded-full bg-primry hover:bg-green-700 text-white text-sm font-medium font-pop transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>

      {/* Map */}
      <div className="w-full h-[380px] md:h-[420px] mt-10">
        <iframe
          title="Our Location"
          src="https://maps.google.com/maps?q=San%20Jose%2C%20South%20Dakota&t=&z=8&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  )
}

export default Contact