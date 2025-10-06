"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="text-center py-8 pt-16 sm:pt-24 md:pt-40 px-4 sm:px-8">
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-[600px]">
          <Image
            src="/contact.jpg"
            alt="Contact"
            width={600}
            height={600}
            className="w-full h-auto"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 600px"
          />
        </div>
      </div>
      <div className="space-y-2 max-w-3xl mx-auto">
        <p className="text-sm sm:text-base break-words">
          E-mail: <u><a href="mailto:assispepeweb@gmail.com" className="hover:opacity-70">assispepeweb@gmail.com</a></u>
        </p>
        <p className="text-sm sm:text-base break-words">
          <u><a href="https://www.instagram.com/yuanze.lu1998" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">instagram.com/yuanze.lu1998</a></u>
        </p>
      </div>
    </section>
  );
}
