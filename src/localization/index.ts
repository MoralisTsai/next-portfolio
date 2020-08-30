import { en } from './content/en';
import { zh } from './content/zh';

export const language = {
  en,
  zh,
};

export type LanguageOption = keyof typeof language;
export type LanguageSchema = {
  content: typeof language.en;
};
