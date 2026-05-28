import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mb-12">
      <div className="flex-1">
        <h1 className="text-4xl font-semibold tracking-tight mb-2">
          Ye Zheng <span className="text-2xl font-normal text-gray-500">| 郑烨</span>
        </h1>
        <p className="text-gray-600 leading-relaxed mb-4 max-w-2xl">
          I am an undergraduate student in <a href="https://robotics.hnu.edu.cn" className="text-blue-600 hover:underline">Robotics Engineering at Hunan University (湖南大学)</a>.
          My research interests include reinforcement learning, locomotion, and whole-body control.
          I will soon join the <a href="https://www.nus.edu.sg" className="text-blue-600 hover:underline">National University of Singapore (NUS)</a> as an MSc Robotics student,
          where I will work on manipulation projects under the guidance of <a href="https://sites.google.com/view/dr-jianshu-zhou-nus/bio" className="text-blue-600 hover:underline">Prof. Jianshu Zhou</a> at the G&amp;M Lab.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="mailto:yezheng04123@gmail.com" className="text-blue-600 hover:underline">Email</a>
          <a href="/cv.pdf" className="text-blue-600 hover:underline">CV</a>
          <a href="https://github.com/yezheng04" className="text-blue-600 hover:underline">GitHub</a>
          <span className="text-blue-600 cursor-pointer hover:underline">WeChat: nilou778</span>
        </div>
      </div>
      <div className="shrink-0">
        <Image
          src="/photo.jpg"
          alt="Ye Zheng"
          width={160}
          height={160}
          className="rounded-lg object-cover"
          priority
        />
      </div>
    </header>
  );
}
