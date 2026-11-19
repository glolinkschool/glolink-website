import Link from "next/link";
import AcademicTimetable from "@/components/AcademicTimetable";

export const metadata = {
  title: "Academic Programs in Phnom Penh | Khmer & International",
  description:
    "Explore GloLink International School Phnom Penh's Khmer National Program (Kindergarten–Grade 12) and International Program (Kindergarten–Grade 9), following the Western Australian Curriculum.",
  alternates: {
    canonical: "https://gispp.edu.kh/academic-programs",
  },
  openGraph: {
    title: "Khmer & International Academic Programs | GloLink School",
    description:
      "Discover Khmer National and International education programs at GloLink International School Phnom Penh.",
    url: "https://gispp.edu.kh/academic-programs",
    type: "website",
  },
};
const programs = [
  {
    title: "Khmer Program",
    subtitle: "Cambodian National Curriculum",
    description:
      "A comprehensive learning program that builds strong academic foundations while nurturing Khmer language, culture, national identity, faith, and character.",
    grades: "Kindergarten – Grade 12",
    href: "/academic-programs/khmer-program",
    theme: "bg-[#eaf3fb]",
    symbol: "ក",
    label: "KHMER EDUCATION",
  },
  {
    title: "International Program",
    subtitle: "Western Australian Curriculum",
    description:
      "An engaging international learning experience that develops critical thinking, creativity, confidence, and a strong foundation for lifelong learning.",
    grades: "Kindergarten – Grade 9",
    href: "/academic-programs/international-program",
    theme: "bg-[#f8f0ef]",
    symbol: "A+",
    label: "INTERNATIONAL EDUCATION",
  },
];

const highlights = [
  {
    number: "01",
    title: "Academic Excellence",
    description:
      "Building strong foundations and encouraging students to reach their potential.",
  },
  {
    number: "02",
    title: "Critical Thinking",
    description:
      "Encouraging curiosity, creativity, problem-solving, and independent learning.",
  },
  {
    number: "03",
    title: "Language & Culture",
    description:
      "Developing communication skills and appreciation for language and culture.",
  },
  {
    number: "04",
    title: "Character & Values",
    description:
      "Nurturing responsibility, respect, faith, and positive relationships.",
  },
];

