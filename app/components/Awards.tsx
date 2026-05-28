const awards = [
  { name: "Hunan University Second-Class Scholarship (湖南大学二等奖学金)", year: "2025" },
  { name: "Changsha Bank Scholarship (长沙银行奖学金)", year: "2024" },
  { name: "China Robot Competition & ROBOCUP China Open, RoboCup Soccer Robot Middle-Size Technical Challenge Champion (中国机器人大赛暨ROBOCUP机器人世界杯中国赛 中型组技术挑战赛 冠军)", year: "2023" },
  { name: "Intelligent Robot Fighting and Gaming Competition, Second Prize (中国智能格斗机器人及竞技大赛 二等奖)", year: "2023" },
];

export default function Awards() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Award</h2>
      <ul className="space-y-2 text-sm text-gray-700">
        {awards.map((award, idx) => (
          <li key={idx} className="flex justify-between border-b border-gray-100 pb-2">
            <span>{award.name}</span>
            <span className="text-gray-500 shrink-0 ml-4">{award.year}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
