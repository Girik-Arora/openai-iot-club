import Link from "next/link";
import Image from "next/image";
import LoginButton from "./LoginButton";

export default function Navbar() {
  return (
   <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-4 bg-black/60 backdrop-blur-xl border-b border-white/10 z-50">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/events">Events</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/team">Team</Link>
      <LoginButton />
      <Link href="/" className="flex items-center gap-3">
        <Image src="/logo.png" width={40} height={40} alt="logo" />
        <span className="font-semibold">Open AI Club</span>
      </Link>
    </nav>
  );
}