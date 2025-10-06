"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="text-center py-8 px-4 sm:px-8">
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-[500px]">
          <Image
            src="/profile.png"
            alt="Yuanze Lu"
            width={500}
            height={400}
            className="w-full h-auto"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 500px"
          />
        </div>
      </div>
      <div className="space-y-2 max-w-3xl mx-auto">
        <p className="font-semibold text-base sm:text-lg">Yuanze Lu</p>
        <p className="mb-6 text-sm sm:text-base">Born 1998, Kaohsiung, Taiwan</p>
        
        <p className="py-3 sm:py-4 text-sm sm:text-base">⸻</p>
        
        <p className="font-semibold pt-4 text-sm sm:text-base">Education</p>
        <p className="text-sm sm:text-base">2018 – Enrolled in the Fine Arts Department, Tunghai University</p>
        <p className="text-sm sm:text-base">2017 – Summer study, Repin Academy of Fine Arts, Russia</p>
        
        <p className="py-3 sm:py-4 text-sm sm:text-base">⸻</p>
        
        <p className="font-semibold pt-4 text-sm sm:text-base">Residencies & Training</p>
        <p className="text-sm sm:text-base">2019 – Apprenticeship, Odd Nerdrum Studio, Norway</p>
        <p className="text-sm sm:text-base">2019 – Study tour: Netherlands, Norway, Iceland, UK</p>
        
        <p className="py-3 sm:py-4 text-sm sm:text-base">⸻</p>
        
        <p className="font-semibold pt-4 text-sm sm:text-base">Solo Exhibitions</p>
        <p className="text-sm sm:text-base">2025 – Long Nights, Many Dreams, delicate antique, Taipei</p>
        <p className="text-sm sm:text-base">2025 – Scenes & Painting, AJ Hotel, Hsinchu</p>
        <p className="text-sm sm:text-base">2024 – Prejudice on the Horizon, Night Galleria, Kaohsiung</p>
        <p className="text-sm sm:text-base">2022 – Life and Day, May16, Kaohsiung</p>
        
        <p className="py-3 sm:py-4 text-sm sm:text-base">⸻</p>
        
        <p className="font-semibold pt-4 text-sm sm:text-base">Group Exhibitions</p>
        <p className="text-sm sm:text-base">2025 – COLD DREAM, Taichung</p>
        <p className="text-sm sm:text-base">2025 – Gang Zai · Bao Dao, 852 Art Space, Taichung</p>
        <p className="text-sm sm:text-base">2018 – Yuanze Lu & Weng Jiajun Joint Exhibition, Steady Flight Mode, Changhua</p>
        <p className="text-sm sm:text-base">2016 – Creative Power, Kaohsiung Cultural Center</p>
        
        <p className="py-3 sm:py-4 text-sm sm:text-base">⸻</p>
        
        <p className="font-semibold pt-4 text-sm sm:text-base">Art Fairs & Exhibitions</p>
        <p className="text-sm sm:text-base">2023 – EVAC (East Village Art Collection), New York</p>
        <p className="text-sm sm:text-base">2023 – Art Future, Taipei</p>
        <p className="text-sm sm:text-base">2023 – Art Formosa</p>
        <p className="text-sm sm:text-base">2023 – Art Hsinchu</p>
        <p className="text-sm sm:text-base">2022 – Young Art Kaohsiung</p>
        
        <p className="py-3 sm:py-4 text-sm sm:text-base">⸻</p>
        
        <p className="font-semibold pt-4 text-sm sm:text-base">Public Art</p>
        <p className="text-sm sm:text-base">2020 – Youngde Construction, public art project</p>
        
        <p className="py-3 sm:py-4 text-sm sm:text-base">⸻</p>
        
        <p className="font-semibold pt-4 text-sm sm:text-base">Awards & Honors</p>
        <p className="text-sm sm:text-base">2015 – First Prize, Western Painting, National Student Art Exhibition</p>
        <p className="text-sm sm:text-base">2014 – Honorable Mention, National Student Art Exhibition</p>
        <p className="text-sm sm:text-base">2012 – Second Place, Kaohsiung Creative Sketching Competition</p>
      </div>
    </section>
  );
}
