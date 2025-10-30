import { About, Header, Hero, Projects } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black" id="home">
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
