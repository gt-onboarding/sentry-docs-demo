import {cache} from 'react';

import {DocNode} from 'sentry-docs/docTree';

// Best-effort enforcement that this module only runs on the server. In build-time
// scripts (like generate-doctree) the `server-only` package will throw, so guard it.
try {
  // eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
  require('server-only');
} catch {
  // ignore – not running inside a Next.js server component environment
}

interface ServerContext {
  locale: string;
  path: string[];
  rootNode: DocNode;
}

export const serverContext = cache(() => {
  const context: ServerContext = {
    path: [],
    locale: 'en',

    rootNode: {
      path: '/',
      slug: '',
      frontmatter: {
        title: 'Home',
        slug: 'home',
      },
      children: [],
      missing: false,
      sourcePath: 'src/components/home.tsx',
    },
  };
  return context;
});

export const setServerContext = (data: Partial<ServerContext>) => {
  if (data.rootNode) serverContext().rootNode = data.rootNode;
  if (data.path) serverContext().path = data.path;
  if (data.locale) serverContext().locale = data.locale;
};
