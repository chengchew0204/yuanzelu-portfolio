"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="text-center py-8 pt-40">
      <div className="flex justify-center mb-8">
        <Image
          src="/contact.jpg"
          alt="Contact"
          width={600}
          height={600}
        />
      </div>
      <div className="space-y-2">
        <p>E-mail: <u><a href="mailto:assispepeweb@gmail.com">assispepeweb@gmail.com</a></u></p>
        <p><u><a href="https://www.instagram.com/yuanze.lu1998">instagram.com/yuanze.lu1998</a></u></p>
      </div>
    </section>
  );
}
