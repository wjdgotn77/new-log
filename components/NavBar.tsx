import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex gap-2 font-semibold pb-[20px]">
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/notes">Notes</Link>
      <Link href="/about">About</Link>
    </div>
  );
}
