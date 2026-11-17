const schedule = [
  {
    time: "7:15 – 7:40",
    activity: "Arrival and Morning Preparations",
    type: "special",
  },
  { time: "7:45 – 8:00", activity: "Devotion", type: "devotion" },
  { time: "8:00 – 8:50", activity: "Period 1" },
  { time: "8:50 – 9:40", activity: "Period 2" },
  { time: "9:40 – 10:00", activity: "Morning Break", type: "break" },
  { time: "10:00 – 10:50", activity: "Period 3" },
  { time: "10:50 – 11:40", activity: "Period 4" },
  { time: "11:40 – 12:20", activity: "Lunch Break", type: "break" },
  { time: "12:20 – 1:10", activity: "Period 5" },
  { time: "1:10 – 2:00", activity: "Period 1" },
  { time: "2:00 – 2:50", activity: "Period 2" },
  { time: "2:50 – 3:00", activity: "Afternoon Break", type: "break" },
  { time: "3:00 – 3:50", activity: "Period 3" },
  { time: "3:50 – 4:40", activity: "Period 4" },
  { time: "4:40 – 5:00", activity: "Dismissal", type: "special" },
];

export default function AcademicTimetable() {
  return (
    <section className="bg-[#eaf3fb] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#a20d46] font-semibold tracking-[0.2em] text-sm uppercase mb-3">
            A Typical School Day
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#153d65]">
            School Timetable
          </h2>

          <div className="w-20 h-1 bg-[#9b174c] mx-auto mt-4 mb-5" />

          <p className="text-[#153d65] max-w-2xl mx-auto leading-7">
            A balanced daily schedule that combines learning, spiritual growth,
            and time for rest and connection.
          </p>

          <span className="inline-block mt-4 bg-white text-[#153d65] px-5 py-2 rounded-full text-sm font-medium">
            Applies to Both Academic Programs
          </span>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-[1fr_1.5fr] bg-[#153d65] text-white font-semibold px-5 md:px-8 py-4">
            <span>TIME</span>
            <span>ACTIVITY</span>
          </div>

          {schedule.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-[1fr_1.5fr] px-5 md:px-8 py-4 border-b border-gray-100 last:border-0 ${
                item.type === "break"
                  ? "bg-[#fbf0f3]"
                  : item.type === "devotion"
                    ? "bg-[#f2f7fc]"
                    : "bg-white"
              }`}
            >
              <span className="font-semibold text-[#153d65] text-sm md:text-base">
                {item.time}
              </span>

              <span
                className={`text-sm md:text-base ${
                  item.type === "break"
                    ? "text-[#9b174c] font-semibold"
                    : item.type === "devotion"
                      ? "text-[#153d65] font-semibold"
                      : item.type === "special"
                        ? "text-[#153d65] font-medium"
                        : "text-gray-700"
                }`}
              >
                {item.activity}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-5">
          The timetable shown is the daily school schedule for both programs.
        </p>
      </div>
    </section>
  );
}
