const awards = [
  { name: "[Award Name 1] (e.g., National Scholarship)", year: "2024" },
  { name: "[Award Name 2] (e.g., Best Paper Award at XXX)", year: "2023" },
  { name: "[Award Name 3] (e.g., Outstanding Graduate)", year: "2022" },
];

export default function Awards() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Award</h2>
      <ul className="space-y-2 text-sm text-gray-700">
        {awards.map((award, idx) => (
          <li key={idx} className="flex justify-between border-b border-gray-100 pb-2">
            <span>{award.name}</span>
            <span className="text-gray-500">{award.year}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
