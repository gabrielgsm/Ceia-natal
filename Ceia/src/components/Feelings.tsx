import { Heart, Sparkle, Camera, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const feelings = [
  {
    icon: Heart,
    title: "Orgulho",
    description: "quando a família parar por 5 minutos só pra olhar a mesa.",
  },
  {
    icon: Sparkle,
    title: "Surpresa gostosa",
    description: 'quando a sogra disser "isso tá lindo demais".',
  },
  {
    icon: TrendingUp,
    title: "Alegria sufocante",
    description: "ao ver as crianças correndo pra provar a sobremesa.",
  },
  {
    icon: Camera,
    title: "Viralização",
    description: "quando alguém tirar foto e marcar todo mundo nas redes. 📸💥",
  },
];

export const Feelings = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12">
            O QUE VOCÊ VAI <span className="text-accent">SENTIR</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {feelings.map((feeling, index) => (
              <Card key={index} className="p-8 bg-background border-accent/20 hover:border-accent transition-colors">
                <feeling.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-accent mb-3">
                  {feeling.title}
                </h3>
                <p className="text-lg text-foreground">
                  {feeling.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
