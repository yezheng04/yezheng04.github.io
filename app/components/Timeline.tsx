const education = [
  { org: "NUS", role: "PhD Student", start: 2023, end: 2028, color: "bg-teal-500" },
  { org: "NUS", role: "M.Comp. in AI", start: 2020, end: 2023, color: "bg-teal-400" },
  { org: "HITSZ", role: "B.E. in Automation", start: 2016, end: 2020, color: "bg-teal-300" },
];

const experience = [
  { org: "LV-Lab", role: "Research Intern", start: 2024, end: 2024, color: "bg-orange-400" },
  { org: "ScaleLab", role: "Research Intern", start: 2023, end: 2023, color: "bg-orange-300" },
];

const minYear = 2016;
const maxYear = 2028;
const totalYears = maxYear - minYear + 1;

function TimelineRow({ item }: { item: typeof education[0] }) {
  const left = ((item.start - minYear) / totalYears) * 100;
  const width = ((item.end - item.start + 1) / totalYears) * 100;
  return (
    <div className="grid grid-cols-[80px_100px_1fr] sm:grid-cols-[100px_120px_1fr] gap-2 items-center text-sm">
      <div className="font-medium text-gray-700 text-right pr-2">{item.org}</div>
      <div className="text-gray-500 text-xs">{item.role}</div>
      <div className="relative h-6 bg-gray-50 rounded overflow-hidden">
        <div
          className={`absolute top-1 h-4 rounded ${item.color}`}
          style={{ left: `${left}%`, width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Timeline</h2>

      <div className="overflow-x-auto">
        <div className="min-w-[500px]">
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Education</h3>
            <div className="space-y-1">
              {education.map((item, idx) => (
                <TimelineRow key={idx} item={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Experience</h3>
            <div className="space-y-1">
              {experience.map((item, idx) => (
                <TimelineRow key={idx} item={item} />
              ))}
            </div>
          </div>

          <div className="mt-2 grid grid-cols-[80px_100px_1fr] sm:grid-cols-[100px_120px_1fr] gap-2 text-xs text-gray-400">
            <div></div>
            <div></div>
            <div className="flex justify-between px-1">
              {Array.from({ length: Math.ceil(totalYears / 2) }, (_, i) => (
                <span key={i}>{minYear + i * 2}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
