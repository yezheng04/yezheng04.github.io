"use client";

import { useState } from "react";

interface TimelineItem {
  org: string;
  role: string;
  start: number;
  end: number;
  bg: string;
  logo?: string;
  location?: string;
  dateRange?: string;
}

const minYear = 2022;
const maxYear = 2027;
const totalYears = maxYear - minYear;
const timelineHeight = 500;

const categories: { title: string; textColor: string; items: TimelineItem[] }[] = [
  {
    title: "Education",
    textColor: "text-blue-500",
    items: [
      { org: "Hunan University", role: "B.E. in Robotics", start: 2022, end: 2026, bg: "bg-blue-400", location: "Changsha, China", dateRange: "2022.09 - 2026.06", logo: "/hnu-logo.svg" },
      { org: "National University of Singapore", role: "Master of Science in Robotics", start: 2026, end: 2027, bg: "bg-blue-300", location: "Singapore", dateRange: "2026.08 - 2027.05", logo: "/nus-logo.svg" },
    ],
  },
  {
    title: "Research",
    textColor: "text-emerald-600",
    items: [
      { org: "VIP-Lab", role: "Research Intern", start: 2026.25, end: 2026.58, bg: "bg-emerald-500" },
    ],
  },
  {
    title: "Employment",
    textColor: "text-orange-500",
    items: [
      { org: "spatialtemporal.ai", role: "Motion Control Intern", start: 2026.25, end: 2026.58, bg: "bg-orange-400" },
    ],
  },
];

function formatDateRange(start: number, end: number): string {
  const fmt = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(2));
  return `${fmt(start)} - ${fmt(end)}`;
}

function MessageCard({ item, onClose }: { item: TimelineItem; onClose: () => void }) {
  const displayDate = item.dateRange || formatDateRange(item.start, item.end);

  return (
    <div className="mt-4 bg-white rounded-lg shadow-md border border-gray-100 p-4 flex items-start gap-4 relative">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl leading-none w-6 h-6 flex items-center justify-center"
        aria-label="Close"
      >
        ×
      </button>

      <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden">
        {item.logo ? (
          <img src={item.logo} alt={item.org} className="w-full h-full object-contain" />
        ) : (
          <span className="text-lg font-bold text-gray-400">{item.org[0]}</span>
        )}
      </div>

      <div className="flex-1 min-w-0 pr-6">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h4 className="font-bold text-gray-900 text-base">
              {item.org}
              {item.location ? <span className="text-gray-600 font-bold">, {item.location}</span> : null}
            </h4>
            <p className="text-sm text-gray-600 mt-0.5">{item.role}</p>
          </div>
          <span className="text-sm text-gray-500 shrink-0">{displayDate}</span>
        </div>
      </div>
    </div>
  );
}

export default function Timeline() {
  const [selected, setSelected] = useState<TimelineItem | null>(null);
  const years = Array.from({ length: totalYears + 1 }, (_, i) => minYear + i);
  const nowYear = new Date().getFullYear();

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Timeline</h2>

      <div className="overflow-x-auto">
        <div className="min-w-[520px] flex gap-3">
          {/* Year axis */}
          <div className="w-12 shrink-0 relative" style={{ height: timelineHeight }}>
            <div className="absolute top-3 bottom-3 left-0 right-0">
              {years.map((year) => {
                const bottom = ((year - minYear) / totalYears) * 100;
                return (
                  <div
                    key={year}
                    className="absolute left-0 right-0 flex items-end justify-end pr-1"
                    style={{ bottom: `${bottom}%` }}
                  >
                    <span className="text-[11px] text-gray-400 leading-none translate-y-1/2">
                      {year}
                      {year === nowYear && (
                        <span className="block text-[9px] text-gray-400">Now</span>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Columns */}
          <div className="flex-1 grid grid-cols-3 gap-3">
            {categories.map((cat) => (
              <div key={cat.title} className="flex flex-col">
                <h3 className={`text-xs font-semibold text-center mb-2 uppercase tracking-wider ${cat.textColor}`}>
                  {cat.title}
                </h3>
                <div
                  className="relative border border-gray-100 rounded-lg bg-gray-50/30 overflow-hidden"
                  style={{ height: timelineHeight }}
                >
                  <div className="absolute inset-x-[6px] top-3 bottom-3">
                    {/* Year grid lines */}
                    {years.map((year) => {
                      const bottom = ((year - minYear) / totalYears) * 100;
                      return (
                        <div
                          key={year}
                          className="absolute left-0 right-0 border-t border-dashed border-gray-200"
                          style={{ bottom: `${bottom}%` }}
                        />
                      );
                    })}

                    {/* Blocks */}
                    {cat.items.map((item) => {
                      const bottom = ((item.start - minYear) / totalYears) * 100;
                      const rawHeight = ((item.end - item.start) / totalYears) * 100;
                      const height = Math.max(rawHeight, 5);
                      return (
                        <div
                          key={item.org}
                          className={`absolute left-0 right-0 ${item.bg} rounded-sm text-white px-2 py-1 overflow-hidden cursor-pointer transition-all hover:brightness-110`}
                          style={{ bottom: `${bottom}%`, height: `${height}%` }}
                          onClick={() => setSelected(item)}
                        >
                          <div className="font-semibold text-[11px] leading-tight">{item.org}</div>
                          <div className="text-[10px] opacity-90 leading-tight">{item.role}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Message Card */}
      {selected && <MessageCard item={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
