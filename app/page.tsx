import Image from "next/image";

import homeImg from "@/public/home.jpg";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Image
        src={homeImg}
        fill
        className="object-cover mt-[20px]"
        placeholder="blur"
        alt="home"
      />
    </div>
  );
}
