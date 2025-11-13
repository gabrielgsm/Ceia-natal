import { Crown } from "lucide-react";

export const Promise = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Crown className="w-16 h-16 text-accent" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Não é só receita
          </h2>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
             Não é só decoração
          </p>
          
          <p className="text-4xl md:text-6xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-8">
            É A EXPERIÊNCIA
          </p>
          
          <div className="bg-card p-8 rounded-2xl">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              Em <span className="text-accent font-bold">3 horas</span>, com passo-a-passo que{" "}
              <span className="text-accent font-bold">qualquer pessoa segue</span>, você vai entregar{" "}
              <span className="text-primary font-bold">cheiro, cor, textura e sentimento</span>.
            </p>
            <p className="text-2xl md:text-3xl text-accent font-bold mt-6">
              A mesa vira história — e você vira a responsável por cada elogio. 👑🔥
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