export default function AcademicProgramsPage() {
  return (
    <main className="bg-white text-[#153d65]">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#eaf3fb] px-6 py-24 text-center md:py-28">
        {/* SOFT GLOWING BACKGROUND */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="academic-float absolute -left-20 top-10 h-64 w-64 rounded-full bg-blue-200/50 blur-3xl"></div>

          <div className="academic-float-delayed absolute -right-20 top-20 h-72 w-72 rounded-full bg-[#d9a3b8]/30 blur-3xl"></div>

          <div className="academic-float absolute bottom-0 left-1/2 h-48 w-48 rounded-full bg-white/80 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* TOP LABEL */}
          <div className="academic-fade-up mb-6 flex items-center justify-center gap-4">
            <span className="academic-line h-[2px] w-12 bg-[#9b174c]"></span>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9b174c]">
              Our Academic Programs
            </p>

            <span className="academic-line h-[2px] w-12 bg-[#9b174c]"></span>
          </div>

          {/* MAIN HEADING */}
          <h1 className="academic-fade-up text-4xl font-bold leading-tight md:text-6xl">
            Two Programs,{" "}
            <span className="text-[#9b174c]">
              One Christ-Centered Education
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="academic-fade-up-delay mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-700 md:text-lg">
            At GloLink International School Phnom Penh, we offer two
            complementary academic programs that provide a strong educational
            foundation, develop essential life skills, and prepare students to
            thrive in a changing world.
          </p>

          {/* BUTTON */}
          <div className="academic-fade-up-delay mt-9">
            <a
              href="#choose-program"
              className="group inline-flex items-center gap-3 rounded-full bg-[#153d65] px-8 py-4 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#9b174c] hover:shadow-xl"
            >
              Explore Our Programs
              <span className="inline-block text-xl transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* PROGRAM CARDS */}
      <section
        id="choose-program"
        className="scroll-mt-24 px-6 py-16 md:px-12 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#9b174c]">
              Find the Right Path
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Choose Your Academic Program
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Each program provides students with opportunities to grow in
              knowledge, faith, and character.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {programs.map((program) => (
              <div
                key={program.title}
                className={`group overflow-hidden rounded-3xl ${program.theme} shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl`}
              >
                {/* Decorative program visual */}
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-white/80 to-[#d8e8f7] md:h-56">
                  <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/50 transition duration-500 group-hover:scale-125"></div>
                  <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-[#9b174c]/10"></div>

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white bg-white/80 text-4xl font-bold text-[#9b174c] shadow-md transition duration-300 group-hover:scale-110">
                    {program.symbol}
                  </div>

                  <p className="absolute bottom-5 left-6 text-xs font-bold tracking-[0.2em] text-[#153d65]/70">
                    {program.label}
                  </p>
                </div>

                <div className="p-7 md:p-9">
                  <p className="text-sm font-semibold text-[#9b174c]">
                    {program.subtitle}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                    {program.title}
                  </h3>

                  <div className="my-5 h-1 w-14 rounded-full bg-[#9b174c]"></div>

                  <p className="min-h-[100px] leading-7 text-slate-700">
                    {program.description}
                  </p>

                  <div className="mt-5 inline-block rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#153d65]">
                    {program.grades}
                  </div>

                  <div className="mt-7">
                    <Link
                      href={program.href}
                      className="inline-flex items-center gap-3 rounded-full bg-[#153d65] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:gap-5 hover:bg-[#9b174c] hover:shadow-lg"
                    >
                      Explore {program.title}
                      <span className="text-lg">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATIONAL APPROACH */}
      <section className="bg-[#f7fafd] px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#9b174c]">
              Our Educational Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              Education That Develops the Whole Child
            </h2>

            <div className="my-6 h-1 w-16 rounded-full bg-[#9b174c]"></div>

            <p className="leading-8 text-slate-700">
              At GloLink, education is about more than academic achievement. We
              aim to develop students who grow in knowledge, build strong
              character, deepen their faith, and learn to make a positive
              difference in their communities.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Through our two academic programs, students are encouraged to
              become thoughtful learners, responsible individuals, and
              compassionate members of society.
            </p>
          </div>

          <div className="rounded-3xl bg-[#153d65] p-8 text-white shadow-lg md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f0b5cc]">
              Our Commitment
            </p>

            <h3 className="mt-5 text-3xl font-bold leading-snug">
              Learning to lead,
              <br />
              Leading to be light!
            </h3>

            <div className="my-7 h-1 w-16 rounded-full bg-[#c34b78]"></div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-white/10 p-4">
                <span className="text-2xl">📚</span>
                <p className="mt-2 text-sm font-semibold">Knowledge</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <span className="text-2xl">✝</span>
                <p className="mt-2 text-sm font-semibold">Faith</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <span className="text-2xl">🌱</span>
                <p className="mt-2 text-sm font-semibold">Character</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM HIGHLIGHTS */}
      <section className="px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#9b174c]">
              Growing Together
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              What We Encourage in Every Student
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#d8e8f7] hover:shadow-xl"
              >
                <p className="text-3xl font-bold text-[#9b174c]/70">
                  {item.number}
                </p>

                <div className="my-5 h-1 w-12 rounded-full bg-[#9b174c]"></div>

                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AcademicTimetable />
      {/* CALL TO ACTION */}
      <section className="bg-[#eaf3fb] px-6 py-16 text-center md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#9b174c]">
            Begin Your Journey
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Discover the GloLink Difference
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            We welcome families to learn more about our academic programs and
            discover the learning opportunities at GloLink International School
            Phnom Penh.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#153d65] px-8 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#9b174c] hover:shadow-lg"
          >
            Contact Us
            <span className="text-xl">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
