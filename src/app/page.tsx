"use client";

import { WebGLShader } from "@/components/ui/web-gl-shader";
import { HeroSection } from "@/components/sections/hero-section";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { AudienceSection } from "@/components/sections/audience-section";
import { EventsSection } from "@/components/sections/events-section";
import { PodcastSection } from "@/components/sections/podcast-section";
import { VideosSection } from "@/components/sections/videos-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function HomePage() {
  return (
    <>
      {/* Global WebGL Shader Background */}
      <WebGLShader />

      {/* All content floats above the shader */}
      <main className="relative z-10">
        <HeroSection />
        <ExpertiseSection />
        <AudienceSection />
        <EventsSection />
        <PodcastSection />
        <VideosSection />
        <FooterSection />
      </main>
    </>
  );
}
