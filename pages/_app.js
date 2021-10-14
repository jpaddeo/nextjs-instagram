import '../styles/global.css';

import { SessionProvider } from 'next-auth/react';

function IgClone({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default IgClone;
