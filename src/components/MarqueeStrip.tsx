export const MarqueeStrip = () => {
  const items = [
    "Acesso Vitalício",
    "Lista de Compras Pronta",
    "Vídeos Passo-a-Passo",
    "Decoração DIY",
    "Checklist 3 Horas",
    "Templates Imprimíveis",
    "Receitas Testadas",
    "Garantia 7 Dias",
  ];

  return (
    <div className="bg-accent py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, index) => (
          <span key={index} className="mx-8 text-background font-semibold text-lg">
            ✦ {item}
          </span>
        ))}
      </div>
    </div>
  );
};
