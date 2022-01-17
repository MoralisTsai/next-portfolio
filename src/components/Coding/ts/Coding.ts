import { LanguageSchema, LanguageOption } from 'localization';

interface PassingProps extends LanguageSchema {
  language: LanguageOption;
}

export type CodingProps = PassingProps;
