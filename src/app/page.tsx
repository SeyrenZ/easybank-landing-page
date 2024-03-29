import { Content1, Content2, Footer, Header } from "./components";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="h-[60px]"></div>{" "}
      {/* avoid overlapping with the fixed navbar */}
      <Header />
      <Content1 />
      <Content2 />
      <Footer />
    </main>
  );
}
