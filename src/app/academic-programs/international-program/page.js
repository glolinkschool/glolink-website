export const metadata = {
  title: "International Program | Western Australian Curriculum in Phnom Penh",
  description:
    "Discover GloLink International School Phnom Penh's International Program, based on the Western Australian Curriculum for Kindergarten to Grade 9, with a focus on academic excellence, Christian values, and character development.",
  alternates: {
    canonical: "https://gispp.edu.kh/academic-programs/international-program",
  },
  openGraph: {
    title: "International Program | GloLink International School",
    description:
      "Explore our Western Australian Curriculum-based International Program for Kindergarten to Grade 9 at GloLink International School Phnom Penh.",
    url: "https://gispp.edu.kh/academic-programs/international-program",
    type: "website",
  },
};

const learningStages = [
  {
    title: "Kindergarten",
    level: "Age 3–5",
    description:
      "A caring and engaging environment where young children develop foundational skills through play, exploration, creativity, and Christian values.",
    image: "/images/students/student3.jpg",
  },
  {
    title: "Primary School",
    level: "Grades 1–6",
    description:
      "Students build strong foundations in English, Mathematics, Science, and other essential subjects while developing confidence, curiosity, and good character.",
    image: "/images/students/student8.png",
  },
  {
    title: "Middle School",
    level: "Grades 7–9",
    description:
      "Students strengthen academic knowledge, develop critical thinking, and grow in responsibility, discipline, independence, and Christian character.",
    image: "/images/students/student4.JPG",
  },
];

const highlights = [
  { icon: "📚", title: "Western Australian Curriculum" },
  { icon: "👩‍🏫", title: "Experienced Teachers" },
  { icon: "✝", title: "Christian Values" },
  { icon: "🌱", title: "Character Development" },
  { icon: "☆", title: "Academic & Life Skills" },
];

const subjects = [
  "English",
  "Mathematics",
  "Science",
  "Humanities & Social Studies",
  "Khmer Language",
  "Korean & Chinese",
  "Art & Music",
  "Physical Education",
  "Computer Studies",
  "Taekwondo",
];

export default function InternationalProgramPage() {
  return (
    <main className="bg-white text-[#153d65]">
      {/* HERO SECTION */}
      <section className="bg-[#eaf3fb] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#9b174c]">
            Our Academic Programs
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            International <span className="text-[#9b174c]">Program</span>
          </h1>

          <p className="mx-auto max-w-3xl text-base leading-8 md:text-lg">
            A globally focused learning experience from Kindergarten to Grade 9,
            nurturing academic excellence, strong faith, and confident lifelong
            learners.
          </p>
        </div>
      </section>

      {/* ABOUT THE PROGRAM */}
      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#9b174c]">
              About the Program
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Learning with <span className="text-[#9b174c]">Purpose</span>
            </h2>

            <p className="mb-5 leading-8">
              GloLink International School Phnom Penh nurtures the development
              of each child. Committed teachers lead students to build a solid
              foundation in basic skills and academics, a strong faith in
              Christ, and a deep sense of self.
            </p>

            <p className="leading-8">
              Through a challenging curriculum, students are encouraged to take
              risks and are allowed to make mistakes in a supportive
              environment. We aim to help every student grow in knowledge,
              confidence, responsibility, and character.
            </p>
          </div>

          <div className="flex min-h-[300px] items-center justify-center rounded-3xl bg-gradient-to-br from-[#dcecf9] to-[#f6eaf0] p-10 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div>
              <div className="mb-5 text-6xl">📖</div>
              <h3 className="mb-3 text-2xl font-bold">Growing Together</h3>
              <p className="text-slate-600">Knowledge · Faith · Character</p>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING STAGES */}
      <section className="bg-[#f8fbfe] px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#9b174c]">
              Kindergarten to Grade 9
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Learning at Every <span className="text-[#9b174c]">Stage</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              We support students as they grow through different stages of
              learning, helping them develop strong foundations and prepare for
              the next step in their education.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {learningStages.map((stage) => (
              <article
                key={stage.title}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold">{stage.title}</h3>

                  <span className="inline-block rounded-full bg-[#eaf3fb] px-5 py-2 text-sm font-medium">
                    {stage.level}
                  </span>

                  <p className="mt-5 leading-7 text-slate-600">
                    {stage.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#eaf3fb] p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#9b174c]">
              Our Learning Foundation
            </p>

            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              Western Australian{" "}
              <span className="text-[#9b174c]">Curriculum</span>
            </h2>

            <p className="leading-8">
              Our Kindergarten to Grade 9 International Program is based on the
              Western Australian Curriculum. We aim to provide quality
              instruction and meaningful learning experiences that help students
              develop knowledge, skills, and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* SUBJECTS */}
      <section className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Subjects & Learning <span className="text-[#9b174c]">Areas</span>
            </h2>
            <p className="mt-4 text-slate-600">
              A broad range of subjects supports students' academic and personal
              development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {subjects.map((subject, index) => (
              <div
                key={subject}
                className="rounded-xl border border-blue-100 bg-white p-5 text-center font-semibold shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#9b174c] hover:shadow-lg"
              >
                <div className="mb-3 text-2xl">
                  {
                    [
                      "📘",
                      "🔢",
                      "🔬",
                      "🌍",
                      "📝",
                      "🌐",
                      "🎨",
                      "⚽",
                      "💻",
                      "🥋",
                    ][index]
                  }
                </div>
                <p>{subject}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM HIGHLIGHTS */}
      <section className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl bg-[#eaf3fb] p-8 md:grid-cols-5 md:items-center">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold">
              Program <br /> Highlights
            </h2>
            <div className="mt-4 h-1 w-20 bg-[#9b174c]" />
          </div>

          {highlights.map((item) => (
            <div
              key={item.title}
              className="border-t border-blue-200 pt-5 text-center transition duration-300 hover:-translate-y-1 md:border-l md:border-t-0 md:pl-4 md:pt-0"
            >
              <div className="mb-3 text-4xl text-[#9b174c]">{item.icon}</div>
              <p className="text-sm font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LEARNING APPROACH */}
      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div className="rounded-3xl bg-gradient-to-br from-[#eaf3fb] to-[#f7edf1] p-10">
            <div className="grid grid-cols-2 gap-5 text-center">
              {[
                ["💡", "Critical Thinking"],
                ["🎨", "Creativity"],
                ["🤝", "Collaboration"],
                ["🌱", "Personal Growth"],
              ].map(([icon, title]) => (
                <div
                  key={title}
                  className="rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-3 text-3xl">{icon}</div>
                  <p className="font-semibold">{title}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#9b174c]">
              Our Learning Approach
            </p>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Encouraging Students to{" "}
              <span className="text-[#9b174c]">Grow</span>
            </h2>
            <p className="mb-5 leading-8">
              We believe students learn and grow through meaningful challenges,
              exploration, and supportive guidance.
            </p>
            <p className="leading-8">
              Our learning environment encourages students to ask questions,
              think independently, develop confidence, and learn from their
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-[#153d65] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Discover Learning at GloLink
          </h2>
          <p className="mb-8 leading-7 text-blue-100">
            Learn more about our International Program and how we can support
            your child's educational journey.
          </p>

          <a
            href="/contact"
            className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-[#153d65] transition duration-300 hover:bg-[#9b174c] hover:text-white"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
