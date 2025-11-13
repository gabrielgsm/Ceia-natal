import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Fiz exatamente o passo-a-passo e a casa inteira chorou. Minha sogra encomendou as receitas no dia seguinte.",
    author: "Mariana, 34",
    emoji: "😭✨",
  },
  {
    text: "Meu marido ficou bobo e postou 20 fotos. Nunca imaginei tanto comentário.",
    author: "Renata, 29",
    emoji: "📸",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12">
            PROVA <span className="text-accent">(com emoção)</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-card border-accent/20 relative">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-accent/20" />
                <p className="text-lg md:text-xl text-foreground mb-6 relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-accent font-semibold">
                    — {testimonial.author}
                  </p>
                  <span className="text-2xl">{testimonial.emoji}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
