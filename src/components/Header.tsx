"use client";

import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  return (
    <header>
      <div className="flex justify-center">
        <Link href="/">
          <Image
            src="/logo-chinese.png"
            alt="Logo"
            width={200}
            height={100}
            priority
          />
        </Link>
      </div>
      <nav className="flex justify-center gap-8">
        <a 
          href="#about" 
          className={`hover:underline ${activeSection === "#about" ? "font-bold" : ""}`}
        >
          About
        </a>
        <a 
          href="#shop" 
          className={`hover:underline ${activeSection === "#shop" ? "font-bold" : ""}`}
        >
          Shop
        </a>
        <a 
          href="#contact" 
          className={`hover:underline ${activeSection === "#contact" ? "font-bold" : ""}`}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
