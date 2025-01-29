import Image from "next/image";
import Header from "./_components/Header";
import Banner from "./_components/Home/Banner";

export default function Home() {
  return (
    <div className="container mx-auto p-3 lg:px-4">
      <Header />
      <Banner />
    </div>
  );
}
