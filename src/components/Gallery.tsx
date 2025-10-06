"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

type LayoutStyle = "small" | "big" | "mixed";

export default function Gallery() {
  const [layoutStyle, setLayoutStyle] = useState<LayoutStyle>("small");
  const [expandedImage, setExpandedImage] = useState<number | null>(null);
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const images = Array.from({ length: 35 }, (_, i) => ({
    src: `/home-collection-img/image_${String(i + 1).padStart(2, "0")}.jpg`,
    alt: `Gallery image ${i + 1}`,
  }));

  useEffect(() => {
    // Reset visible images when layout changes
    setVisibleImages(new Set());
    
    // Disconnect previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index") || "0");
          const rect = entry.target.getBoundingClientRect();
          
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            // Add when 20% visible
            setVisibleImages((prev) => new Set(prev).add(index));
          } else if (!entry.isIntersecting) {
            // Check if leaving from bottom or top
            const isBelowViewport = rect.top > window.innerHeight;
            
            if (isBelowViewport) {
              // Remove if leaving from bottom
              setVisibleImages((prev) => {
                const newSet = new Set(prev);
                newSet.delete(index);
                return newSet;
              });
            }
            // If leaving from top (rect.bottom < 0), do nothing - keep visible
          }
        });
      },
      {
        threshold: [0, 0.2],
        rootMargin: "0px",
      }
    );

    // Observe all images
    const imageElements = document.querySelectorAll("[data-index]");
    imageElements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [layoutStyle]);

  const handleImageClick = (index: number) => {
    setExpandedImage(expandedImage === index ? null : index);
  };

  return (
    <section className="py-8">
      <div className="flex justify-left gap-2 mb-8 text-sm px-4">
        <button
          onClick={() => setLayoutStyle("small")}
          className={`px-2 py-1 hover:underline ${layoutStyle === "small" ? "font-bold" : ""}`}
        >
          small
        </button>
        <button
          onClick={() => setLayoutStyle("big")}
          className={`px-2 py-1 hover:underline ${layoutStyle === "big" ? "font-bold" : ""}`}
        >
          big
        </button>
        <button
          onClick={() => setLayoutStyle("mixed")}
          className={`px-2 py-1 hover:underline ${layoutStyle === "mixed" ? "font-bold" : ""}`}
        >
          mixed size
        </button>
      </div>

      {layoutStyle === "small" && (
        <div className="flex flex-wrap gap-2 px-4">
          {images.map((img, index) => (
            <div 
              key={index}
              data-index={index}
              className={`transition-all duration-700 ease-out cursor-pointer hover:scale-105 ${
                expandedImage === index 
                  ? "w-[95%] sm:w-[70%] md:w-[50%]" 
                  : "w-[calc(33.333%-0.5rem)] sm:w-[calc(25%-0.5rem)] md:w-[calc(16.666%-0.5rem)] lg:w-[calc(12.5%-0.5rem)] xl:w-[calc(10%-0.5rem)]"
              } ${
                visibleImages.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{
                transitionDelay: visibleImages.has(index) ? `${index * 100}ms` : "0ms"
              }}
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={200}
                height={200}
                className={`w-full h-auto transition-opacity duration-300 hover:opacity-95 ${expandedImage === index ? "max-h-[90vh] object-contain" : ""}`}
                sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 16.666vw, (max-width: 1280px) 12.5vw, 10vw"
              />
            </div>
          ))}
        </div>
      )}

      {layoutStyle === "big" && (
        <div className="flex flex-wrap gap-4 px-4">
          {images.map((img, index) => (
            <div 
              key={index}
              data-index={index}
              className={`transition-all duration-700 ease-out cursor-pointer hover:scale-105 ${
                expandedImage === index 
                  ? "w-[95%] sm:w-[70%] md:w-[50%]" 
                  : "w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1rem)] lg:w-[calc(20%-1rem)]"
              } ${
                visibleImages.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{
                transitionDelay: visibleImages.has(index) ? `${index * 100}ms` : "0ms"
              }}
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={400}
                className={`w-full h-auto transition-opacity duration-300 hover:opacity-95 ${expandedImage === index ? "max-h-[90vh] object-contain" : ""}`}
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33.333vw, (max-width: 1024px) 25vw, 20vw"
              />
            </div>
          ))}
        </div>
      )}

      {layoutStyle === "mixed" && (
        <div className="flex flex-wrap justify-between px-4" style={{ gap: "1rem 0" }}>
          {images.map((img, index) => {
            const widths = [500, 300, 400, 350, 450];
            const baseWidth = widths[index % widths.length];
            const isExpanded = expandedImage === index;
            
            return (
              <div 
                key={index}
                data-index={index}
                className={`transition-all duration-700 ease-out cursor-pointer hover:scale-105 ${
                  isExpanded 
                    ? "w-[95%] sm:w-[70%] md:w-[50%]" 
                    : ""
                } ${
                  visibleImages.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
                style={{ 
                  width: isExpanded ? undefined : `${baseWidth}px`,
                  marginBottom: "1rem",
                  transitionDelay: visibleImages.has(index) ? `${index * 100}ms` : "0ms"
                }}
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={baseWidth}
                  height={baseWidth}
                  className={`h-auto w-full transition-opacity duration-300 hover:opacity-95 ${isExpanded ? "max-h-[90vh] object-contain" : ""}`}
                  sizes="(max-width: 768px) 50vw, 500px"
                />
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
