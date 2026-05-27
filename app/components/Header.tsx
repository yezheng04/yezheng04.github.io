import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mb-12">
      <div className="flex-1">
        <h1 className="text-4xl font-semibold tracking-tight mb-2">
          Ye Zheng <span className="text-2xl font-normal text-gray-500">| 郑烨</span>
        </h1>
        <p className="text-gray-600 leading-relaxed mb-4 max-w-2xl">
          I am a [Your Position] at [Your Institution]. My research interests include [Research Area 1],
          [Research Area 2], and [Research Area 3]. I am fortunate to be advised by [Advisor Name] and
          work closely with [Collaborator Names]. Previously, I received my [Degree] from [University].
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="mailto:you@example.com" className="text-blue-600 hover:underline">Email</a>
          <a href="/cv.pdf" className="text-blue-600 hover:underline">CV</a>
          <a href="https://github.com/yourname" className="text-blue-600 hover:underline">GitHub</a>
          <a href="https://scholar.google.com/citations?user=YOUR_ID" className="text-blue-600 hover:underline">Google Scholar</a>
          <span className="text-blue-600 cursor-pointer hover:underline">WeChat</span>
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
