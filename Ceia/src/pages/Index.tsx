import { Hero } from "@/components/Hero";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { EmotionalLead } from "@/components/EmotionalLead";
import { Promise } from "@/components/Promise";
import { Feelings } from "@/components/Feelings";
import { WhatYouGet } from "@/components/WhatYouGet";
import { Testimonials } from "@/components/Testimonials";
import { Objections } from "@/components/Objections";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <MarqueeStrip />
      <EmotionalLead />
      <Promise />
      <Feelings />
      <WhatYouGet />
      <Testimonials />
      <Objections />
      <FinalCTA />
    </div>
  );
};

export default Index;
