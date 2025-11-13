import { X, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const objections = [
  {
    objection: "Não sei cozinhar",
    answer: "Segue os vídeos e faz sem medo.",
  },
  {
    objection: "Não tenho tempo",
    answer: "Cronograma de 3 horas, pontinho por pontinho.",
  },
  {
    objection: "É caro?",
    answer: "Gastos controlados e alternativas baratas no guia. Para de inventar desculpa. 🤣",
  },
];

export const Objections = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12">
            OBJEÇÕES <span className="text-accent">AMASSADAS</span>
          </h2>
          
          <div className="space-y-6">
            {objections.map((item, index) => (
              <Card key={index} className="p-6 bg-background border-accent/20">
                <div className="flex items-start gap-4">
                  <X className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-lg md:text-xl text-muted-foreground flex-1">
                    "{item.objection}"
                  </p>
                </div>
                <div className="flex items-start gap-4 mt-4 ml-10">
                  <ArrowRight className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-lg md:text-xl text-accent font-semibold flex-1">
                    {item.answer}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
