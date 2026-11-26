import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#08294b] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* School Information */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo/glolink-logo.png"
                alt="GloLink Logo"
                className="w-20 h-20 object-contain bg-white rounded-lg p-1"
              />
              <div>
                <h2 className="text-2xl font-bold">GloLink</h2>
                <p className="text-sm">
                  International School
                  <br />
                  Phnom Penh
                </p>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed text-sm">
              A Christ-centered international school that provides quality
              education, character formation, and a safe, caring environment for
              every student.
            </p>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/GISPPC/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GloLink on Facebook"
                className="w-10 h-10 rounded-full bg-white text-[#08294b] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition duration-300"
              >
                <FaFacebookF size={17} />
              </a>

              <a
                href="https://www.youtube.com/@GlSPP"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GloLink on YouTube"
                className="w-10 h-10 rounded-full bg-white text-[#08294b] flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition duration-300"
              >
                <FaYoutube size={19} />
              </a>

              <a
                href="https://www.instagram.com/glolinkcambodia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GloLink on Instagram"
                className="w-10 h-10 rounded-full bg-white text-[#08294b] flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition duration-300"
              >
                <FaInstagram size={19} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5">Quick Links</h3>
            <div className="w-16 h-1 bg-[#9b174c] rounded-full mb-5"></div>
            <ul className="space-y-3 text-blue-100 text-sm">
              <li>
                <a href="/" className="hover:text-white">
                  › Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  › About GloLink
                </a>
              </li>
              <li>
                <a href="/admissions" className="hover:text-white">
                  › Admissions
                </a>
              </li>
              <li>
                <a href="/academics" className="hover:text-white">
                  › Academic Programs
                </a>
              </li>
              <li>
                <a href="/calendar" className="hover:text-white">
                  › School Calendar
                </a>
              </li>
              <li>
                <a href="/news-events" className="hover:text-white">
                  › News & Events
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  › Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Academic Programs */}
          <div>
            <h3 className="text-xl font-bold mb-5">Academic Programs</h3>
            <div className="w-16 h-1 bg-[#9b174c] rounded-full mb-5"></div>
            <ul className="space-y-4 text-blue-100 text-sm">
              <li>Kindergarten</li>
              <li>Primary School</li>
              <li>Middle School</li>
              <li>High School</li>
              <li>International Program</li>
              <li>Khmer Program</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-5">Get in Touch</h3>
            <div className="w-16 h-1 bg-[#9b174c] rounded-full mb-5"></div>
            <ul className="space-y-5 text-blue-100 text-sm">
              <li>📍 Sen Sok, Phnom Penh, Cambodia</li>
              <li>☎ +855 152 447 57</li>
              <li>✉ glolinkcambodia@gmail.com</li>
            </ul>
            <a
              href="/contact"
              className="inline-block mt-7 bg-[#9b174c] text-white font-bold px-6 py-3 rounded-full hover:bg-[#b3265d] transition"
            >
              Schedule a Visit →
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-300/30 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-blue-100">
          <p>© 2026 GloLink International School. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
