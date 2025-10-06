"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="text-center py-8">
      <div className="flex justify-center mb-8">
        <Image
          src="/profile.png"
          alt="Yuanze Lu"
          width={500}
          height={400}
        />
      </div>
      <div className="space-y-2">
        <p className="font-semibold">Yuanze Lu</p>
        <p className="mb-6">Born 1998, Kaohsiung, Taiwan</p>
        
        <p className="py-4">⸻</p>
        
        <p className="font-semibold pt-4">Education</p>
        <p>2018 – Enrolled in the Fine Arts Department, Tunghai University</p>
        <p>2017 – Summer study, Repin Academy of Fine Arts, Russia</p>
        
        <p className="py-4">⸻</p>
        
        <p className="font-semibold pt-4">Residencies & Training</p>
        <p>2019 – Apprenticeship, Odd Nerdrum Studio, Norway</p>
        <p>2019 – Study tour: Netherlands, Norway, Iceland, UK</p>
        
        <p className="py-4">⸻</p>
        
        <p className="font-semibold pt-4">Solo Exhibitions</p>
        <p>2025 – Long Nights, Many Dreams, delicate antique, Taipei</p>
        <p>2025 – Scenes & Painting, AJ Hotel, Hsinchu</p>
        <p>2024 – Prejudice on the Horizon, Night Galleria, Kaohsiung</p>
        <p>2022 – Life and Day, May16, Kaohsiung</p>
        
        <p className="py-4">⸻</p>
        
        <p className="font-semibold pt-4">Group Exhibitions</p>
        <p>2025 – COLD DREAM, Taichung</p>
        <p>2025 – Gang Zai · Bao Dao, 852 Art Space, Taichung</p>
        <p>2018 – Yuanze Lu & Weng Jiajun Joint Exhibition, Steady Flight Mode, Changhua</p>
        <p>2016 – Creative Power, Kaohsiung Cultural Center</p>
        
        <p className="py-4">⸻</p>
        
        <p className="font-semibold pt-4">Art Fairs & Exhibitions</p>
        <p>2023 – EVAC (East Village Art Collection), New York</p>
        <p>2023 – Art Future, Taipei</p>
        <p>2023 – Art Formosa</p>
        <p>2023 – Art Hsinchu</p>
        <p>2022 – Young Art Kaohsiung</p>
        
        <p className="py-4">⸻</p>
        
        <p className="font-semibold pt-4">Public Art</p>
        <p>2020 – Youngde Construction, public art project</p>
        
        <p className="py-4">⸻</p>
        
        <p className="font-semibold pt-4">Awards & Honors</p>
        <p>2015 – First Prize, Western Painting, National Student Art Exhibition</p>
        <p>2014 – Honorable Mention, National Student Art Exhibition</p>
        <p>2012 – Second Place, Kaohsiung Creative Sketching Competition</p>
      </div>
    </section>
  );
}
