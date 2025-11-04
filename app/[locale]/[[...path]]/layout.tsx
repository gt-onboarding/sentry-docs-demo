import 'prism-sentry/index.css';

import type {Metadata} from 'next';

import {HotReload} from 'sentry-docs/components/hotReload';
import { GTProvider } from 'gt-next';

export const metadata: Metadata = {
  title: {template: '%s | Sentry Documentation', default: 'Home'},
};

export default async function DocsLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  return (
    <GTProvider locale={locale}>
      <div>
        {children}
        <HotReload />
      </div>
    </GTProvider>
  );
}
