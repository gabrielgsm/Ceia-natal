import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ceia.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-1">
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            <Sparkles className="w-4 h-4 text-accent animate-pulse delay-100" />
            <Sparkles className="w-6 h-6 text-accent animate-pulse delay-200" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="text-foreground">Imagina a mesa lotada,</span>
          <br />
          <span className="text-foreground">a luz baixa, o abraço apertado —</span>
          <br />
          <span className="bg-gradient-gold bg-clip-text text-transparent">
            e todo mundo olhando pra VOCÊ
          </span>
          <br />
          <span className="text-foreground">com os olhos brilhando:</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-accent font-semibold mb-6">
          "quem fez isso?", "como você conseguiu?"
        </p>
        
        <p className="text-xl md:text-2xl text-foreground mb-8 max-w-3xl mx-auto">
          EM <span className="text-accent font-bold">3 HORAS</span> você monta a{" "}
          <span className="text-accent font-bold">CEIA</span> que vira história na família.
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12">
          Acesso imediato — transforma a sua noite. 🔥👀💸
        </p>
        
        <Button variant="hero" size="lg" className="text-lg px-12 py-8 h-auto">
          QUERO SER A RAINHA DA CEIA (ACESSO AGORA)
        </Button>
      </div>
    </section>
  );
};
