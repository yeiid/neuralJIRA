export const SITE = {
  name: 'NeuralJIRA',
  domain: 'neuraljira.tech',
  url: 'https://neuraljira.tech',
  email: 'yeifran67@gmail.com',
  whatsappNumber: '573058079573',
  portfolioUrl: 'https://portfolio.neuraljira.tech',
  founder: 'Yeifran Hernández',
  founderRole: 'Fundador y Arquitecto de Software Principal',
  location: 'Colombia · Cobertura Nacional',
  locale: 'es_CO',
  defaultTitle: 'NeuralJIRA — Ingeniería de Software, Web de Alto Rendimiento e IA Comercial',
  defaultDescription:
    'Estudio colombiano de ingeniería de software: sitios web ultrarrápidos con SEO técnico, bots de WhatsApp con IA y sistemas empresariales Local-First con pruebas en producción.',
} as const;

export function waUrl(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
