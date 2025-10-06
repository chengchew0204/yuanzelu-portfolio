"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div>
      <Header activeSection={activeSection} />

      <main>
        {!activeSection && <Gallery />}
        {activeSection === "#about" && <About />}
        {activeSection === "#contact" && <Contact />}
      </main>
    </div>
  );
}