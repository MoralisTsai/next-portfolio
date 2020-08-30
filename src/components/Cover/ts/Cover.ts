import { LanguageSchema, LanguageOption } from 'localization';

interface PassingProps extends LanguageSchema {
  changeLanguage(type: LanguageOption): void;
}

export type CoverProps = PassingProps;
