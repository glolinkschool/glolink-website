import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[65vh] items-center justify-center bg-[#f8fbff] px-6 py-16">
      <div className="text-center">
        <div className="mb-8 text-7xl">🛠️</div>

        <h1 className="text-3xl font-bold text-[#153d65]">
          We're Working on This Page!
        </h1>

        <p className="mt-5 text-gray-600">
          We're currently preparing this page. Please check back soon!
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-[#153d65] px-7 py-3 font-semibold text-white"
        >
          Back to Homepage
        </Link>

        <p className="mt-10 italic text-[#9b174c]">
          Learning to lead, Leading to be light!
        </p>
      </div>
    </main>
  );
}
