const newsItems = [
  { date: "2025-05", text: "[News item 1]: e.g., Paper accepted to XXX conference!", link: "#", linkText: "Paper" },
  { date: "2025-03", text: "[News item 2]: e.g., Started internship at XXX Lab.", link: "#", linkText: "Lab" },
  { date: "2024-12", text: "[News item 3]: e.g., Awarded XXX scholarship.", link: "#", linkText: "Award" },
];

export default function News() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">News</h2>
      <ul className="space-y-2 text-sm text-gray-700">
        {newsItems.map((item, idx) => (
          <li key={idx} className="flex gap-4 items-start">
            <span className="font-medium text-gray-500 w-20 shrink-0">{item.date}</span>
            <span>
              {item.text}{" "}
              <a href={item.link} className="text-blue-600 hover:underline">[{item.linkText}]</a>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
