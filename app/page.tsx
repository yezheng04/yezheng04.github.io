import Header from "./components/Header";
import News from "./components/News";
import Research from "./components/Research";
import Publications from "./components/Publications";
import Awards from "./components/Awards";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4 py-12 sm:px-6 lg:px-8">
      <main className="w-full max-w-3xl">
        <Header />
        <News />
        <Research />
        <Publications />
        <Awards />
        <Timeline />
      </main>
    </div>
  );
}
