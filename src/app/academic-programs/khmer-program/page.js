import AcademicTimetable from "@/components/AcademicTimetable";

export const metadata = {
  title: "Khmer National Program | Kindergarten to Grade 12 in Phnom Penh",
  description:
    "Explore the Khmer National Program at GloLink International School Phnom Penh. Following Cambodia's National Curriculum, our program offers Kindergarten to Grade 12 education with Khmer language, English, academic subjects, and Christian values.",
  alternates: {
    canonical: "https://gispp.edu.kh/academic-programs/khmer-program",
  },
  openGraph: {
    title: "Khmer National Program | GloLink International School",
    description:
      "Discover GloLink's Khmer National Curriculum program, from Kindergarten to Grade 12, in Phnom Penh, Cambodia.",
    url: "https://gispp.edu.kh/academic-programs/khmer-program",
    type: "website",
  },
};

const gradeLevels = [
  {
    title: "Kindergarten",
    level: "Age 3–5",
    description:
      "A caring and engaging environment where young children develop foundational skills through play, exploration, creativity, and Christian values.",
    number: "01",
  },
  {
    title: "Elementary School",
    level: "Grades 1–6",
    description:
      "Students build strong foundations in Khmer, English, Mathematics, Science, and other essential subjects while developing confidence, curiosity, and good character.",
    number: "02",
  },
  {
    title: "Middle School",
    level: "Grades 7–9",
    description:
      "Students strengthen their academic knowledge, develop critical thinking, and grow in responsibility, discipline, and Christian character.",
    number: "03",
  },
  {
    title: "High School",
    level: "Grades 10–12",
    description:
      "Students prepare for graduation and future opportunities through academic learning, personal development, leadership, and strong values.",
    number: "04",
  },
];

const highlights = [
  {
    symbol: "▤",
    title: "Cambodia National Curriculum",
    description: "Learning based on the national education curriculum.",
  },
  {
    symbol: "♙",
    title: "Qualified Teachers",
    description: "Guidance and support from dedicated educators.",
  },
  {
    symbol: "✝",
    title: "Christian Values",
    description: "Growing in faith, kindness, and integrity.",
  },
  {
    symbol: "✳",
    title: "Character Development",
    description: "Building responsibility, confidence, and respect.",
  },
  {
    symbol: "☆",
    title: "Academic & Life Skills",
    description: "Developing knowledge and skills for everyday life.",
  },
];

export default function KhmerProgramPage() {
  return (
    <main className="bg-white text-[#153d65]">
      {/* HERO SECTION */}
      {/* KHMER PROGRAM HERO */}
      <section className="bg-[#eaf3fb] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#9b174c]">
            Our Academic Programs
          </p>

          <h1 className="mb-6 text-4xl font-bold text-[#153d65] md:text-5xl">
            Khmer <span className="text-[#9b174c]">Program</span>
          </h1>

          <p className="mx-auto max-w-3xl text-base leading-8 text-[#153d65] md:text-lg">
            Building strong academic foundations, preserving Cambodian culture,
            and developing students with knowledge, character, and Christian
            values.
          </p>
        </div>
      </section>

      {/* PROGRAM INTRODUCTION */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#9b174c]">
              Welcome to GloLink
            </p>

            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Learning with Purpose,
              <span className="text-[#9b174c]"> Growing with Values</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-700">
              The Khmer Program at GloLink International School Phnom Penh
              offers education from Kindergarten through Grade 12. The program
              is staffed by certified teachers who teach the main subjects set
              by the Ministry of Education, Youth and Sport.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Through this curriculum, students develop strong academic
              foundations, an appreciation for Khmer language and culture, and
              the abilities needed to participate in the global community.
            </p>
          </div>

          <div className="flex min-h-[320px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#dceaf7] via-[#eaf3fb] to-[#f8e9ed] p-8 shadow-sm transition duration-300 hover:shadow-xl">
            <div className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-5xl shadow-md">
                🎓
              </div>
              <h3 className="mt-6 text-2xl font-bold">
                Education for Every Stage
              </h3>
              <p className="mt-3 text-slate-600">Kindergarten to Grade 12</p>
            </div>
          </div>
        </div>
      </section>

      {/* GRADE LEVELS */}
      <section className="bg-[#f7faff] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#9b174c]">
              Learning Journey
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Explore Our <span className="text-[#9b174c]">Grade Levels</span>
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Supporting students through every stage of their educational
              journey.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gradeLevels.map((grade) => (
              <div
                key={grade.number}
                className="group overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-36 items-center justify-center bg-gradient-to-br from-[#dceaf7] to-[#f5e9ed]">
                  <span className="text-5xl font-bold text-[#153d65]/20 transition duration-300 group-hover:scale-110 group-hover:text-[#9b174c]/50">
                    {grade.number}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold">{grade.title}</h3>

                  <span className="mt-3 inline-block rounded-full bg-[#eaf3fb] px-4 py-1 text-sm font-semibold">
                    {grade.level}
                  </span>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {grade.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#eaf3fb] px-7 py-12 md:px-16 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#9b174c]">
              What Students Learn
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Our <span className="text-[#9b174c]">Curriculum</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-700">
              The Khmer Program follows the Cambodian National Curriculum.
              Students study the main subjects established by the Ministry of
              Education, Youth and Sport, together with English, Art, Physical
              Education, Music, and Bible classes.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Khmer Language",
              "English",
              "Mathematics",
              "Science",
              "Social Studies",
              "Art & Music",
              "Physical Education",
              "Bible Studies",
            ].map((subject) => (
              <div
                key={subject}
                className="rounded-xl border border-white bg-white px-5 py-4 text-center font-semibold shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {subject}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM HIGHLIGHTS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#9b174c]">
              The GloLink Difference
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Program <span className="text-[#9b174c]">Highlights</span>
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#9b174c]/30 hover:shadow-xl"
              >
                <div className="text-4xl text-[#9b174c]">{item.symbol}</div>

                <h3 className="mt-5 font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-[#153d65] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Give Your Child a Strong Foundation
          </h2>

          <p className="mt-4 leading-7 text-blue-100">
            Discover how the Khmer Program at GloLink can support your child's
            learning and development.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3 font-semibold text-[#153d65] transition duration-300 hover:-translate-y-1 hover:bg-[#f5e9ed] hover:shadow-lg"
          >
            Get in Touch <span>→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
