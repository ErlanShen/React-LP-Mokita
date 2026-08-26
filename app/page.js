import Hero from "@/components/sections/01Hero";
import Problem from "@/components/sections/02Problem";
import Solution from "@/components/sections/03Solution";
import BeforeAfter from "@/components/sections/04BeforeAfter";
import HowItWorks from "@/components/sections/05HowItWorks";
import WhatsIncluded from "@/components/sections/06WhatsIncluded";
import PriceCta from "@/components/sections/07PriceCta";
import Bonuses from "@/components/sections/08Bonuses";
import Authority from "@/components/sections/09Authority";
import Testimonials from "@/components/sections/10Testimonials";
import Demo from "@/components/sections/11Demo";
import WhoIsFor from "@/components/sections/12WhoIsFor";
import SecondCta from "@/components/sections/13SecondCta";
import Guarantee from "@/components/sections/14Guarantee";
import Faq from "@/components/sections/15Faq";
import FinalCta from "@/components/sections/16FinalCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <BeforeAfter />
      <HowItWorks />
      <WhatsIncluded />
      <PriceCta />
      <Bonuses />
      <Authority />
      <Testimonials />
      <Demo />
      <WhoIsFor />
      <SecondCta />
      <Guarantee />
      <Faq />
      <FinalCta />
    </main>
  );
}
