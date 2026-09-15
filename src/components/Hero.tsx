import React, { useEffect, useState } from "react";

interface HeroProps {
  onOpenDiagnostic: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");

    const update = () => setIsMobile(media.matches);

    update();

    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <section
      id="hero"
      className="relative bg-[#05070D] pt-24 overflow-hidden"
    >
      <div className="relative w-full h-[85vh]">
        <video
          key={isMobile ? "mobile" : "desktop"}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.webp"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src={
              isMobile
                ? "/videos/video-mobile.webm"
                : "/videos/video.webm"
            }
            type="video/webm"
          />

          <source
            src={
              isMobile
                ? "/videos/video-mobile.mp4"
                : "/videos/video.mp4"
            }
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#05070D] via-[#05070D]/70 to-transparent" />
      </div>
    </section>
  );
};
