"use client";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import PhotoPopup from "@/components/PhotoPopup";
import SchoolCalendar from "@/components/SchoolCalendar";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HEADER */}

      {/* HERO SECTION */}
      <section className="academic-fade-up bg-gradient-to-r from-white via-[#f5faff] to-[#eaf3fb]">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-16 md:py-20">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold leading-tight text-[#153d65] md:text-5xl lg:text-6xl">
              Christ-Centered
              <span className="mt-2 block italic">K-12 Education</span>
            </h2>

            <p className="mt-5 text-xl italic text-[#9b1743] md:text-2xl">
              Learning to lead, Leading to be light!
            </p>

            <div className="mt-12">
              <p className="text-xl font-semibold text-[#153d65]">
                Be complete, equipped for every good work!
              </p>

              <p className="mt-1 text-lg italic leading-relaxed text-[#153d65]">
                "Put on the new self, created after the likeness of God in true
                righteousness and holiness." Ephesians 4:24
              </p>
            </div>

            <a
              href="/about"
              className="mt-8 inline-flex items-center gap-5 rounded-xl bg-[#153d65] px-6 py-3 text-lg font-medium text-white transition hover:bg-[#245987]"
            >
              Learn More <span>↗</span>
            </a>
          </div>

          {/* GloLink School Introduction Video */}
          <div className="aspect-video overflow-hidden rounded-xl shadow-md">
            <iframe
              className="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/bWXftAhEIko"
              title="GloLink International School Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* RECOGNIZED BY SECTION */}
      <ScrollReveal>
        <section className="bg-[#f3f7fb] py-14 md:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-10 text-center text-2xl font-bold text-[#153d65] md:text-3xl">
              Recognized by
            </h2>

            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
              {/* Ministry of Education */}
              <div className="flex h-36 items-center justify-center rounded-xl bg-white p-6">
                <img
                  src="/images/partners/moey.png"
                  alt="Ministry of Education, Youth and Sport"
                  className="max-h-24 max-w-full object-contain"
                />
              </div>

              {/* SCSA */}
              <div className="flex h-36 items-center justify-center rounded-xl bg-white p-6">
                <img
                  src="/images/partners/scsa.png"
                  alt="School Curriculum and Standards Authority"
                  className="max-h-24 max-w-full object-contain"
                />
              </div>
              {/* ACSI */}
              <div className="flex h-36 items-center justify-center rounded-xl bg-white p-6">
                <img
                  src="/images/partners/acsi.png"
                  alt="ACSI"
                  className="max-h-24 max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ADMISSIONS SECTION */}
      <ScrollReveal>
        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-[1500px] overflow-hidden rounded-2xl px-6 md:grid-cols-2 md:px-10">
            {/* Sample Student Image */}
            <div className="h-[330px] overflow-hidden rounded-2xl md:h-[380px]">
              <img
                src="/images/students/apply_admission_photos.png"
                alt="GloLink students"
                className="h-full w-full object-cover object-[center_25%] transition duration-500 hover:scale-105"
              />
            </div>

            {/* Admissions Information */}
            <div className="flex flex-col justify-center bg-[#eaf3fb] p-8 md:p-14">
              <h2 className="text-3xl font-bold text-[#153d65] md:text-4xl">
                Apply for Admissions
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#263b59] md:text-lg">
                Join the GloLink community and give your child a Christ-centered
                education that builds character, knowledge, and a heart to
                serve.
              </p>

              <div className="mt-6 inline-flex w-fit rounded-lg bg-white px-5 py-3 font-semibold text-[#153d65]">
                Academic Year: 2026 – 2027
              </div>

              <a
                href="/admissions"
                className="mt-7 inline-flex w-fit items-center gap-5 rounded-xl bg-[#153d65] px-7 py-3 text-white transition hover:bg-[#245987]"
              >
                Learn More <span>↗</span>
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* WHY GLOLINK SECTION */}
      <ScrollReveal>
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            {/* Section Heading */}
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#153d65] md:text-4xl">
                What Makes <span className="text-[#941b43]">GloLink</span>{" "}
                Different?
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#52647a] md:text-lg">
                GloLink combines academic learning, Christian values, character
                development, and a global perspective to help students become
                confident, responsible, and lifelong learners.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-10 md:grid-cols-3">
              {/* Card 1 */}
              <div className="text-center">
                <div className="overflow-hidden rounded-xl">
                  <PhotoPopup
                    src="/images/students/student3.png"
                    alt="Students learning together"
                    className="h-64 rounded-xl"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#153d65]">
                  A Safe and Nurturing Environment
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#52647a]">
                  A school that feels like a second home where children thrive.
                </p>
              </div>

              {/* Card 2 */}
              <div className="text-center">
                <div className="overflow-hidden rounded-xl">
                  <PhotoPopup
                    src="/images/students/student4.png"
                    alt="Teacher supporting students"
                    className="h-64 rounded-xl"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#153d65]">
                  Exceeding Expectations
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#52647a]">
                  Laying a strong foundation for future success with a
                  well-structured curriculum.
                </p>
              </div>

              {/* Card 3 */}
              <div className="text-center">
                <div className="overflow-hidden rounded-xl">
                  <PhotoPopup
                    src="/images/students/student5.png"
                    alt="Students enjoying active learning"
                    className="h-64 rounded-xl"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#153d65]">
                  Active and Engaging Learning
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#52647a]">
                  Encouraging curiosity through hands-on experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ABOUT GLOLINK SECTION */}
      <ScrollReveal>
        <section className="bg-[#eaf3fb] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            {/* Heading */}
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#153d65] md:text-4xl">
                <span className="text-[#941b43]">GloLink</span> School
              </h2>

              <p className="mx-auto mt-5 max-w-5xl text-sm leading-7 text-[#263b59] md:text-base">
                Founded in 2016, GloLink International School Phnom Penh offers
                high-quality education aligned with international standards by
                integrating the Western Australian Curriculum into its
                educational framework. Our goal is to equip students with the
                knowledge, skills, and competencies essential for success in
                today's world.
              </p>
            </div>

            {/* About Grid */}
            <div className="grid items-center gap-8 md:grid-cols-2">
              {/* Image 1 */}
              <div className="overflow-hidden rounded-2xl">
                <PhotoPopup
                  src="/images/ChristianValues.png"
                  alt="Christian Values Photos"
                  className="h-64 w-full object-cover md:h-72"
                />
              </div>

              {/* Dual Program */}
              <div
                id="dual-program"
                className="flex min-h-64 flex-col items-center justify-center rounded-2xl bg-white p-8 text-center"
              >
                <h3 className="text-2xl font-semibold text-[#153d65]">
                  Dual Program
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-[#52647a] md:text-base">
                  We offer two educational pathways to meet the diverse needs of
                  our students: the Khmer National Program (Kindergarten–Grade
                  12) and the International Program (Kindergarten–Grade 9),
                  providing a strong foundation for lifelong learning and future
                  success.
                </p>
              </div>

              {/* Christian Values */}
              <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl bg-white p-8 text-center">
                <h3 className="text-2xl font-semibold text-[#153d65]">
                  Christian Values
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-[#52647a] md:text-base">
                  As a Christian school, we nurture students in an environment
                  grounded in biblical values such as love, respect, integrity,
                  compassion, and service.
                  <br />
                  <br />
                  We encourage students to develop strong character, moral
                  responsibility, and a heart for others while welcoming
                  families from all backgrounds.
                </p>
              </div>

              {/* Image 2 */}
              <div className="overflow-hidden rounded-2xl">
                <PhotoPopup
                  src="/images/DualProgram.png"
                  alt="Dual Program Photo"
                  className="h-64 w-full object-cover md:h-72"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <SchoolCalendar id="school-calendar" />
      </ScrollReveal>
      <ScrollReveal>
        {/* Our School Life */}
        <section id="school-life" className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#153d65]">
                Our School Life
              </h2>
              <p className="text-gray-600 mt-3">
                Discover the exciting learning experiences, activities, and
                community at GloLink.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {/* Student Activities */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  src="/images/students/student6.png"
                  alt="Student Activities"
                  className="w-full h-52 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#153d65]">
                    Student Activities
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    A wide range of activities, events, and opportunities to
                    discover new talents.
                  </p>
                  <a
                    href="/school-life"
                    className="inline-block mt-4 text-sm font-semibold text-[#9b174c] hover:underline"
                  >
                    Explore More →
                  </a>
                </div>
              </div>

              {/* Our Classrooms */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  src="/images/classrooms/class1.png"
                  alt="Our Classrooms"
                  className="w-full h-52 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#153d65]">
                    Our Classrooms
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Engaging and student-centered learning environments.
                  </p>
                  <a
                    href="/school-life"
                    className="inline-block mt-4 text-sm font-semibold text-[#9b174c] hover:underline"
                  >
                    Explore More →
                  </a>
                </div>
              </div>

              {/* School Community */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  src="/images/students/student7.png"
                  alt="School Community"
                  className="w-full h-52 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#153d65]">
                    School Community
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    A caring and supportive community of students, teachers, and
                    families.
                  </p>
                  <a
                    href="/school-life"
                    className="inline-block mt-4 text-sm font-semibold text-[#9b174c] hover:underline"
                  >
                    Explore More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        {/* News & Events */}
        <section id="news-events" className="py-16 px-6 bg-[#eaf3fb]">
          <div className="max-w-6xl mx-auto">
            {/* Section Heading */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#153d65]">
                News & Events
              </h2>
              <p className="text-gray-600 mt-3">
                Stay updated with the latest news, school activities, and
                upcoming events at GloLink.
              </p>
            </div>

            {/* News Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {/* Christmas & Family Day */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800"
                    alt="Christmas Celebration"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#9b174c] text-white rounded-lg px-3 py-2 text-center shadow">
                    <span className="block text-sm font-bold">DEC</span>
                    <span className="block text-2xl font-bold leading-none">
                      19
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#153d65]">
                    Christmas & Family Day
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    A special celebration for our school community with
                    performances, games, and family activities.
                  </p>
                </div>
              </div>

              {/* Sports Day */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800"
                    alt="School Sports Day"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#9b174c] text-white rounded-lg px-3 py-2 text-center shadow">
                    <span className="block text-sm font-bold">DEC</span>
                    <span className="block text-2xl font-bold leading-none">
                      20
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#153d65]">
                    Sports Day 2026
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    A fun and exciting day that promotes teamwork, health, and
                    school spirit.
                  </p>
                </div>
              </div>

              {/* Science & Innovation Week */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
                    alt="Science and Innovation"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#9b174c] text-white rounded-lg px-3 py-2 text-center shadow">
                    <span className="block text-sm font-bold">JAN</span>
                    <span className="block text-2xl font-bold leading-none">
                      05
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#153d65]">
                    Science & Innovation Week
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    Explore, create, and innovate through hands-on learning and
                    student projects.
                  </p>
                </div>
              </div>
            </div>

            {/* View All Button */}
            <div className="text-center mt-8">
              <a
                href="/news-events"
                className="inline-block border-2 border-[#9b174c] text-[#9b174c] font-bold px-8 py-3 rounded-full hover:bg-[#9b174c] hover:text-white transition"
              >
                View All News & Events →
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
      {/* Contact & Visit Us */}
      <ScrollReveal>
        <section className="py-16 px-6 bg-[#f3f7fc]">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#153d65]">
                Contact & Visit Us
              </h2>
              <p className="text-gray-600 mt-3">
                We’re here to help. Get in touch with us or visit our campus to
                learn more about GloLink.
              </p>
              <div className="w-28 h-1 bg-[#9b174c] rounded-full mx-auto mt-5"></div>
            </div>

            {/* Main Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {/* Contact Information */}
              <div className="bg-white rounded-3xl shadow-md p-7 md:p-9">
                {/* Location */}
                <div className="flex gap-5 items-start border-b border-gray-200 pb-5 mb-5">
                  <div className="bg-[#f9edf1] text-[#9b174c] p-4 rounded-2xl text-2xl">
                    📍
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#153d65]">
                      Our Location
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Building 131-1, Oknha Mong Reththy St. (1928), Phnom Penh,
                      Cambodia
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-5 items-start border-b border-gray-200 pb-5 mb-5">
                  <div className="bg-[#f9edf1] text-[#9b174c] p-4 rounded-2xl text-2xl">
                    ☎
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#153d65]">
                      Call Us
                    </h3>
                    <p className="text-gray-600 mt-1">Tel: +855 152 447 57</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-5 items-start border-b border-gray-200 pb-5 mb-5">
                  <div className="bg-[#f9edf1] text-[#9b174c] p-4 rounded-2xl text-2xl">
                    ✉
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#153d65]">
                      Email Us
                    </h3>
                    <p className="text-gray-600 mt-1">
                      glolinkcambodia@gmail.com
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex gap-5 items-start">
                  <div className="bg-[#f9edf1] text-[#9b174c] p-4 rounded-2xl text-2xl">
                    ◷
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#153d65]">
                      Office Hours
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Monday-Friday from 7:30 - 5:00 pm
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-9">
                  <a
                    href="/contact"
                    className="text-center bg-[#9b174c] text-white font-bold py-4 px-4 rounded-xl hover:bg-[#80133e] transition"
                  >
                    ✉ Contact Us
                  </a>

                  <a
                    href="/contact"
                    className="text-center border-2 border-[#153d65] text-[#153d65] font-bold py-4 px-4 rounded-xl hover:bg-[#153d65] hover:text-white transition"
                  >
                    Schedule a Visit
                  </a>
                </div>
              </div>

              {/* School Image and Map */}
              <div className="relative h-[550px] w-full overflow-hidden rounded-3xl shadow-md">
                <PhotoPopup
                  src="/images/SchoolBuilding.jpg"
                  alt="GloLink International School building"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                {/* Location Card */}
                <div className="absolute bottom-4 right-4 max-w-[175px] rounded-2xl bg-white p-4 shadow-lg">
                  <div className="mb-2 text-2xl">📍</div>

                  <h3 className="text-sm font-bold text-[#153d65]">
                    GloLink International School
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    Phnom Penh, Cambodia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
