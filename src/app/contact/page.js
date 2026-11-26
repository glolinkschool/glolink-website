"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const email = data.get("email");
    const subject = data.get("subject");
    const message = data.get("message");

    const templateParams = {
      from_name: `${firstName} ${lastName}`.trim(),
      from_email: email,
      subject: subject,
      message: message,
    };

    setIsSending(true);
    setStatus(null);

    try {
      await emailjs.send(
        "service_qvkmswy",
        "template_dec4z6a",
        templateParams,
        {
          publicKey: "3wn7yHvH4jsTlzNDY",
        },
      );

      setStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. Our team will contact you soon.",
      });

      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message:
          "Sorry, your message could not be sent. Please try again or contact us by email.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="bg-white">
      {/* PAGE INTRO */}
      <section className="academic-fade-up bg-[#eaf3fb] px-6 py-16 text-center md:py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#a20d4b]">
          We Would Love to Hear From You
        </p>

        <h1 className="text-4xl font-bold text-[#153d65] md:text-5xl">
          Contact <span className="text-[#a20d4b]">Us</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#153d65]">
          Have a question about our programs or admissions? Get in touch with
          our team. We are happy to help you.
        </p>
      </section>

      {/* CONTACT CONTENT */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-10 md:py-20">
        {/* LEFT COLUMN */}
        <div>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#a20d4b]">
              Visit Our School
            </p>

            <h2 className="mb-6 text-2xl font-bold text-[#153d65]">
              Our Address
            </h2>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eaf3fb] text-xl text-[#153d65]">
                📍
              </div>

              <div>
                <p className="font-semibold text-[#153d65]">
                  GloLink International School Phnom Penh
                </p>
                <p className="mt-2 leading-7 text-slate-600">
                  Building 131-1, Oknha Mong Reththy St. (1928), Phnom Penh,
                  Cambodia
                </p>
                <p className="mt-2 text-slate-600">
                  Tel:{" "}
                  <a
                    href="tel:+85515244757"
                    className="font-medium text-[#153d65] hover:text-[#a20d4b]"
                  >
                    +855 152 447 57
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* MAP */}
          <div className="mt-8 overflow-hidden rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
            <iframe
              title="GloLink International School Location"
              src="https://www.google.com/maps?q=Building%20131-1%2C%20Oknha%20Mong%20Reththy%20St.%20%281928%29%2C%20Phnom%20Penh%2C%20Cambodia&output=embed"
              width="100%"
              height="280"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <a
            href="https://maps.app.goo.gl/byMqjWdrJsTSc4po8"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-semibold text-[#153d65] transition hover:gap-3 hover:text-[#a20d4b]"
          >
            Get Directions <span>→</span>
          </a>

          {/* DIRECT CONTACT */}
          <div className="mt-12">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#a20d4b]">
              Stay Connected
            </p>

            <h2 className="mb-6 text-2xl font-bold text-[#153d65]">
              Direct Connect
            </h2>

            <div className="grid gap-4">
              <a
                href="https://t.me/GISPPC"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-2xl border border-slate-200 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#153d65] hover:shadow-lg"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sky-500 text-2xl text-white">
                  <Send size={20} strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#153d65] group-hover:text-[#a20d4b]">
                    Telegram
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">@GISPPC</p>
                </div>

                <span className="ml-auto text-xl text-[#153d65]">→</span>
              </a>

              <a
                href="mailto:glolinkcambodia@gmail.com"
                className="group flex items-center gap-5 rounded-2xl border border-slate-200 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#153d65] hover:shadow-lg"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-500 text-2xl text-white">
                  ✉
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-[#153d65] group-hover:text-[#a20d4b]">
                    Email Us
                  </h3>
                  <p className="mt-1 break-all text-sm text-slate-500">
                    glolinkcambodia@gmail.com
                  </p>
                </div>

                <span className="ml-auto text-xl text-[#153d65]">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - CONTACT FORM */}
        <div>
          <div className="rounded-3xl bg-[#eaf3fb] p-6 shadow-sm md:p-9">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#a20d4b]">
              Send Us a Message
            </p>

            <h2 className="mb-3 text-2xl font-bold text-[#153d65]">
              How Can We Help?
            </h2>

            <p className="mb-8 leading-7 text-slate-600">
              Complete the form below and our team will receive your message
              directly. We look forward to hearing from you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#153d65]">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[#153d65] placeholder:text-slate-400 outline-none transition focus:border-[#153d65] focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#153d65]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[#153d65] placeholder:text-slate-400 outline-none transition focus:border-[#153d65] focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#153d65]">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[#153d65] placeholder:text-slate-400 outline-none transition focus:border-[#153d65] focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#153d65]">
                  Subject
                </label>
                <select
                  name="subject"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-600 outline-none transition focus:border-[#153d65] focus:ring-2 focus:ring-blue-100"
                >
                  <option>General Inquiry</option>
                  <option>Admissions</option>
                  <option>Academic Programs</option>
                  <option>School Visit</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#153d65]">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[#153d65] placeholder:text-slate-400 outline-none transition focus:border-[#153d65] focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full rounded-full bg-[#153d65] px-6 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#a20d4b] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? "Sending..." : "Send Message"}
                {!isSending && <span className="ml-2">→</span>}
              </button>

              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`mt-4 rounded-xl p-4 text-sm ${
                    status.type === "success"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
