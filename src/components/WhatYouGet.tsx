import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const items = [
  {
    title: "Lista de compras pronta",
    description: "sem frescura, só o que importa.",
  },
  {
    title: "Receitas que emocionam",
    description: "entradas, principal, acompanhamentos, sobremesa e drink. Tudo testado.",
  },
  {
    title: "Decoração que parece cara",
    description: "DIY com materiais baratos. Templates imprimíveis.",
  },
  {
    title: "Vídeo 'faça comigo'",
    description: "acompanha você minuto a minuto.",
  },
  {
    title: "Checklist '3 horas'",
    description: "faz a porra acontecer sem pânico. 🎯",
  },
];

export const WhatYouGet = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-4">
            ROTEIRO DO <span className="text-accent">SONHO</span>
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            O que você recebe:
          </p>
          
          <div className="space-y-4">
            {items.map((item, index) => (
              <Card key={index} className="p-6 bg-card border-accent/30 hover:border-accent transition-all hover:shadow-glow">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-accent mb-2">
                      {item.title}
                    </h3>
                    <p className="text-lg text-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
