import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import About from "@/components/Sections/About";
import Services from "@/components/Sections/Services";
import Gallery from "@/components/Sections/Gallery";
import Packages from "@/components/Sections/Packages";
import TestimonialsSection from "@/components/Sections/Testimonials";
import ContactSection from "@/components/Sections/Contact";
import FadeInSection from "@/components/Common/FadeInSection";

import { Metadata } from "next";

// import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Srikandi Wedding Organizer | Mewujudkan Pernikahan Impian Anda",
  description:
    "Srikandi Wedding Organizer membantu mewujudkan pernikahan yang elegan, berkesan, dan terorganisir dengan baik. Melayani wedding planning, koordinasi acara, dekorasi, dan kebutuhan pernikahan lainnya.",
  keywords: [
    "Wedding Organizer",
    "Wedding Planner",
    "Srikandi Wedding",
    "Jasa Pernikahan",
    "Wedding Organizer Indonesia",
    "Dekorasi Pernikahan",
    "Event Organizer Pernikahan",
  ],
  authors: [{ name: "Srikandi Wedding Organizer" }],
  creator: "Srikandi Wedding Organizer",
  applicationName: "Srikandi Wedding Organizer",
  // metadataBase: new URL("https://srikandiwedding.com"), // ganti dengan domain asli
  openGraph: {
    title: "Srikandi Wedding Organizer",
    description:
      "Mewujudkan pernikahan impian dengan pelayanan profesional dan penuh perhatian.",
    type: "website",
    locale: "id_ID",
    siteName: "Srikandi Wedding Organizer",
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />

      {/* <FadeInSection>
        <Hero />
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <About />
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <Services />
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <Packages />
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <Gallery />
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <TestimonialsSection />
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <ContactSection />
      </FadeInSection> */}
      <Hero />
      <About />
      <Services />
      <Packages />
      <Gallery />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
