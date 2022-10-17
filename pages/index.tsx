// import React from 'react';

// import { Cover } from 'components/Cover';
// import { Coding } from 'components/Coding';
// import { Film } from 'components/Film';
// import { Photography } from 'components/Photography';
// import { Snap } from 'components/Snap';
// import { About } from 'components/About';
// import { Experience } from 'components/Experience';
// import { ChitChat } from 'components/ChitChat';
// import { Footer } from 'components/Footer';

// import { language, LanguageOption } from 'localization';

// export default function App(): JSX.Element {
//   const [localLanguage, setLanguage] = React.useState('zh' as LanguageOption);

//   const content = React.useMemo(() => language[localLanguage], [localLanguage]);

//   const changeLanguageAction = (type: LanguageOption) => {
//     setLanguage(type);
//   };

//   return (
//     <>
//       <Cover
//         changeLanguage={changeLanguageAction}
//         content={content}
//         language={localLanguage}
//       />
//       <Coding content={content} language={localLanguage} />
//       <Film content={content} />
//       <Photography content={content} />
//       <Snap content={content} />
//       <About content={content} />
//       <Experience content={content} />
//       <ChitChat content={content} />
//       <Footer content={content} />
//     </>
//   );
// }

import Head from "next/head";

export default function App() {
  return (
    <>
      <Head>
        <title>Moralis | Personal Website</title>
      </Head>
      <h1>Hello fdsfds</h1>
    </>
  );
}
