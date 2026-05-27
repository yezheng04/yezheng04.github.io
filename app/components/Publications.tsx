const publications = [
  {
    title: "Paper Title 1: A Cool Method for Solving Important Problems",
    authors: "Ye Zheng, Co-author A, Co-author B, Advisor Name",
    venue: "Conference on Neural Information Processing Systems (NeurIPS) 2025",
    thumbnail: "/photo.jpg",
    links: [
      { label: "Website", url: "#" },
      { label: "arXiv", url: "#" },
      { label: "Code", url: "#" },
    ],
    award: null,
  },
  {
    title: "Paper Title 2: Another Awesome Research Work",
    authors: "Ye Zheng*, Co-author C*, Co-author D, Advisor Name",
    venue: "International Conference on Robotics and Automation (ICRA) 2025",
    thumbnail: "/photo.jpg",
    links: [
      { label: "Website", url: "#" },
      { label: "arXiv", url: "#" },
      { label: "Code", url: "#" },
    ],
    award: "Best Paper Award",
  },
];

export default function Publications() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Selected Publications</h2>
      <p className="text-sm text-gray-500 mb-4">
        (* indicates equal contribution) See all publications on <a href="#" className="text-blue-600 hover:underline">Google Scholar</a>.
      </p>
      <div className="space-y-8">
        {publications.map((pub, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row gap-4">
            <div className="shrink-0">
              <img src={pub.thumbnail} alt={pub.title} className="w-40 h-24 object-cover rounded border" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">{pub.title}</h3>
              <p className="text-sm text-gray-600 mb-1">{pub.authors}</p>
              <p className="text-sm text-gray-500 italic mb-2">{pub.venue}</p>
              <div className="flex flex-wrap gap-3 text-sm">
                {pub.links.map((link) => (
                  <a key={link.label} href={link.url} className="text-blue-600 hover:underline">{link.label}</a>
                ))}
                {pub.award && (
                  <span className="text-orange-600 font-medium">🏆 {pub.award}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
