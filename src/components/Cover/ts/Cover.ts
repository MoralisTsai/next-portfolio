import { LanguageSchema, LanguageOption } from 'localization';

interface PassingProps extends LanguageSchema {
  changeLanguage(type: LanguageOption): void;
  language: LanguageOption;
}

export type CoverProps = PassingProps;
