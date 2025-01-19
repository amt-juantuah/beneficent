import Image from "next/image";
import Header from "./_components/Header";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Welcome My Friend</h1>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Footer</p>
      </footer>
    </div>
  );
}
