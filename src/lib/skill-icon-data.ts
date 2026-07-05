import {
  siAngular,
  siAstro,
  siGithubactions,
  siJavascript,
  siJest,
  siJira,
  siMonogame,
  siMui,
  siRadixui,
  siReact,
  siTailwindcss,
  siTypescript,
  siUnity,
  type SimpleIcon,
} from 'simple-icons';

import type { SkillIconId } from './skill-icons';
import { assetUrl } from './asset-url';

export type SkillIconData = {
  title: string;
  path?: string;
  hex?: string;
  imageSrc?: string;
};

function contrastHex(hex: string): string {
  const normalized = hex.replace('#', '');
  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  if (luminance >= 0.42) {
    return normalized.toUpperCase();
  }

  const mix = (channel: number) => Math.round(channel + (255 - channel) * 0.78);

  return [mix(r), mix(g), mix(b)]
    .map((value) => value.toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase();
}

const imageIconById: Partial<Record<SkillIconId, { title: string; path: string }>> = {
  csharp: { title: 'C#', path: 'icons/csharp-logo.svg' },
  java: { title: 'Java', path: 'icons/java-logo.svg' },
  c: { title: 'C', path: 'icons/c-logo.svg' },
};

const iconById: Partial<Record<SkillIconId, SimpleIcon>> = {
  typescript: siTypescript,
  javascript: siJavascript,
  react: siReact,
  mui: siMui,
  angular: siAngular,
  radix: siRadixui,
  astro: siAstro,
  tailwindcss: siTailwindcss,
  unity: siUnity,
  monogame: siMonogame,
  jest: siJest,
  githubactions: siGithubactions,
  agile: siJira,
};

export function getSkillIconData(id: SkillIconId, baseUrl: string): SkillIconData {
  const imageIcon = imageIconById[id];

  if (imageIcon) {
    return {
      title: imageIcon.title,
      imageSrc: assetUrl(baseUrl, imageIcon.path),
    };
  }

  const icon = iconById[id];

  if (!icon) {
    throw new Error(`Missing skill icon data for "${id}"`);
  }

  return {
    title: icon.title,
    path: icon.path,
    hex: contrastHex(icon.hex),
  };
}
