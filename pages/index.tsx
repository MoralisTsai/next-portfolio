import React from 'react';

import { Cover } from 'components/Cover';
import { Coding } from 'components/Coding';
import { Film } from 'components/Film';
import { Photography } from 'components/Photography';

import { language, LanguageOption } from 'localization';

export default function App(): JSX.Element {
  const [localLanguage, setLanguage] = React.useState(language.en);

  const changeLanguageAction = (type: LanguageOption) => {
    setLanguage(language[type]);
  };

  return (
    <>
      <Cover changeLanguage={changeLanguageAction} content={localLanguage} />
      <Coding content={localLanguage} />
      <Film content={localLanguage} />
      <Photography content={localLanguage} />
    </>
  );
}
