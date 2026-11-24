export type SeasonId = 'default' | 'halloween' | 'christmas' | 'black-friday' | 'new-year';

export interface SeasonDateRange {
  startMonth: number; // 1-12
  startDay: number;   // 1-31
  endMonth: number;   // 1-12
  endDay: number;     // 1-31
}

export interface SeasonBanner {
  badge: string;
  message: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface SeasonConfig {
  id: SeasonId;
  label: string;
  description: string;
  /** Calendario automático (zona horaria Colombia). null = solo activación manual por admin. */
  dateRange: SeasonDateRange | null;
  ornament: 'none' | 'embers' | 'snow' | 'spark';
  logoMotif: 'none' | 'crescent' | 'bolt' | 'star' | 'sparkle';
  banner: SeasonBanner | null;
}

/**
 * Configuración administrativa de temporadas NeuralJIRA.
 * Calendario automático activo:
 * - Octubre (1–31 oct): Halloween Editorial
 * - Noviembre y Diciembre (1 nov – 31 dic): Navidad Champán & Pino
 * - Enero a Septiembre: Corporativo Base
 *
 * Para forzar cualquier edición manualmente desde Dokploy:
 *   PUBLIC_SITE_SEASON=christmas | halloween | default | black-friday | new-year | auto
 * Para previsualización privada sin publicar:
 *   https://neuraljira.tech/?preview_season=halloween
 */
export const SEASONS: Record<SeasonId, SeasonConfig> = {
  default: {
    id: 'default',
    label: 'Corporativo Base',
    description: 'Identidad editorial permanente de NeuralJIRA.',
    dateRange: null,
    ornament: 'none',
    logoMotif: 'none',
    banner: null,
  },
  halloween: {
    id: 'halloween',
    label: 'Halloween Editorial',
    description: 'Campaña automática de octubre (1–31 oct).',
    dateRange: { startMonth: 10, startDay: 1, endMonth: 10, endDay: 31 },
    ornament: 'embers',
    logoMotif: 'crescent',
    banner: {
      badge: 'Edición Octubre',
      message: '¿Tu sitio web lento espanta clientes? Solicita un diagnóstico técnico sin costo.',
      ctaLabel: 'Pedir diagnóstico',
      ctaHref: '/#contacto',
    },
  },
  christmas: {
    id: 'christmas',
    label: 'Navidad Champán & Pino',
    description: 'Campaña automática de noviembre y diciembre en Colombia (1 nov – 31 dic).',
    dateRange: { startMonth: 11, startDay: 1, endMonth: 12, endDay: 31 },
    ornament: 'snow',
    logoMotif: 'star',
    banner: {
      badge: 'Temporada Navideña',
      message: 'Prepara tu negocio para el cierre de año: agenda tu web, bot de WhatsApp o sistema a medida.',
      ctaLabel: 'Cotizar proyecto',
      ctaHref: '/#contacto',
    },
  },
  'black-friday': {
    id: 'black-friday',
    label: 'Black Friday & Cyber',
    description: 'Activación manual de administrador vía PUBLIC_SITE_SEASON=black-friday.',
    dateRange: null,
    ornament: 'none',
    logoMotif: 'bolt',
    banner: {
      badge: 'Semana Comercial',
      message: 'Condiciones especiales para proyectos web y automatización con IA agendados esta semana.',
      ctaLabel: 'Solicitar propuesta',
      ctaHref: '/#contacto',
    },
  },
  'new-year': {
    id: 'new-year',
    label: 'Año Nuevo & Arranque Q1',
    description: 'Activación manual de administrador vía PUBLIC_SITE_SEASON=new-year.',
    dateRange: null,
    ornament: 'spark',
    logoMotif: 'sparkle',
    banner: {
      badge: 'Arranque Q1',
      message: 'Inicia el año con una plataforma rápida y automatizada. Cupos Q1 abiertos.',
      ctaLabel: 'Agendar sesión',
      ctaHref: '/#contacto',
    },
  },
};

export const SEASON_LIST: SeasonConfig[] = Object.values(SEASONS);

export function isValidSeason(value: string | null | undefined): value is SeasonId {
  return Boolean(value && value in SEASONS);
}

export function getConfiguredSeasonMode(): 'auto' | SeasonId {
  const envVal = (import.meta.env.PUBLIC_SITE_SEASON ?? 'auto').trim().toLowerCase();
  if (isValidSeason(envVal)) return envVal;
  return 'auto';
}
