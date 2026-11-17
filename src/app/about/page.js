import PhotoPopup from "@/components/PhotoPopup";

export default function AboutPage() {
  const mission =
    "GloLink International School Phnom Penh (GIS) provides a high quality internationally based education within a Christian environment for our students. GIS recognizes the unique gifts of intellect, personality, and stature of every individual and welcomes students with diverse backgrounds and experiences to empower them to develop in faith, academics, and character in order to become committed followers of Christ, critical thinkers, creative learners, humble leaders, and contributors to society.";

  const vision =
    "As a Christian educational institution, our vision is to build a firm foundation for future generations to impact not only their communities, but also worldwide.";

  const beliefs = [
    "We believe that the Bible is inspired and inerrant, that all 66 books of the Bible are God's complete written revelation to mankind and that it is absolutely trustworthy and has supreme authority in all matters of faith and conduct.",
    "We believe in one God, eternally existent in three persons: Father, Son and Holy Spirit.",
    "We believe in God the Father, creator of heaven and earth, perfect in holiness, infinite in wisdom, and measureless in power.",
    "We believe in Jesus Christ, God's only begotten Son who in complete humanity and deity was conceived of the Holy Spirit, born of the Virgin Mary, sinless in life, making atonement for the sin of the world by His death on the cross, bodily resurrected and ascended to the right hand of the Father becoming the High Priest for His people and whom will return in power and glory in the future.",
    "We believe in the Holy Spirit dwelling and empowering the believers to enable them to live in a godly life.",
    "We believe that we sin everyday and this blocks our fellowship with God. When we accept Jesus Christ as our Messiah and Savior, we will rejoice forever in God's presence and when we confess sins in Jesus' name, we are forgiven by God and our fellowship with God is restored.",
    "We believe in the resurrection of the body, the judgement of the world by our Lord Jesus Christ, the eternal blessedness of the saved.",
    "We believe in the church as a living, spiritual body of which Christ is the Head.",
  ];

  return (
    <main className="bg-white text-slate-700">
      {/* ABOUT INTRODUCTION */}
      <section className="academic-fade-up px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#9b174c]">
              Get to know us
            </p>

            <h1 className="mb-6 text-4xl font-bold text-[#153d65] md:text-5xl">
              About <span className="text-[#9b174c]">GloLink</span>
            </h1>

            <p className="text-base leading-8 text-slate-600">
              Founded in 2016, GloLink International School Phnom Penh offers
              high-quality education aligned with international standards by
              integrating the Western Australian Curriculum into its educational
              framework. Our primary goal is to equip students with the
              knowledge, skills, and competencies essential for success in
              today's highly competitive digital era. Our curriculum meets
              global standards and is delivered by a team of dedicated
              professional educators committed to nurturing students to emerge
              as leaders in the global community.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-xl bg-[#eaf3fb] px-6 py-4">
                <p className="text-3xl font-bold text-[#153d65]">2016</p>
                <p className="mt-1 text-sm text-slate-600">Established</p>
              </div>

              <div className="rounded-xl bg-[#eaf3fb] px-6 py-4">
                <p className="text-3xl font-bold text-[#153d65]">K–12</p>
                <p className="mt-1 text-sm text-slate-600">Education</p>
              </div>
            </div>
          </div>

          <div className="group overflow-hidden rounded-3xl shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <PhotoPopup
              src="/images/SchoolBuilding_about.jpg"
              alt="International school building"
              className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105 md:h-[430px]"
            />
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section
        id="mission-vision"
        className="scroll-mt-28 bg-[#eaf3fb] px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#9b174c]">
              Our purpose
            </p>

            <h2 className="text-3xl font-bold text-[#153d65] md:text-4xl">
              Our Mission & Vision
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Guided by Christian values, we are committed to nurturing students
              to grow in knowledge, faith, and character.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="group rounded-3xl border border-blue-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl md:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf3fb] text-2xl">
                🎯
              </div>

              <h3 className="mb-5 text-2xl font-bold text-[#153d65] transition group-hover:text-[#9b174c]">
                Our Mission
              </h3>

              <p className="leading-8 text-slate-600">{mission}</p>
            </div>

            <div className="group rounded-3xl border border-blue-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl md:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf3fb] text-2xl">
                🌟
              </div>

              <h3 className="mb-5 text-2xl font-bold text-[#153d65] transition group-hover:text-[#9b174c]">
                Our Vision
              </h3>

              <p className="leading-8 text-slate-600">{vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ACCREDITATIONS */}
      <section id="accreditations" className="scroll-mt-28 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#9b174c]">
              Recognition & partnerships
            </p>

            <h2 className="text-3xl font-bold text-[#153d65] md:text-4xl">
              Accreditations & Affiliations
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-600">
              The programs at GloLink are accredited by the Cambodian Ministry
              of Education, Youth and Sport and accredited by the Government of
              Western Australia School Curriculum and Standards Authority.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="group flex min-h-64 items-center justify-center rounded-3xl border border-blue-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <img
                src="/images/partners/moey.png"
                alt="Cambodian Ministry of Education, Youth and Sport"
                className="max-h-40 max-w-full object-contain transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="group flex min-h-64 items-center justify-center rounded-3xl border border-blue-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <img
                src="/images/partners/scsa.png"
                alt="School Curriculum and Standards Authority"
                className="max-h-40 max-w-full object-contain transition duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPAL'S MESSAGE */}
      <section
        id="principal-message"
        className="scroll-mt-28 bg-[#eaf3fb] px-6 py-16 md:py-20"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="group overflow-hidden rounded-3xl shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img
              src="/images/PrincipalPhoto.jpg"
              alt="principal portrait"
              className="h-[350px] w-full object-cover object-center transition duration-500 group-hover:scale-105 md:h-[440px]"
            />
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#9b174c]">
              A message from our leadership
            </p>

            <h2 className="mb-6 text-3xl font-bold text-[#153d65]">
              Principal's Message
            </h2>

            <p className="text-base leading-8 text-slate-600">
              "At GloLink International School, our desire is to partner with
              families and churches in raising young people who pursue academic
              excellence while growing in wisdom, character, and faith. We
              believe every child is created in God's image and has unique gifts
              to develop for His glory and the good of others. We would be
              honored to serve your family."
            </p>

            <div className="mt-8 border-l-4 border-[#9b174c] pl-4">
              <p className="font-semibold text-[#153d65]">Jay Lee</p>
              <p className="mt-1 text-sm italic text-slate-500">
                Principal of GloLink
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT OF FAITH */}
      <section
        id="statement-of-faith"
        className="scroll-mt-28 relative overflow-hidden px-6 py-20 md:py-28"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1800')",
          }}
        />

        <div className="absolute inset-0 bg-[#102d4c]/75" />

        <div className="relative mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              Our foundation
            </p>

            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Statement of Faith
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-7 text-blue-50">
              GloLink International School Phnom Penh is committed to seeking
              and interweaving all subjects with biblical perspectives and the
              teachings of the Holy Bible.
            </p>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/95 p-7 shadow-2xl backdrop-blur-sm md:p-12">
            <ol className="space-y-5">
              {beliefs.map((belief, index) => (
                <li key={index} className="flex gap-4 leading-7 text-slate-700">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eaf3fb] text-sm font-bold text-[#153d65]">
                    {index + 1}
                  </span>
                  <span>{belief}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* OUR EXPERTISE */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1800')",
          }}
        />

        <div className="absolute inset-0 bg-[#153d65]/55" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-xl rounded-3xl border border-white/40 bg-white/90 p-8 text-center shadow-2xl backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white md:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#9b174c]">
              Growing together
            </p>

            <h2 className="mb-5 text-3xl font-bold text-[#153d65]">
              Our Expertise
            </h2>

            <p className="leading-8 text-slate-600">
              Our skilled teachers are here to help you every step of the way.
              With your active participation and willingness to learn, your
              goals can be achieved.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
