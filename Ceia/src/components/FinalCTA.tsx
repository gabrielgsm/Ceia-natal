import { Button } from "@/components/ui/button";
import { Clock, Gift } from "lucide-react";
import { Card } from "@/components/ui/card";

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-warm relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-8">
            <Clock className="w-12 h-12 text-accent animate-pulse" />
            <Gift className="w-12 h-12 text-accent animate-pulse delay-150" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            CTA + <span className="text-accent">URGÊNCIA</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
            Quer sentir o abraço apertado, o "como você fez isso?" sussurrado no ouvido e ver as fotos inundando o celular?
          </p>
          
          <p className="text-2xl md:text-3xl text-accent font-bold mb-12">
            Clica agora. Monta a sua ceia essa semana. 🕒🎄💸
          </p>
          
          <Button variant="hero" size="lg" className="text-xl px-12 py-8 h-auto mb-12 animate-pulse">
            QUERO TRANSFORMAR MINHA CEIA — ACESSO IMEDIATO 🔥
          </Button>
          
          <Card className="p-8 bg-card border-accent/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-accent mb-4">
              GARANTIA (tranquila)
            </h3>
            <p className="text-lg text-foreground">
              Testa 7 dias — se não sentir a diferença, devolvemos seu dinheiro
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
