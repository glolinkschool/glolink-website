"use client";

import { useState } from "react";

const events = [
  {
    start: "2026-10-12",
    end: "2026-10-16",
    title: "Pchum Ben Festival / Constitution and Commemoration Day",
    description: "School holiday: October 12–16, 2026.",
    type: "Holiday",
  },
  {
    start: "2026-10-29",
    end: "2026-10-29",
    title: "King's Coronation Day",
    description: "Public holiday.",
    type: "Holiday",
  },
  {
    start: "2026-11-09",
    end: "2026-11-09",
    title: "Independence Day",
    description: "Cambodia's Independence Day.",
    type: "Holiday",
  },
  {
    start: "2026-11-23",
    end: "2026-11-25",
    title: "Water Festival",
    description: "School holiday: November 23–25, 2026.",
    type: "Holiday",
  },
  {
    start: "2026-12-21",
    end: "2027-01-01",
    title: "Winter Break",
    description: "School winter holiday: December 21, 2026 – January 1, 2027.",
    type: "Holiday",
  },
  {
    start: "2027-01-07",
    end: "2027-01-07",
    title: "Victory Over Genocide Day",
    description: "Public holiday.",
    type: "Holiday",
  },
  {
    start: "2027-02-05",
    end: "2027-02-05",
    title: "Chinese New Year",
    description: "School holiday.",
    type: "Holiday",
  },
  {
    start: "2027-03-08",
    end: "2027-03-08",
    title: "International Women's Day",
    description: "Public holiday.",
    type: "Holiday",
  },
  {
    start: "2027-04-12",
    end: "2027-04-16",
    title: "Khmer New Year",
    description: "School holiday: April 12–16, 2027.",
    type: "Holiday",
  },
  {
    start: "2027-05-14",
    end: "2027-05-14",
    title: "King Sihamoni's Birthday",
    description: "Public holiday.",
    type: "Holiday",
  },
  {
    start: "2027-05-24",
    end: "2027-05-24",
    title: "Royal Ploughing Ceremony",
    description: "Public holiday.",
    type: "Holiday",
  },
  {
    start: "2027-06-18",
    end: "2027-06-18",
    title: "Queen Mother's Birthday",
    description: "Public holiday.",
    type: "Holiday",
  },

  {
    start: "2026-09-01",
    end: "2026-09-01",
    title: "School Starts / Term 1 Begins",
    description: "The first day of the 2026–2027 academic year.",
    type: "Academic",
  },
  {
    start: "2026-11-06",
    end: "2026-11-06",
    title: "Term 1 Ends",
    description: "Term 1: September 1 – November 6, 2026.",
    type: "Academic",
  },
  {
    start: "2026-11-10",
    end: "2026-11-10",
    title: "Term 2 Begins",
    description: "Term 2: November 10, 2026 – January 29, 2027.",
    type: "Academic",
  },
  {
    start: "2027-01-29",
    end: "2027-01-29",
    title: "Term 2 Ends",
    description: "Term 2: November 10, 2026 – January 29, 2027.",
    type: "Academic",
  },
  {
    start: "2027-02-01",
    end: "2027-02-01",
    title: "Term 3 Begins",
    description: "Term 3: February 1 – April 9, 2027.",
    type: "Academic",
  },
  {
    start: "2027-04-09",
    end: "2027-04-09",
    title: "Term 3 Ends",
    description: "Term 3: February 1 – April 9, 2027.",
    type: "Academic",
  },
  {
    start: "2027-04-19",
    end: "2027-04-19",
    title: "Term 4 Begins",
    description: "Term 4: April 19 – June 25, 2027.",
    type: "Academic",
  },
  {
    start: "2027-06-25",
    end: "2027-06-25",
    title: "Term 4 Ends",
    description: "Term 4: April 19 – June 25, 2027.",
    type: "Academic",
  },
  {
    start: "2027-06-27",
    end: "2027-06-27",
    title: "Last Day of School",
    description: "The last day of the 2026–2027 academic year.",
    type: "Academic",
  },
  {
    start: "2027-07-26",
    end: "2027-08-27",
    title: "Summer Classes",
    description: "Summer classes run from July 26 – August 27, 2027.",
    type: "Academic",
  },
  {
    start: "2027-09-01",
    end: "2027-09-01",
    title: "New Academic Year",
    description: "The new academic year begins September 1, 2027.",
    type: "Academic",
  },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function dateKey(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function formatDate(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function isEventOnDate(event, date) {
  return date >= event.start && date <= event.end;
}

function formatEventRange(event) {
  if (event.start === event.end) {
    return formatDate(event.start);
  }

  const start = new Date(`${event.start}T12:00:00`);
  const end = new Date(`${event.end}T12:00:00`);

  if (start.getFullYear() === end.getFullYear()) {
    return `${start.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })} – ${end.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })}`;
  }

  return `${formatDate(event.start)} – ${formatDate(event.end)}`;
}

export default function SchoolCalendar({ id }) {
  const [year, setYear] = useState(2026);
  const [month, setMonth] = useState(11);
  const [selectedDate, setSelectedDate] = useState("2026-12-21");

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const selectedEvents = events.filter((event) =>
    isEventOnDate(event, selectedDate),
  );

  const upcomingEvents = [...events].sort((a, b) =>
    a.start.localeCompare(b.start),
  );

  function changeMonth(direction) {
    const next = new Date(year, month + direction, 1);
    setYear(next.getFullYear());
    setMonth(next.getMonth());
    setSelectedDate("");
  }

  function selectEvent(event) {
    const parts = event.start.split("-").map(Number);
    setYear(parts[0]);
    setMonth(parts[1] - 1);
    setSelectedDate(event.start);
  }

  return (
    <section id={id} className="bg-[#f3f7fb] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#941b43]">
            Stay Connected
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#153d65] md:text-4xl">
            GloLink School Calendar
          </h2>
          <p className="mt-4 text-slate-600">
            Important dates, holidays and academic events for 2026–2027.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Calendar */}
          <div className="rounded-2xl bg-white p-5 shadow-sm md:p-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#153d65]">
                  {months[month]} {year}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Select a highlighted date to view its details.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => changeMonth(-1)}
                  aria-label="Previous month"
                  className="h-10 w-10 rounded-lg border border-slate-200 text-xl text-[#153d65] hover:bg-sky-50"
                >
                  ‹
                </button>
                <button
                  onClick={() => changeMonth(1)}
                  aria-label="Next month"
                  className="h-10 w-10 rounded-lg border border-slate-200 text-xl text-[#153d65] hover:bg-sky-50"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="py-3 text-xs font-bold text-slate-500 md:text-sm"
                >
                  {day}
                </div>
              ))}

              {Array.from({ length: firstDay }).map((_, index) => (
                <div key={`empty-${index}`} />
              ))}

              {Array.from({ length: daysInMonth }, (_, index) => {
                const day = index + 1;
                const key = dateKey(year, month, day);

                const dayEvents = events.filter((event) =>
                  isEventOnDate(event, key),
                );

                const hasHoliday = dayEvents.some(
                  (event) => event.type === "Holiday",
                );

                const hasAcademic = dayEvents.some(
                  (event) => event.type === "Academic",
                );

                const isSelected = selectedDate === key;

                return (
                  <button
                    key={key}
                    onClick={() => setSelectedDate(key)}
                    aria-label={`${formatDate(key)}${dayEvents.length ? `, ${dayEvents.map((event) => event.title).join(", ")}` : ""}`}
                    className={`relative flex aspect-square items-center justify-center rounded-xl text-sm font-medium transition
                      ${
                        isSelected
                          ? "bg-[#153d65] text-white"
                          : hasHoliday
                            ? "bg-[#fce8ef] text-[#941b43] hover:bg-[#f7d5e1]"
                            : hasAcademic
                              ? "bg-[#eaf3fb] text-[#153d65] hover:bg-sky-100"
                              : "text-slate-700 hover:bg-sky-50"
                      }`}
                  >
                    {day}

                    {dayEvents.length > 0 && !isSelected && (
                      <span
                        className={`absolute bottom-1 h-1 w-1 rounded-full ${
                          hasHoliday ? "bg-[#941b43]" : "bg-[#153d65]"
                        }`}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap gap-4 border-t border-slate-100 pt-5 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#fce8ef]" />
                Holidays
              </span>
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#eaf3fb]" />
                Academic dates
              </span>
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#153d65]" />
                Selected date
              </span>
            </div>
          </div>

          {/* Event Details */}
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl bg-[#153d65] p-6 text-white md:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-sky-200">
                Selected Date
              </p>

              {selectedDate ? (
                <>
                  <h3 className="mt-3 text-2xl font-bold">
                    {formatDate(selectedDate)}
                  </h3>

                  {selectedEvents.length > 0 ? (
                    selectedEvents.map((event) => (
                      <div
                        key={event.title}
                        className="mt-5 border-t border-white/20 pt-5"
                      >
                        <span className="text-xs font-semibold uppercase text-sky-200">
                          {event.type}
                        </span>
                        <h4 className="mt-2 text-xl font-semibold">
                          {event.title}
                        </h4>
                        <p className="mt-3 text-sm leading-6 text-blue-100">
                          {event.description}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="mt-4 text-sm text-blue-100">
                      No scheduled events for this date.
                    </p>
                  )}
                </>
              ) : (
                <p className="mt-4 text-sm text-blue-100">
                  Select a date on the calendar to see its details.
                </p>
              )}
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <h3 className="text-xl font-bold text-[#153d65]">
                Upcoming Events
              </h3>

              <div className="mt-5 max-h-[480px] space-y-3 overflow-y-auto pr-1">
                {upcomingEvents.map((event) => (
                  <button
                    key={event.title}
                    onClick={() => selectEvent(event)}
                    className="flex w-full items-start gap-4 rounded-xl p-3 text-left transition hover:bg-sky-50"
                  >
                    <div className="min-w-16 rounded-lg bg-[#eaf3fb] px-2 py-3 text-center">
                      <p className="text-sm font-bold text-[#941b43]">
                        {new Date(`${event.start}T12:00:00`).toLocaleDateString(
                          "en-US",
                          { month: "short", day: "numeric" },
                        )}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-[#153d65]">
                        {new Date(`${event.start}T12:00:00`).getFullYear()}
                      </p>
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-semibold text-[#153d65]">
                        {event.title}
                      </h4>
                      <p className="mt-1 text-xs text-slate-500">
                        {event.type} · {formatEventRange(event)}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
