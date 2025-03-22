// import BrandNaming from "@/components/main/brand-naming";
import DesignStrategic from "@/components/main/design-strategic";
import HeroSection from "@/components/main/hero-section";
import OurApproach from "@/components/main/our-approach";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <section className="relative">
        <DesignStrategic />
      </section>
      <section className="">
        <OurApproach />
      </section>
      {/* <BrandNaming /> */}
    </main>
  );
}
