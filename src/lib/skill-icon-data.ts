import {
  siAngular,
  siAstro,
  siC,
  siDotnet,
  siGithubactions,
  siJavascript,
  siJest,
  siJira,
  siMui,
  siOpenjdk,
  siRadixui,
  siReact,
  siTailwindcss,
  siTypescript,
  siUnity,
  type SimpleIcon,
} from 'simple-icons';

import type { SkillIconId } from './skill-icons';

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

const iconById: Record<Exclude<SkillIconId, 'monogame'>, SimpleIcon> = {
  csharp: siDotnet,
  java: siOpenjdk,
  typescript: siTypescript,
  javascript: siJavascript,
  c: siC,
  react: siReact,
  mui: siMui,
  angular: siAngular,
  radix: siRadixui,
  astro: siAstro,
  tailwindcss: siTailwindcss,
  unity: siUnity,
  jest: siJest,
  githubactions: siGithubactions,
  agile: siJira,
};

export function getSkillIconData(id: SkillIconId, baseUrl: string): SkillIconData {
  if (id === 'monogame') {
    return {
      title: 'MonoGame',
      imageSrc: `${baseUrl}icons/monogame-logo.png`,
    };
  }

  const icon = iconById[id];

  return {
    title: icon.title,
    path: icon.path,
    hex: contrastHex(icon.hex),
  };
}
